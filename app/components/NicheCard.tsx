'use client';

import { useState } from 'react';
import { ScoreBadge } from './ScoreBadge';
import type { NicheInsight } from '@/lib/niches';

function saturationTone(level: NicheInsight['saturationRisk']) {
  if (level === 'low') return 'good';
  if (level === 'medium') return 'neutral';
  return 'caution';
}

export function NicheCard({ insight }: { insight: NicheInsight }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40 transition hover:border-brand/50 hover:shadow-brand/30">
      <header className="flex flex-col gap-4 border-b border-slate-800 pb-5">
        <div className="flex flex-wrap items-center gap-3">
          <ScoreBadge label="Demand" value={insight.demandScore} tone="good" />
          <ScoreBadge label="Competition" value={insight.competitionScore} tone="good" />
          <ScoreBadge
            label="Saturation"
            value={insight.saturationRisk.toUpperCase()}
            tone={saturationTone(insight.saturationRisk)}
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">{insight.title}</h2>
          <p className="mt-2 text-sm text-slate-300">{insight.audience}</p>
        </div>
        <p className="rounded-xl bg-slate-800/80 p-4 text-sm text-slate-200">
          <span className="font-semibold text-brand">Micro-angle:</span> {insight.microAngle}
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">Pricing Power</p>
            <p className="mt-1 text-sm text-slate-200">{insight.pricingPower}</p>
          </div>
          <div className="rounded-2xl bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">Revenue Range</p>
            <p className="mt-1 text-sm text-slate-200">{insight.estimatedMonthlySales}</p>
          </div>
          <div className="rounded-2xl bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">Breakeven Math</p>
            <p className="mt-1 text-sm text-slate-200">{insight.breakEvenUnits}</p>
          </div>
        </div>
      </header>

      <section className="mt-6 grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">90-Day Action Plan</h3>
          <ol className="mt-3 space-y-3 text-sm text-slate-200">
            {insight.actionPlan.map((step, index) => (
              <li key={step} className="rounded-xl bg-slate-950/60 p-3">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/30 text-xs font-bold text-brand-dark">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-5 lg:col-span-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Validation Signals</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-200">
              {insight.validation.map((signal) => (
                <li key={signal.metric} className="rounded-xl bg-slate-950/60 p-3">
                  <p className="font-semibold text-slate-100">{signal.metric}</p>
                  <p className="text-brand-light">{signal.value}</p>
                  <p className="text-slate-300">{signal.insight}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Keyword Clusters</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {insight.keywordClusters.map((keyword) => (
                <span key={keyword} className="rounded-full bg-brand/20 px-3 py-1 text-brand-light">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-6 w-full rounded-xl border border-brand/40 bg-brand/20 px-4 py-3 text-sm font-semibold text-brand transition hover:bg-brand/30"
      >
        {expanded ? 'Hide advanced playbook' : 'Show advanced playbook'}
      </button>

      {expanded && (
        <div className="mt-6 space-y-8 rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Design Prompts</h3>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {insight.designPrompts.map((prompt) => (
                <div key={prompt.title} className="rounded-2xl bg-slate-900/60 p-4">
                  <p className="text-sm font-semibold text-white">{prompt.title}</p>
                  <p className="mt-2 text-sm text-slate-200">{prompt.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-brand">Hook: {prompt.hook}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Organic Acquisition</h3>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {insight.marketing.map((channel) => (
                <div key={channel.platform} className="rounded-2xl bg-slate-900/60 p-4">
                  <p className="text-sm font-semibold text-white">{channel.platform}</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-200">
                    {channel.tactics.map((tactic) => (
                      <li key={tactic}>• {tactic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Suppliers & Fulfillment</h3>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {insight.suppliers.map((supplier) => (
                <div key={supplier.url} className="rounded-2xl bg-slate-900/60 p-4">
                  <p className="text-sm font-semibold text-white">{supplier.name}</p>
                  <a className="text-xs" href={supplier.url} target="_blank" rel="noreferrer">
                    {supplier.url}
                  </a>
                  <p className="mt-2 text-sm text-slate-200">{supplier.notes}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Automation Stack</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {insight.automationStacks.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Retention & LTV</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {insight.retentionIdeas.map((idea) => (
                  <li key={idea}>• {idea}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      )}
    </article>
  );
}
