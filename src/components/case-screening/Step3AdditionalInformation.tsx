"use client"

import * as React from "react"
import { Shield, Heart, AlertCircle } from "lucide-react"
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

      {/* Medical Treatment Section */}
      <div className="space-y-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Medical Treatment</h4>
        </div>

        <FormField
          control={control}
          name="medicalTreatment.sought"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Did you seek medical treatment?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalTreatment.provider"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Healthcare Provider (if applicable)</FormLabel>
              <FormControl>
                <Input placeholder="Hospital, clinic, or doctor's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalTreatment.diagnosis"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Diagnosis (if applicable)</FormLabel>
              <FormControl>
                <Input placeholder="Brief description of diagnosis" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="medicalTreatment.ongoing"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is treatment ongoing?</FormLabel>
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
      </div>

      {/* Insurance Coverage Section */}
      <div className="space-y-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-500" />
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Insurance Coverage</h4>
        </div>

        <FormField
          control={control}
          name="insuranceCoverage.hasInsurance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you have insurance coverage?</FormLabel>
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
          name="insuranceCoverage.provider"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Insurance Provider (if applicable)</FormLabel>
              <FormControl>
                <Input placeholder="Insurance company name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.policyNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Policy Number (if applicable)</FormLabel>
              <FormControl>
                <Input placeholder="Your policy number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="insuranceCoverage.coverageType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Coverage (if applicable)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Auto, Health, Homeowners" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Liability Section */}
      <div className="space-y-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/50">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-amber-500" />
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Liability Assessment</h4>
        </div>

        <FormField
          control={control}
          name="liability.clearLiability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is liability clear?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes, liability is clear</SelectItem>
                  <SelectItem value="no">No, liability is disputed</SelectItem>
                  <SelectItem value="unsure">Unsure</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.atFaultParty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Who is at fault? (if known)</FormLabel>
              <FormControl>
                <Input placeholder="Describe the at-fault party" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.witnesses"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Are there witnesses?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="liability.policeReport"
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
          name="liability.governmentInvolvement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is a government entity involved in the accident?</FormLabel>
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
      </div>

      {/* AI Decision Input (Optional) */}
      <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-blue-500" />
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
            AI Decision (Optional)
          </h4>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Paste the decision from your AI analysis here to include it in the final report.
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
                  placeholder="Paste the 3-paragraph justification here..."
                  className="min-h-[100px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
