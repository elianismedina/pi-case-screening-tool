"use client";

import * as React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import jsPDF from "jspdf";

import { formSchema, FormValues, steps } from "./constants";
import { CASE_TYPES } from "./casetypes";

export function useCaseForm() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [copied, setCopied] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      state: "",
      date: undefined,
      caseType: "",
      caseCategory: "",
      caseSubType: "",
      details: "",
      coreIncident: {
        exactDate: undefined,
        location: "",
        city: "",
        atFaultPartyKnown: undefined,
        atFaultPartyInfo: "",
        policeReportFiled: undefined,
        reportedToPropertyManager: undefined,
      },
      medicalEvaluation: {
        bodyPartsInjured: "",
        currentSymptoms: "",
        firstDoctorVisit: "",
        transportedByAmbulance: undefined,
        treatmentReceived: "",
        stillReceivingTreatment: undefined,
        surgeryCompleted: undefined,
        priorMedicalConditions: "",
        activelyTreatingCondition: undefined,
        currentMedications: "",
      },
      employment: {
        missedWork: undefined,
        currentlyAbleToWork: undefined,
        employerName: "",
        employerContact: "",
        hourlyRate: "",
        annualSalary: "",
        longTermWorkImpact: undefined,
      },
      insuranceCoverage: {
        otherPartyHasInsurance: undefined,
        atFaultInsuranceCompany: "",
        ownAutoInsuranceCompany: "",
        ownPolicyNumber: "",
        hasUMCoverage: undefined,
        hasUIMCoverage: undefined,
        hasMedPayOrPIP: undefined,
        pipDeductible: "",
        otherHouseholdVehicles: undefined,
        hasHealthInsurance: undefined,
        healthInsuranceType: "",
        workingAtTimeOfAccident: undefined,
      },
      liability: {
        vehicleYear: "",
        vehicleMake: "",
        vehicleModel: "",
        vehicleMileage: "",
        vehicleDrivable: undefined,
        vehicleLocation: "",
        wearingSeatbelt: undefined,
        distractedAtTime: "",
        faultAdmissions: "",
        priorAccidents: undefined,
        priorAttorneyConsulted: undefined,
        bestContactNumber: "",
        bestContactEmail: "",
        bestContactTime: "",
      },
      aiDecision: {
        decision: undefined,
        justification: "",
      },
    },
  });

  const watchedValues = useWatch({ control: form.control });
  const { errors } = form.formState;

  const canProceedToNext = (() => {
    switch (currentStep) {
      case 1:
        return (
          !!watchedValues.state &&
          !!watchedValues.date &&
          !errors.state &&
          !errors.date
        );
      case 2:
        return (
          !!watchedValues.caseType &&
          !!watchedValues.caseCategory &&
          (watchedValues.details?.length || 0) >= 50 &&
          !errors.caseType &&
          !errors.caseCategory &&
          !errors.details
        );
      case 3:
        // For the final step, we check if at least the key insurance and liability questions are answered
        const coreValid = !!watchedValues.coreIncident?.exactDate && !errors.coreIncident;
        const medicalValid = !!watchedValues.medicalEvaluation?.transportedByAmbulance && !errors.medicalEvaluation;
        const insuranceValid = !!watchedValues.insuranceCoverage?.otherPartyHasInsurance && !errors.insuranceCoverage;
        const liabilityValid = !!watchedValues.liability?.vehicleDrivable && !errors.liability;
        
        return coreValid && medicalValid && insuranceValid && liabilityValid;
      default:
        return false;
    }
  })();

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const copyToClipboard = () => {
    const values = form.getValues();
    const caseTypeLabel = CASE_TYPES.find(t => t.id === values.caseType)?.label || values.caseType;
    const currentType = CASE_TYPES.find(t => t.id === values.caseType);
    const categoryLabel = currentType?.categories.find(c => c.id === values.caseCategory)?.label || values.caseCategory;
    const currentCategory = currentType?.categories.find(c => c.id === values.caseCategory);
    const subTypeLabel = currentCategory?.subTypes?.find(s => s.id === values.caseSubType)?.label || values.caseSubType || "None";

    const prompt = `Review the following case against company policy:

CASE INFORMATION:
================
State: ${values.state}
Date of Incident: ${values.date ? format(values.date, "PPP") : "Not specified"}
Case Type: ${caseTypeLabel}
Category: ${categoryLabel}
Sub-type: ${subTypeLabel}
Incident Details: ${values.details}

CORE INCIDENT:
=============
Exact Date Known: ${values.coreIncident?.exactDate}
Location: ${values.coreIncident?.location || "Not specified"}
City: ${values.coreIncident?.city || "Not specified"}
At-Fault Party Known: ${values.coreIncident?.atFaultPartyKnown}
Police Report Filed: ${values.coreIncident?.policeReportFiled}

MEDICAL EVALUATION:
==================
Injured Body Parts: ${values.medicalEvaluation?.bodyPartsInjured || "Not specified"}
Current Symptoms: ${values.medicalEvaluation?.currentSymptoms || "Not specified"}
Transported by Ambulance: ${values.medicalEvaluation?.transportedByAmbulance}
Still Receiving Treatment: ${values.medicalEvaluation?.stillReceivingTreatment}
Surgery Completed/Recommended: ${values.medicalEvaluation?.surgeryCompleted}

EMPLOYMENT:
==========
Missed Work: ${values.employment?.missedWork}
Able to Work: ${values.employment?.currentlyAbleToWork}
Long-term Impact: ${values.employment?.longTermWorkImpact}

INSURANCE COVERAGE:
===================
Other Party Has Insurance: ${values.insuranceCoverage?.otherPartyHasInsurance}
At-Fault Insurance: ${values.insuranceCoverage?.atFaultInsuranceCompany || "Not specified"}
Own UM Coverage: ${values.insuranceCoverage?.hasUMCoverage}
Own UIM Coverage: ${values.insuranceCoverage?.hasUIMCoverage}
Health Insurance: ${values.insuranceCoverage?.hasHealthInsurance}

LIABILITY ASSESSMENT:
====================
Vehicle Drivable: ${values.liability?.vehicleDrivable}
Wearing Seatbelt: ${values.liability?.wearingSeatbelt}
Prior Accidents: ${values.liability?.priorAccidents}
Prior Attorney Consulted: ${values.liability?.priorAttorneyConsulted}

Please provide:
1. Decision (Accept/Decline/Escalate)
2. A 3-paragraph justification for your decision, explaining the reasoning following the 5 pillars: Liability, Injuries, SOL, Insurance, and Damages.`;

    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generatePDF = () => {
    const values = form.getValues();
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.setTextColor(0, 51, 102);
    doc.text("Case Screening Report", 20, 20);

    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated: ${format(new Date(), "PPP")}`, 20, 28);

    doc.setDrawColor(200, 200, 200);
    doc.line(20, 32, 190, 32);

    let yPosition = 42;

    const addSection = (title: string, content: string) => {
      const pageHeight = 297;
      const margin = 20;
      const contentWidth = 170;
      const lineHeight = 5;
      const bottomPadding = 30;

      // Check if title fits, if not add page
      if (yPosition + 15 > pageHeight - bottomPadding) {
        doc.addPage();
        yPosition = margin;
      }

      doc.setFontSize(12);
      doc.setTextColor(0, 51, 102);
      doc.text(title, margin, yPosition);
      yPosition += 8;

      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const lines = doc.splitTextToSize(content, contentWidth);

      lines.forEach((line: string) => {
        if (yPosition + lineHeight > pageHeight - bottomPadding) {
          doc.addPage();
          yPosition = margin;
        }
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
      });

      yPosition += 4;
      if (yPosition < pageHeight - bottomPadding) {
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, yPosition, 190, yPosition);
        yPosition += 10;
      } else {
        doc.addPage();
        yPosition = margin;
      }
    };

    const caseTypeLabel = CASE_TYPES.find(t => t.id === values.caseType)?.label || values.caseType;
    const currentType = CASE_TYPES.find(t => t.id === values.caseType);
    const categoryLabel = currentType?.categories.find(c => c.id === values.caseCategory)?.label || values.caseCategory;
    const currentCategory = currentType?.categories.find(c => c.id === values.caseCategory);
    const subTypeLabel = currentCategory?.subTypes?.find(s => s.id === values.caseSubType)?.label || values.caseSubType || "None";

    addSection(
      "JURISDICTION & STATUTE OF LIMITATIONS",
      `State: ${values.state}\nDate of Incident: ${values.date ? format(values.date, "PPP") : "Not specified"}`,
    );

    addSection("CASE CLASSIFICATION", 
      `Type: ${caseTypeLabel}\nCategory: ${categoryLabel}\nSub-type: ${subTypeLabel}`
    );

    addSection("INCIDENT DETAILS", values.details);

    addSection(
      "CORE INCIDENT",
      `Exact Date Known: ${values.coreIncident?.exactDate}\n` +
      `Location: ${values.coreIncident?.location || "Not specified"}\n` +
      `City: ${values.coreIncident?.city || "Not specified"}\n` +
      `At-Fault Party Known: ${values.coreIncident?.atFaultPartyKnown}\n` +
      `Police Report Filed: ${values.coreIncident?.policeReportFiled}`,
    );

    addSection(
      "MEDICAL EVALUATION",
      `Injured Body Parts: ${values.medicalEvaluation?.bodyPartsInjured || "Not specified"}\n` +
      `Current Symptoms: ${values.medicalEvaluation?.currentSymptoms || "Not specified"}\n` +
      `Transported by Ambulance: ${values.medicalEvaluation?.transportedByAmbulance}\n` +
      `Still Receiving Treatment: ${values.medicalEvaluation?.stillReceivingTreatment}\n` +
      `Surgery Completed/Recommended: ${values.medicalEvaluation?.surgeryCompleted}`,
    );

    addSection(
      "EMPLOYMENT",
      `Missed Work: ${values.employment?.missedWork}\n` +
      `Able to Work: ${values.employment?.currentlyAbleToWork}\n` +
      `Long-term Impact: ${values.employment?.longTermWorkImpact}`,
    );

    addSection(
      "INSURANCE COVERAGE",
      `Other Party Has Insurance: ${values.insuranceCoverage?.otherPartyHasInsurance}\n` +
      `At-Fault Insurance: ${values.insuranceCoverage?.atFaultInsuranceCompany || "Not specified"}\n` +
      `Own UM Coverage: ${values.insuranceCoverage?.hasUMCoverage}\n` +
      `Own UIM Coverage: ${values.insuranceCoverage?.hasUIMCoverage}\n` +
      `Health Insurance: ${values.insuranceCoverage?.hasHealthInsurance}`,
    );

    addSection(
      "LIABILITY ASSESSMENT",
      `Vehicle Drivable: ${values.liability?.vehicleDrivable}\n` +
      `Wearing Seatbelt: ${values.liability?.wearingSeatbelt}\n` +
      `Prior Accidents: ${values.liability?.priorAccidents}\n` +
      `Prior Attorney Consulted: ${values.liability?.priorAttorneyConsulted}`,
    );

    if (values.aiDecision?.decision) {
      addSection(
        "DECISION",
        `Decision: ${values.aiDecision.decision}\n\nJustification:\n${values.aiDecision.justification || ""}`,
      );
    }

    // Final Footer
    const pageHeight = 297;
    if (yPosition + 20 > pageHeight) {
      doc.addPage();
      yPosition = 20;
    } else {
      yPosition = Math.max(yPosition, 280); // Place footer near bottom if space exists
    }

    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      "This document was generated by the PI Screening Tool.",
      20,
      yPosition,
    );

    doc.save(`case-screening-${format(new Date(), "yyyy-MM-dd")}.pdf`);
  };

  const resetForm = () => {
    form.reset();
    setCurrentStep(1);
  };

  return {
    form,
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    canProceedToNext,
    copyToClipboard,
    generatePDF,
    resetForm,
    copied,
  };
}

