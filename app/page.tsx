import { Building2, Bot, Home, MessageSquare, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  [Building2,"Property Operations","Properties, buildings, units, tenants, leases, rent, payments, maintenance and expenses."],
  [Home,"Rental Marketplace","Publish vacant homes with real photos, video tours, availability, viewings and applications."],
  [MessageSquare,"Communication","Prepare for SMS, WhatsApp, email and voice automation with a central communication history."],
  [Bot,"Mav AI","An intelligent property assistant for collections, vacancies, maintenance, reports and marketing."],
  [ShieldCheck,"Built for Business","Multi-tenant architecture, roles, audit trails and secure server-side operations."],
  [TrendingUp,"Grow Your Portfolio","Leads, viewings, applications, referrals, subscriptions and property marketing."]
] as const;

export default function HomePage(){
  return <main><div className="container">
    <header className="topbar"><a className="brand" href="/"><span className="brand-mark">M</span>MavRent</a><nav className="nav"><a href="#platform">Platform</a><a href="#marketplace">Marketplace</a><a href="#ai">Mav AI</a><a href="/dashboard">Dashboard</a></nav></header>
    <section className="hero"><span className="eyebrow">THE PROPERTY OPERATING PLATFORM</span><h1>Manage. Market. Rent. Grow.</h1><p>MavRent is being built as a serious commercial platform for landlords, property managers, real-estate agents and tenants — combining rental operations, property marketing, communication and intelligent automation.</p><div className="actions"><a className="btn primary" href="/dashboard">Open platform</a><a className="btn" href="#platform">Explore the vision</a></div></section>
    <section id="platform" className="grid">{features.map(([Icon,title,text])=><article className="card" key={title}><div className="icon"><Icon size={20}/></div><h3>{title}</h3><p>{text}</p></article>)}</section>
    <section id="marketplace" className="card section-title"><span className="eyebrow">RENTAL MARKETPLACE</span><h2>Every vacant unit can become a lead-generation machine.</h2><p>Publish a professional listing page with photos, videos, availability, viewing requests and applications.</p></section>
    <section id="ai" className="card section-title" style={{marginBottom:70}}><span className="eyebrow">MAV AI</span><h2>Your property business has an assistant.</h2><p>Ask what needs attention, who is overdue, which units are vacant, how collections are performing, or create property marketing content.</p></section>
  </div></main>;
}