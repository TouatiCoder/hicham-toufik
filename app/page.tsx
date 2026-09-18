import Link from "next/link";

const paths=[
  ["01","التاريخ والتراث","دراسة المصادر وتوثيق المعرفة."],
  ["02","فلسطين وإسرائيل","البحث والكتابة في فلسطين والمقاومة وإسرائيل والتطبيع."],
  ["03","الدراسات الاستراتيجية","دراسة استراتيجيات القوة في إسرائيل والمقاومة."],
  ["04","التحولات الإقليمية والدولية","تفكيك وتحليل التحولات الإقليمية والدولية."]
];

export default function Home(){
 return <main>
  <header className="border-b border-[var(--border)] bg-[var(--surface)]/90">
   <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5">
    <Link href="/" className="text-xl font-bold">هشام توفيق</Link>
    <nav className="hidden gap-7 text-sm md:flex">
      <Link href="/">الرئيسية</Link><Link href="/journey">الرحلة</Link><Link href="/books">الكتب</Link><Link href="/research">البحوث</Link><Link href="/media">الإعلام</Link><Link href="/archive">الأرشيف</Link>
    </nav>
   </div>
  </header>
  <section className="mx-auto max-w-[1240px] px-5 pb-24 pt-24 md:pt-36">
   <p className="mb-6 text-sm text-[var(--accent)]">مؤرخ · باحث · أستاذ · محلل استراتيجي</p>
   <h1 className="max-w-4xl text-5xl font-bold leading-[1.15] md:text-7xl">المعرفة تصنع<br/>الإنسان والعمران.</h1>
   <p className="mt-8 max-w-2xl text-lg leading-9 text-[var(--muted)]">من دراسة التراث إلى التأريخ، إلى الكتابة والبحث، إلى الإنتاج المعرفي والميداني.</p>
   <div className="mt-10 flex flex-wrap gap-3"><Link href="/journey" className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm text-white">اكتشف الرحلة</Link><Link href="/archive" className="rounded-full border border-[var(--border)] px-6 py-3 text-sm">تصفح الأرشيف</Link></div>
  </section>
  <section className="border-y border-[var(--border)] bg-[var(--surface)]"><div className="mx-auto max-w-[1240px] px-5 py-20"><p className="mb-3 text-sm text-[var(--accent)]">01 — من العلم إلى الإنتاج</p><h2 className="max-w-3xl text-3xl font-bold leading-relaxed md:text-5xl">الوسيلة من العلم إلى الإنتاج.. ومعركة الوعي والعلم مستمرة.</h2></div></section>
  <section className="mx-auto max-w-[1240px] px-5 py-24"><div className="grid gap-8 md:grid-cols-2">{paths.map(([n,t,d])=><article key={n} className="border-t border-[var(--border)] pt-5"><span className="text-sm text-[var(--muted)]">{n}</span><h2 className="mt-10 text-2xl font-bold">{t}</h2><p className="mt-3 leading-8 text-[var(--muted)]">{d}</p></article>)}</div></section>
  <section className="bg-[var(--ink)] text-white"><div className="mx-auto max-w-[1240px] px-5 py-24"><p className="text-sm opacity-60">باكورة الرحلة</p><p className="mt-8 max-w-4xl text-3xl font-bold leading-relaxed md:text-5xl">تشخيص الأزمة → التعريف بالداء → صناعة الدواء → صناعة العمران والعدالة</p></div></section>
  <footer className="mx-auto max-w-[1240px] px-5 py-14"><p className="text-sm text-[var(--muted)]">هشام توفيق — مؤرخ، باحث ومحلل استراتيجي</p></footer>
 </main>
}