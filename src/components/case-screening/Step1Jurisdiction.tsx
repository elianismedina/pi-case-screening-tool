"use client"

import * as React from "react"
import { format } from "date-fns"
import { MapPin, Calendar as CalendarLucide, CalendarIcon } from "lucide-react"
import { useFormContext } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { states, FormValues } from "./constants"

export function Step1Jurisdiction() {
  const { control } = useFormContext<FormValues>()

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
      <div className="flex items-center gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
        <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
            Jurisdiction & Statute of Limitations
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            This information is essential for determining if your case is within the legal time limits.
          </p>
        </div>
      </div>

      <FormField
        control={control}
        name="state"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              State of Incident
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="h-12 border-zinc-200 bg-white/50 focus:ring-2 focus:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-950/50">
                  <SelectValue placeholder="Select the state" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {states.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="date"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="flex items-center gap-2">
              <CalendarLucide className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              Date of Incident
            </FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "h-12 w-full justify-start text-left font-normal border-zinc-200 bg-white/50 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:bg-zinc-900",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  captionLayout="dropdown"
                  startMonth={new Date(1900, 0)}
                  endMonth={new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
