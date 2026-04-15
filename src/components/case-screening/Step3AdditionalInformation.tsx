"use client"

import * as React from "react"
import { Shield, Heart, AlertCircle, MapPin, Briefcase, FileText, Phone } from "lucide-react"
import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FormValues } from "./constants"

export function Step3AdditionalInformation() {
  const { control } = useFormContext<FormValues>()

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
      <div className="flex items-center gap-3 rounded-lg bg-green-50 p-4 dark:bg-green-950/30">
        <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Additional Information
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Help us understand the medical, insurance, and liability aspects of your case.
          </p>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["core-incident"]} className="w-full space-y-4">
        {/* Core Incident and Demographic Questions */}
        <AccordionItem value="core-incident" className="border rounded-lg border-zinc-200 bg-zinc-50/50 px-4 dark:border-zinc-800 dark:bg-zinc-950/50">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-purple-500" />
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Core Incident and Demographic Questions</h4>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-4">

        <FormField
          control={control}
          name="coreIncident.exactDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you remember the exact date?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="coreIncident.location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Where specifically did this happen (intersection or address)?</FormLabel>
              <FormControl>
                <Input placeholder="Intersection or address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="coreIncident.city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What city did it occur in?</FormLabel>
              <FormControl>
                <Input placeholder="City name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="coreIncident.atFaultPartyKnown"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you know who caused this?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="coreIncident.atFaultPartyInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have their name or any contact information?</FormLabel>
              <FormControl>
                <Input placeholder="Name or contact information" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="coreIncident.policeReportFiled"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Was a police report filed?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="coreIncident.reportedToPropertyManager"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Did you report this to a property manager or animal control (if applicable)?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="not_applicable">Not Applicable</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
          </AccordionContent>
        </AccordionItem>

        {/* Medical Evaluation and Injury Details */}
        <AccordionItem value="medical-evaluation" className="border rounded-lg border-zinc-200 bg-zinc-50/50 px-4 dark:border-zinc-800 dark:bg-zinc-950/50">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Medical Evaluation and Injury Details</h4>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-4">

        <FormField
          control={control}
          name="medicalEvaluation.bodyPartsInjured"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What parts of your body were injured?</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the injured body parts" className="min-h-[80px] resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalEvaluation.currentSymptoms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Can you describe your current physical, cognitive, and emotional symptoms?</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe your symptoms" className="min-h-[80px] resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalEvaluation.firstDoctorVisit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Have you seen a doctor, and when was your first visit?</FormLabel>
              <FormControl>
                <Input placeholder="Date of first doctor visit" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalEvaluation.transportedByAmbulance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Were you transported from the scene by ambulance?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalEvaluation.treatmentReceived"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What medical treatment have you received so far (ER, Urgent Care, etc.)?</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the treatment received" className="min-h-[80px] resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalEvaluation.stillReceivingTreatment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Are you still receiving medical treatment?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalEvaluation.surgeryCompleted"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Has surgery related to the accident been completed or is it recommended?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes, completed</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalEvaluation.priorMedicalConditions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Before this accident, did you have any medical conditions, prior injuries, or prior accidents?</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe any prior conditions or injuries" className="min-h-[80px] resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalEvaluation.activelyTreatingCondition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Were you actively treating for any condition at the time of the accident?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalEvaluation.currentMedications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What medications or supplements are you currently taking?</FormLabel>
              <FormControl>
                <Textarea placeholder="List current medications and supplements" className="min-h-[80px] resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          </AccordionContent>
        </AccordionItem>

        {/* Employment and Economic Damages */}
        <AccordionItem value="employment" className="border rounded-lg border-zinc-200 bg-zinc-50/50 px-4 dark:border-zinc-800 dark:bg-zinc-950/50">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-blue-500" />
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Employment and Economic Damages</h4>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-4">

        <FormField
          control={control}
          name="employment.missedWork"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Have you missed any work because of these injuries?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="employment.currentlyAbleToWork"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Are you currently able to work, or are you limited in your duties?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes, able to work</SelectItem>
                  <SelectItem value="no">No, unable to work</SelectItem>
                  <SelectItem value="limited">Limited in duties</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="employment.employerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your employer&apos;s name?</FormLabel>
              <FormControl>
                <Input placeholder="Employer name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="employment.employerContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your employer&apos;s contact information?</FormLabel>
              <FormControl>
                <Input placeholder="Phone number or email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="employment.hourlyRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your hourly rate?</FormLabel>
              <FormControl>
                <Input placeholder="Hourly rate" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="employment.annualSalary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your annual salary?</FormLabel>
              <FormControl>
                <Input placeholder="Annual salary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="employment.longTermWorkImpact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you believe the injury will affect your ability to work long-term?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
          </AccordionContent>
        </AccordionItem>

        {/* Insurance Coverage and Financial Pillars */}
        <AccordionItem value="insurance" className="border rounded-lg border-zinc-200 bg-zinc-50/50 px-4 dark:border-zinc-800 dark:bg-zinc-950/50">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Insurance Coverage and Financial Pillars</h4>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-4">

        <FormField
          control={control}
          name="insuranceCoverage.otherPartyHasInsurance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you know if the other party has insurance?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.atFaultInsuranceCompany"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is the name of the at-fault party&apos;s insurance company?</FormLabel>
              <FormControl>
                <Input placeholder="Insurance company name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.ownAutoInsuranceCompany"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your own auto insurance company?</FormLabel>
              <FormControl>
                <Input placeholder="Your auto insurance company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.ownPolicyNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your policy number?</FormLabel>
              <FormControl>
                <Input placeholder="Your policy number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.hasUMCoverage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have Uninsured Motorist (UM) coverage?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.hasUIMCoverage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have Underinsured Motorist (UIM) coverage?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.hasMedPayOrPIP"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have MedPay or PIP coverage?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.pipDeductible"
          render={({ field }) => (
            <FormItem>
              <FormLabel>(For Florida callers) What is your PIP deductible?</FormLabel>
              <FormControl>
                <Input placeholder="PIP deductible amount" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.otherHouseholdVehicles"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Are there other vehicles in your household with insurance?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.hasHealthInsurance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have health insurance?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.healthInsuranceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What type of health insurance do you have?</FormLabel>
              <FormControl>
                <Input placeholder="Private, Medicare, Medicaid, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.workingAtTimeOfAccident"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Were you working at the time of the accident?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
          </AccordionContent>
        </AccordionItem>

        {/* Liability Assessment and History */}
        <AccordionItem value="liability" className="border rounded-lg border-zinc-200 bg-zinc-50/50 px-4 dark:border-zinc-800 dark:bg-zinc-950/50">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Liability Assessment and History</h4>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-4">

        <FormField
          control={control}
          name="liability.vehicleYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is the year of the vehicle involved?</FormLabel>
              <FormControl>
                <Input placeholder="Vehicle year" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.vehicleMake"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is the make of the vehicle involved?</FormLabel>
              <FormControl>
                <Input placeholder="Vehicle make" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.vehicleModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is the model of the vehicle involved?</FormLabel>
              <FormControl>
                <Input placeholder="Vehicle model" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.vehicleMileage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is the mileage of the vehicle involved?</FormLabel>
              <FormControl>
                <Input placeholder="Vehicle mileage" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.vehicleDrivable"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is the vehicle drivable?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.vehicleLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Where is the vehicle currently located?</FormLabel>
              <FormControl>
                <Input placeholder="Vehicle location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.wearingSeatbelt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Were you wearing your seatbelt at the time of the accident?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.distractedAtTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Were you doing anything at the time that the other side might bring up (e.g., using a phone, eating, or drinking)?</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe any activities" className="min-h-[80px] resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.faultAdmissions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Did anyone at the scene say anything about whose fault it was?</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe any admissions made" className="min-h-[80px] resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.priorAccidents"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Have you ever been in an accident before and made a claim?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.priorAttorneyConsulted"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Have you ever spoken with or hired any other attorney about this specific case?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-indigo-500" />
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Contact Information</h4>
          </div>

          <FormField
            control={control}
            name="liability.bestContactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the best phone number to reach you?</FormLabel>
                <FormControl>
                  <Input placeholder="Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="liability.bestContactEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the best email address to reach you?</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="liability.bestContactTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the best time to reach you?</FormLabel>
                <FormControl>
                  <Input placeholder="Best time to contact" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
          </AccordionContent>
        </AccordionItem>

        {/* AI Decision (Optional) */}
        <AccordionItem value="ai-decision" className="border rounded-lg border-blue-200 bg-blue-50/50 px-4 dark:border-blue-800 dark:bg-blue-950/30">
          <AccordionTrigger className="hover:no-underline py-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">AI Decision (Optional)</h4>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pb-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Paste the decision from your AI analysis here, covering the 5 pillars (Liability, Injuries, SOL, Insurance, and Damages) to include it in the final report.
        </p>

        <FormField
          control={control}
          name="aiDecision.decision"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Decision</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a decision" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Accept">Accept</SelectItem>
                  <SelectItem value="Decline">Decline</SelectItem>
                  <SelectItem value="Escalate">Escalate</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="aiDecision.justification"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Justification</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Paste the 3-paragraph justification (following the 5 pillars: Liability, Injuries, SOL, Insurance, and Damages) here..."
                  className="min-h-[100px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}