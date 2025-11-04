import { niches } from '@/lib/niches';
import { NicheCard } from './components/NicheCard';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
          Etsy $3K/month Blueprint
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
          High-profit Etsy T-Shirt Niches You Can Launch With $0 Ad Spend
        </h1>
        <p className="max-w-3xl text-lg text-slate-200">
          Curated insights blending market data, organic growth tactics, and design prompts engineered to hit
          the $3,000 revenue milestone. Each niche is validated with current signals and built for low-cost
          acquisition.
        </p>
      </section>

      <section className="grid gap-10">
        {niches.map((insight) => (
          <NicheCard key={insight.id} insight={insight} />
        ))}
      </section>

      <footer className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
        <p className="font-semibold text-slate-100">Execution Notes</p>
        <ul className="mt-3 space-y-2">
          <li>• Focus on organic proof-of-concept channels first (TikTok, Reddit, Facebook groups) before reinvesting.</li>
          <li>• Use print-on-demand partners to avoid upfront inventory. Profit math is based on $18 average gross margin per tee.</li>
          <li>• Reinforce brand story via bundled digital assets (checklists, templates) to boost AOV without extra COGS.</li>
        </ul>
      </footer>
    </div>
  );
}
