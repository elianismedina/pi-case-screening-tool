"use client"

import * as React from "react"
import { FileText } from "lucide-react"
import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormValues } from "./constants"
import { CASE_TYPES } from "./casetypes"

export function Step2IncidentDetails() {
  const { control, watch, setValue } = useFormContext<FormValues>()
  
  const selectedTypeId = watch("caseType")
  const selectedCategoryId = watch("caseCategory")

  const currentType = CASE_TYPES.find(t => t.id === selectedTypeId)
  const categories = currentType?.categories || []
  const currentCategory = categories.find(c => c.id === selectedCategoryId)
  const subTypes = currentCategory?.subTypes || []

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
      <div className="flex items-center gap-3 rounded-lg bg-indigo-50 p-4 dark:bg-indigo-950/30">
        <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Incident Details
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Categorize the incident and provide a detailed narrative of what happened.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Case Type Selection */}
        <FormField
          control={control}
          name="caseType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Case Type</FormLabel>
              <Select 
                onValueChange={(val) => {
                  field.onChange(val)
                  setValue("caseCategory", "")
                  setValue("caseSubType", "")
                }} 
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="h-12 border-zinc-200 bg-white/50 dark:border-zinc-800 dark:bg-zinc-950/50">
                    <SelectValue placeholder="Select case type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CASE_TYPES.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Case Category Selection */}
        <FormField
          control={control}
          name="caseCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select 
                onValueChange={(val) => {
                  field.onChange(val)
                  setValue("caseSubType", "")
                }} 
                value={field.value}
                disabled={!selectedTypeId}
              >
                <FormControl>
                  <SelectTrigger className="h-12 border-zinc-200 bg-white/50 dark:border-zinc-800 dark:bg-zinc-950/50">
                    <SelectValue placeholder={selectedTypeId ? "Select category" : "First select a case type"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Case SubType Selection (Conditional) */}
      {subTypes.length > 0 && (
        <FormField
          control={control}
          name="caseSubType"
          render={({ field }) => (
            <FormItem className="animate-in fade-in slide-in-from-top-2 duration-300">
              <FormLabel>Specific Sub-type</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="h-12 border-zinc-200 bg-white/50 dark:border-zinc-800 dark:bg-zinc-950/50">
                    <SelectValue placeholder="Select specific sub-type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {subTypes.map((sub) => (
                    <SelectItem key={sub.id} value={sub.id}>
                      {sub.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {/* Narrative */}
      <FormField
        control={control}
        name="details"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              Case Narrative
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Please describe what happened in detail. Include information about the location, parties involved, sequence of events, and any other relevant circumstances..."
                className="min-h-[200px] resize-none border-zinc-200 bg-white/50 focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-950/50"
                {...field}
              />
            </FormControl>
            <FormDescription>
              Minimum 50 characters. The more detail you provide, the better we can assess your case.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
