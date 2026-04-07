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
import { FormValues } from "./constants"

export function Step2IncidentDetails() {
  const { control } = useFormContext<FormValues>()

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
      <div className="flex items-center gap-3 rounded-lg bg-indigo-50 p-4 dark:bg-indigo-950/30">
        <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Incident Details
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Provide a detailed narrative of what happened. Include who, what, when, where, and how.
          </p>
        </div>
      </div>

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
                className="min-h-[250px] resize-none border-zinc-200 bg-white/50 focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-950/50"
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
