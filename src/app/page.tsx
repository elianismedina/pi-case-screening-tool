import { CaseScreeningForm } from "@/components/CaseScreeningForm"
import { ModeToggle } from "@/components/ModeToggle"
import { Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 dark:bg-black font-sans">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/10" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-600/10" />

      <main className="container relative z-10 mx-auto flex flex-col items-center justify-center space-y-12 px-4 py-16 lg:py-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1 text-sm font-medium text-blue-600 backdrop-blur-md dark:border-blue-900/50 dark:bg-blue-950/20 dark:text-blue-400">
              <Shield className="h-4 w-4" />
              <span>Trusted Case Screening</span>
            </div>
            <ModeToggle />
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
            Personal Injury Case <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">Screening Tool</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Quickly determine if your case has merit before moving forward. Fast, reliable, and confidential.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full flex justify-center animate-in fade-in slide-in-from-bottom-5 duration-700">
          <CaseScreeningForm />
        </div>
      </main>

      <footer className="relative z-10 border-t border-zinc-200 bg-white/50 py-8 backdrop-blur-md dark:border-zinc-800 dark:bg-black/50">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} PI Screening Tool. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
