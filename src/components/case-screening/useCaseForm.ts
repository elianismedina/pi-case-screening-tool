"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import jsPDF from "jspdf";

import { formSchema, FormValues, steps } from "./constants";

export function useCaseForm() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [copied, setCopied] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      state: "",
      details: "",
      medicalTreatment: {
        sought: undefined,
        provider: "",
        diagnosis: "",
        ongoing: undefined,
      },
      insuranceCoverage: {
        hasInsurance: undefined,
        provider: "",
        policyNumber: "",
        coverageType: "",
      },
      liability: {
        clearLiability: undefined,
        atFaultParty: "",
        witnesses: undefined,
        policeReport: undefined,
        governmentInvolvement: undefined,
      },
      aiDecision: {
        decision: undefined,
        justification: "",
      },
    },
  });

  const watchedValues = form.watch();
  const { errors } = form.formState;

  const canProceedToNext = React.useMemo(() => {
    switch (currentStep) {
      case 1:
        return (
          !!watchedValues.state &&
          !!watchedValues.date &&
          !errors.state &&
          !errors.date
        );
      case 2:
        return (watchedValues.details?.length || 0) >= 50 && !errors.details;
      case 3:
        const medicalValid =
          !!watchedValues.medicalTreatment?.sought &&
          !errors.medicalTreatment?.sought;
        const insuranceValid =
          !!watchedValues.insuranceCoverage?.hasInsurance &&
          !errors.insuranceCoverage?.hasInsurance;
        const liabilityValid =
          !!watchedValues.liability?.clearLiability &&
          !errors.liability?.clearLiability &&
          !!watchedValues.liability?.witnesses &&
          !errors.liability?.witnesses &&
          !!watchedValues.liability?.policeReport &&
          !errors.liability?.policeReport &&
          !!watchedValues.liability?.governmentInvolvement &&
          !errors.liability?.governmentInvolvement;
        return medicalValid && insuranceValid && liabilityValid;
      default:
        return false;
    }
  }, [currentStep, watchedValues, errors]);

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
    const prompt = `Review the following case against company policy:

CASE INFORMATION:
================
State: ${values.state}
Date of Incident: ${format(values.date, "PPP")}
Incident Details: ${values.details}

MEDICAL TREATMENT:
=================
Sought Medical Treatment: ${values.medicalTreatment.sought}
Provider: ${values.medicalTreatment.provider || "Not specified"}
Diagnosis: ${values.medicalTreatment.diagnosis || "Not specified"}
Ongoing Treatment: ${values.medicalTreatment.ongoing}

INSURANCE COVERAGE:
===================
Has Insurance: ${values.insuranceCoverage.hasInsurance}
Provider: ${values.insuranceCoverage.provider || "Not specified"}
Policy Number: ${values.insuranceCoverage.policyNumber || "Not specified"}
Coverage Type: ${values.insuranceCoverage.coverageType || "Not specified"}

LIABILITY:
==========
Clear Liability: ${values.liability.clearLiability}
At Fault Party: ${values.liability.atFaultParty || "Not specified"}
Witnesses: ${values.liability.witnesses}
Police Report: ${values.liability.policeReport}
Government Involvement: ${values.liability.governmentInvolvement}

Please provide:
1. Decision (Accept/Decline/Escalate)
2. A 3-paragraph justification for your decision`;

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

    addSection(
      "JURISDICTION & STATUTE OF LIMITATIONS",
      `State: ${values.state}\nDate of Incident: ${format(values.date, "PPP")}`,
    );

    addSection("INCIDENT DETAILS", values.details);

    addSection(
      "MEDICAL TREATMENT",
      `Sought Medical Treatment: ${values.medicalTreatment.sought}\n` +
        `Provider: ${values.medicalTreatment.provider || "Not specified"}\n` +
        `Diagnosis: ${values.medicalTreatment.diagnosis || "Not specified"}\n` +
        `Ongoing Treatment: ${values.medicalTreatment.ongoing}`,
    );

    addSection(
      "INSURANCE COVERAGE",
      `Has Insurance: ${values.insuranceCoverage.hasInsurance}\n` +
        `Provider: ${values.insuranceCoverage.provider || "Not specified"}\n` +
        `Policy Number: ${values.insuranceCoverage.policyNumber || "Not specified"}\n` +
        `Coverage Type: ${values.insuranceCoverage.coverageType || "Not specified"}`,
    );

    addSection(
      "LIABILITY",
      `Clear Liability: ${values.liability.clearLiability}\n` +
        `At Fault Party: ${values.liability.atFaultParty || "Not specified"}\n` +
        `Witnesses: ${values.liability.witnesses}\n` +
        `Police Report: ${values.liability.policeReport}\n` +
        `Government Involvement: ${values.liability.governmentInvolvement}`,
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
