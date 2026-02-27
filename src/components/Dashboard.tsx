"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, ReferenceLine, LabelList } from "recharts";

// ============================================================
// PALETTE — Corporate
// ============================================================
const P = {
  naranja: "#F47C20",
  azulProf: "#004B87",
  blanco: "#FFFFFF",
  grisClaro: "#F4F4F4",
  naranjaQ: "#CC5500",
  azulCielo: "#66AADD",
};

const C = {
  cria: P.naranja,
  recria: P.azulProf,
  agri: P.azulCielo,
  empresa: P.naranjaQ,
  pos: "#2E8B57",
  neg: "#C0392B",
  bg: "#E8E8E8",
  card: P.blanco,
  text: "#1A1A1A",
  text2: "#666666",
  border: "#D5D5D5",
  accent: P.naranja,
  purple: "#6A1B9A",
};

// ============================================================
// DATA — C_KPI (MGA v5_corr9)
// ============================================================
const wfData = [
  { name: "Ingreso Bruto", remain: 268100, deduct: 0, type: "start" },
  { name: "Costos Directos", remain: 79523, deduct: 188577, type: "neg" },
  { name: "Margen Bruto", remain: 79523, deduct: 0, type: "sub" },
  { name: "Gs. Estructura", remain: 53500, deduct: 26024, type: "neg" },
  { name: "Result. Operativo", remain: 53500, deduct: 0, type: "sub" },
  { name: "Amortizaciones", remain: 25007, deduct: 28492, type: "neg" },
  { name: "Ingreso Neto", remain: 25007, deduct: 0, type: "sub" },
  { name: "CO MO Familiar", remain: 25007, deduct: 0, type: "neg" },
  { name: "Ingreso al Capital", remain: 25007, deduct: 0, type: "end" },
];

const compIB = [
  { name: "Cría", value: 45.6, usd: 122291, color: C.cria },
  { name: "Recría", value: 37.2, usd: 99778, color: C.recria },
  { name: "Agricultura", value: 17.2, usd: 46031, color: C.agri },
];

const compMB = [
  { name: "Cría", value: 48.0, usd: 38151, color: C.cria },
  { name: "Recría", value: 39.1, usd: 31098, color: C.recria },
  { name: "Agricultura", value: 12.9, usd: 11994, color: C.agri },
];

const gsEst = [
  { name: "Inmobiliario rural", value: 6002, pct: 23.1, color: P.azulProf },
  { name: "Movilidad", value: 4200, pct: 16.1, color: P.naranja },
  { name: "Conserv. K fijo inanim.", value: 3988, pct: 15.3, color: P.naranjaQ },
  { name: "Honorarios agrónomo", value: 3864, pct: 14.8, color: P.azulCielo },
  { name: "Conserv. mej. fundiarias", value: 3640, pct: 14.0, color: "#3A7CA5" },
  { name: "IIBB", value: 2880, pct: 11.1, color: "#88BDE0" },
  { name: "Oficina y admin.", value: 1449, pct: 5.6, color: "#AAD4F0" },
];

const mbHaData = [
  { name: "Cría", value: 97, ha: 393, color: C.cria },
  { name: "Agricultura", value: 133, ha: 90, color: C.agri },
  { name: "Empresa", value: 165, ha: 483, color: C.empresa },
];

const deltaK = [
  { name: "Hacienda (neta)", value: -8301 },
  { name: "Maquinaria", value: -15097 },
  { name: "Pasturas", value: -5403 },
  { name: "Granos", value: 23495 },
  { name: "ΔK Total", value: -5306 },
];

// ============================================================
// HELPERS
// ============================================================
const fmtN = (v: number) => Math.abs(v).toLocaleString("es-AR", { maximumFractionDigits: 0 });
const fmtUSD = (v: number) => `${v < 0 ? "−" : ""}${fmtN(v)} USD`;
const fmtK = (v: number) => {
  const abs = Math.abs(v);
  const sign = v < 0 ? "−" : "";
  if (abs >= 1000) return `${sign}${(abs / 1000).toFixed(abs % 1000 === 0 ? 0 : 1)}k`;
  return `${sign}${fmtN(v)}`;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const labelFmtK = (v: any) => fmtK(Number(v) || 0);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const labelFmtN = (v: any) => fmtN(Number(v) || 0);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const labelFmtPct = (v: any) => `${v}%`;

// ============================================================
// SHARED COMPONENTS
// ============================================================
interface KPICardProps {
  label: string;
  value: string;
  unit?: string;
  sub?: string;
  color?: string;
  icon?: string;
}

function KPICard({ label, value, unit, sub, color, icon }: KPICardProps) {
  return (
    <div style={{
      background: C.card,
      borderRadius: 12,
      padding: "18px 20px",
      border: `1px solid ${C.border}`,
      flex: "1 1 200px",
      minWidth: 170,
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
    }}>
      <div style={{ fontSize: 12, color: C.text2, fontWeight: 500, marginBottom: 6 }}>
        {icon && <span style={{ marginRight: 5 }}>{icon}</span>}{label}
      </div>
      <div style={{
        display: "inline-block",
        background: color ? `${color}18` : "rgba(0,75,135,0.06)",
        padding: "5px 12px",
        borderRadius: 8,
        fontSize: 26,
        fontWeight: 700,
        color: color || C.text,
        lineHeight: 1.15,
      }}>
        {value}{unit && <span style={{ fontSize: 13, fontWeight: 500, marginLeft: 3 }}>{unit}</span>}
      </div>
      {sub && <div style={{ fontSize: 11, color: C.text2, marginTop: 5 }}>{sub}</div>}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  color?: string;
}

function Section({ children, color }: SectionProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "28px 0 14px" }}>
      <div style={{ width: 4, height: 22, borderRadius: 2, background: color || C.empresa }} />
      <h2 style={{ fontSize: 17, fontWeight: 700, color: C.text, margin: 0 }}>{children}</h2>
    </div>
  );
}

interface ChartCardProps {
  children: React.ReactNode;
  footer?: string;
}

function ChartCard({ children, footer }: ChartCardProps) {
  return (
    <div style={{
      background: C.card,
      borderRadius: 12,
      padding: "20px 16px 16px",
      border: `1px solid ${C.border}`,
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
    }}>
      {children}
      {footer && <div style={{ textAlign: "center", fontSize: 11, color: C.text2, marginTop: 6 }}>{footer}</div>}
    </div>
  );
}

interface DonutData {
  name: string;
  value: number;
  usd: number;
  color: string;
}

function Donut({ data, title }: { data: DonutData[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: C.text2, marginBottom: 2 }}>{title}</div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
            stroke="#fff"
            strokeWidth={2}
            onMouseEnter={(_, i) => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            {data.map((e, i) => (
              <Cell key={i} fill={e.color} opacity={active === null || active === i ? 1 : 0.35} style={{ transition: "opacity 0.2s" }} />
            ))}
          </Pie>
          <Tooltip
            formatter={(v, _n, p) => [`${v}% — ${fmtUSD(p.payload.usd)}`, p.payload.name]}
            contentStyle={{ borderRadius: 8, fontSize: 12, border: `1px solid ${C.border}` }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12 }}>
            <div style={{ width: 9, height: 9, borderRadius: "50%", background: d.color }} />
            <span style={{ fontWeight: 600 }}>{d.name}</span>
            <span style={{ color: C.text2 }}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface InsightBoxProps {
  color: string;
  bg: string;
  border: string;
  icon: string;
  children: React.ReactNode;
}

function InsightBox({ color, bg, border, icon, children }: InsightBoxProps) {
  return (
    <div style={{
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 10,
      padding: "12px 16px",
      marginTop: 18,
      fontSize: 13,
      color,
      lineHeight: 1.55
    }}>
      <strong>{icon} Lectura clave:</strong> {children}
    </div>
  );
}

interface TableCell {
  v?: string;
  color?: string;
}

interface TableRow {
  cells: (string | TableCell)[];
  bold?: boolean;
}

function DataTable({ headers, rows, headerBg }: { headers: (string | { label: string; color?: string })[]; rows: TableRow[]; headerBg?: string }) {
  return (
    <div style={{
      background: C.card,
      borderRadius: 12,
      border: `1px solid ${C.border}`,
      overflow: "hidden",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
    }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: headerBg || P.grisClaro }}>
            {headers.map((h, i) => {
              const label = typeof h === "string" ? h : h.label;
              const color = typeof h === "string" ? C.text : h.color || C.text;
              return (
                <th key={i} style={{
                  padding: "10px 14px",
                  textAlign: i === 0 ? "left" : "right",
                  fontWeight: 600,
                  color,
                  fontSize: 13
                }}>{label}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{
              background: row.bold ? (headerBg || P.grisClaro) : (i % 2 === 0 ? "#fff" : "#FAFAFA"),
              borderTop: "1px solid #EBEBEB"
            }}>
              {row.cells.map((cell, j) => {
                const cellValue = typeof cell === "string" ? cell : cell.v;
                const cellColor = typeof cell === "string" ? (j === 0 ? (row.bold ? C.text : C.text2) : C.text) : (cell.color || C.text);
                return (
                  <td key={j} style={{
                    padding: "9px 14px",
                    textAlign: j === 0 ? "left" : "right",
                    fontWeight: row.bold ? 700 : 400,
                    color: cellColor,
                    fontFeatureSettings: j > 0 ? "'tnum'" : undefined,
                    fontSize: 13,
                  }}>{cellValue}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Waterfall tooltip
interface WFTooltipProps {
  active?: boolean;
  payload?: Array<{ payload?: { name: string; remain: number; deduct: number } }>;
}

function WFTooltip({ active, payload }: WFTooltipProps) {
  if (!active || !payload?.length) return null;
  const d = payload[0]?.payload;
  if (!d) return null;
  return (
    <div style={{
      background: "#fff",
      border: `1px solid ${C.border}`,
      borderRadius: 8,
      padding: "7px 11px",
      fontSize: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
    }}>
      <div style={{ fontWeight: 600 }}>{d.name}</div>
      <div>Resultado: {fmtUSD(d.remain)}</div>
      {d.deduct > 0 && (
        <div style={{ color: C.neg }}>Deducción: −{fmtN(d.deduct)} USD</div>
      )}
    </div>
  );
}

// ============================================================
// TABS
// ============================================================
function TabGlobal() {
  return (
    <div>
      <Section color={C.empresa}>Cascada de Resultados — Del Ingreso Bruto al Ingreso al Capital</Section>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        <KPICard label="Ingreso Bruto" value={fmtN(268100)} unit="USD" icon="📈" sub="3 actividades" />
        <KPICard label="Margen Bruto" value={fmtN(79523)} unit="USD" icon="💰" color={C.pos} sub="29,7% del IB" />
        <KPICard label="Ingreso Neto" value={fmtN(25007)} unit="USD" icon="🎯" color={C.empresa} sub="9,3% del IB" />
        <KPICard label="Rent. sin tierra" value="3,9" unit="%" icon="📊" color={C.purple} sub="25,9 años recuperación K" />
      </div>
      <ChartCard>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={wfData} barCategoryGap="15%">
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: C.text2 }} axisLine={{ stroke: "#ddd" }} tickLine={false} interval={0} height={45} />
            <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 11, fill: C.text2 }} axisLine={false} tickLine={false} />
            <Tooltip content={<WFTooltip />} />
            <Bar dataKey="remain" stackId="wf" radius={[4, 4, 0, 0]}>
              {wfData.map((e, i) => (
                <Cell key={i} fill={
                  e.type === "start" ? C.pos :
                  e.type === "end" ? C.empresa :
                  e.type === "sub" ? P.naranja : "#999999"
                } />
              ))}
              <LabelList dataKey="remain" position="top" formatter={labelFmtK} style={{ fontSize: 11, fontWeight: 700, fill: C.text }} />
            </Bar>
            <Bar dataKey="deduct" stackId="wf" radius={[4, 4, 0, 0]}>
              {wfData.map((e, i) => (
                <Cell key={i} fill={e.deduct > 0 ? C.neg : "transparent"} opacity={0.85} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
        <KPICard label="MB / ha total" value="165" unit="USD/ha" sub="Referencia comparativa zonal" />
        <KPICard label="RO / ha total" value="111" unit="USD/ha" sub="Capacidad de ingreso efectivo" />
        <KPICard label="IN / ha total" value="52" unit="USD/ha" sub="Post amortizaciones" />
        <KPICard label="Superficie total" value="483" unit="ha" sub="393 ganad. + 90 agríc." />
      </div>
    </div>
  );
}

function TabComposicion() {
  return (
    <div>
      <Section color={C.empresa}>Composición por Actividad</Section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        <ChartCard><Donut data={compIB} title="Ingreso Bruto — 268.100 USD" /></ChartCard>
        <ChartCard><Donut data={compMB} title="Margen Bruto — 79.523 USD" /></ChartCard>
      </div>
      <Section color={P.azulProf}>Gastos de Estructura — 26.024 USD</Section>
      <ChartCard>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={gsEst} layout="vertical" barCategoryGap="18%" margin={{ left: 160, right: 50, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" horizontal={false} />
            <XAxis type="number" tickFormatter={v => fmtK(v)} tick={{ fontSize: 11, fill: C.text2 }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="name" width={155} tick={{ fontSize: 12, fill: C.text }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(v) => fmtUSD(v as number)} contentStyle={{ borderRadius: 8, fontSize: 12, border: `1px solid ${C.border}` }} />
            <Bar dataKey="value" radius={[0, 5, 5, 0]}>
              {gsEst.map((e, i) => <Cell key={i} fill={e.color} />)}
              <LabelList dataKey="pct" position="right" formatter={labelFmtPct} style={{ fontSize: 11, fontWeight: 600, fill: C.text2 }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <InsightBox color="#333" bg="#FFF3E0" border="#FFB74D" icon="🔍">
        La Cría aporta el 45,6% de los ingresos y retiene el 48% del margen. La Agricultura aporta 17,2% del ingreso pero solo 12,9% del margen — menor eficiencia relativa esta campaña, condicionada por el descuento zonal del 10% en maíz. Los gastos de estructura están liderados por el Impuesto Inmobiliario Rural (23,1%).
      </InsightBox>
    </div>
  );
}

function TabActividades() {
  return (
    <div>
      <Section color={C.cria}>Margen Bruto por hectárea — Cría, Agricultura y Empresa</Section>
      <ChartCard>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mbHaData} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 13, fill: C.text }} axisLine={{ stroke: "#ddd" }} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: C.text2 }} axisLine={false} tickLine={false} label={{ value: "USD/ha", angle: -90, position: "insideLeft", style: { fontSize: 11, fill: C.text2 } }} />
            <Tooltip formatter={(v, _n, p) => [`${fmtN(v as number)} USD/ha`, `Sobre ${p.payload.ha} ha`]} contentStyle={{ borderRadius: 8, fontSize: 12, border: `1px solid ${C.border}` }} />
            <Bar dataKey="value" radius={[5, 5, 0, 0]}>
              {mbHaData.map((e, i) => <Cell key={i} fill={e.color} />)}
              <LabelList dataKey="value" position="top" formatter={labelFmtN} style={{ fontSize: 13, fontWeight: 700, fill: C.text }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <Section color={C.recria}>Recría — Indicadores por cabeza y eficiencia</Section>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
        <KPICard label="MB / cabeza" value="259" unit="USD/cab" icon="🐄" color={C.recria} sub="120 cabezas recriadas" />
        <KPICard label="Costo / kg carne" value="3,82" unit="USD/kg" icon="⚖️" color={C.recria} sub="CD ÷ 18.000 kg producidos" />
        <KPICard label="GDPV" value="1,00" unit="kg/día" icon="📈" color={C.recria} sub="Ganancia diaria peso vivo · 150 días" />
        <KPICard label="Efic. conversión" value="2,97" unit="kg sup/kg gan" icon="🌽" color={C.recria} sub="53.520 kg supl. ÷ 18.000 kg" />
      </div>
      <Section color={P.azulCielo}>Cuadro comparativo por actividad</Section>
      <DataTable
        headers={["Indicador", { label: "Cría", color: C.cria }, { label: "Recría", color: C.recria }, { label: "Agricultura", color: C.agri }]}
        rows={[
          { cells: ["Ingreso Bruto (USD)", fmtN(122291), fmtN(99778), fmtN(46031)] },
          { cells: ["Costos Directos (USD)", fmtN(84140), fmtN(68679), fmtN(34037)] },
          { cells: ["Margen Bruto (USD)", fmtN(38151), fmtN(31098), fmtN(11994)], bold: true },
          { cells: ["MB / ha (USD/ha)", fmtN(97), "—", fmtN(133)] },
          { cells: ["MB / cab (USD/cab)", "—", fmtN(259), "—"] },
          { cells: ["Relación IB/CD", "1,45", "1,45", "1,35"] },
          { cells: ["Costo/kg (USD/kg)", "4,79", "3,82", "0,12"] },
          { cells: ["Superficie (ha)", fmtN(393), fmtN(28), fmtN(90)] },
        ]}
      />
      <InsightBox color="#003366" bg="#E3F2FD" border="#90CAF9" icon="🔍">
        Recría tiene un MB/cabeza de 259 USD con una conversión de 2,97 kg suplemento por kg de ganancia — eficiente para un sistema semi-intensivo. La GDPV de 1 kg/día indica buen ritmo de engorde. Cría y Agricultura mantienen relaciones IB/CD similares (~1,4–1,5).
      </InsightBox>
    </div>
  );
}

function TabPatrimonio() {
  return (
    <div>
      <Section color={C.purple}>Variación de Capital — ΔK Ejercicio (sin abigeato)</Section>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        <KPICard label="Capital Total" value={fmtN(3427613)} unit="USD" icon="🏦" sub="Fundiario + Fijo + Vivo + Circ." />
        <KPICard label="Capital sin tierra" value={fmtN(648847)} unit="USD" icon="🔧" sub="Inversión productiva líquida" />
        <KPICard label="ΔK sin abigeato" value={"−" + fmtN(5306)} unit="USD" icon="📉" color={C.neg} sub="Variación operativa neta" />
        <KPICard label="Abigeato (extra)" value={"−" + fmtN(22994)} unit="USD" icon="⚠️" color="#E65100" sub="24 vacas — pérdida extraordinaria" />
      </div>
      <ChartCard>
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={deltaK} barCategoryGap="22%">
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: C.text2 }} axisLine={{ stroke: "#ddd" }} tickLine={false} interval={0} height={42} />
            <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 11, fill: C.text2 }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(v) => fmtUSD(v as number)} contentStyle={{ borderRadius: 8, fontSize: 12, border: `1px solid ${C.border}` }} />
            <ReferenceLine y={0} stroke="#999" strokeWidth={1.5} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {deltaK.map((e, i) => (
                <Cell key={i} fill={i === 4 ? C.purple : e.value >= 0 ? C.pos : C.neg} />
              ))}
              <LabelList dataKey="value" position="top" formatter={labelFmtK} style={{ fontSize: 11, fontWeight: 600, fill: C.text }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <Section color={C.purple}>Desglose Variación de Capital</Section>
      <DataTable
        headerBg="#EDE7F6"
        headers={["Componente", "VRACI (USD)", "ΔK (USD)", "Nota"]}
        rows={[
          { cells: ["Hacienda (neta, sin abigeato)", fmtN(280630), { v: "−" + fmtN(8301), color: C.neg }, "Excluye 24 vacas robadas"] },
          { cells: ["Maquinaria", fmtN(79754), { v: "−" + fmtN(15097), color: C.neg }, "Depreciación (sin compras/ventas)"] },
          { cells: ["Pasturas perennes", fmtN(18878), { v: "−" + fmtN(5403), color: C.neg }, "Alfalfa + Agropiro + Llorón"] },
          { cells: ["Granos (maíz)", fmtN(23495), { v: "+" + fmtN(23495), color: C.pos }, "147.000 kg remanente en campo"] },
          { cells: ["ΔK OPERATIVA", "—", { v: "−" + fmtN(5306), color: C.purple }, "Descapitalización sin extraordinarios"], bold: true },
          { cells: ["Memo: Abigeato", "—", { v: "−" + fmtN(22994), color: "#E65100" }, "Pérdida extraordinaria — 24 vacas"] },
          { cells: ["ΔK TOTAL c/ abigeato", "—", { v: "−" + fmtN(28300), color: C.neg }, "Incluye pérdida extraordinaria"], bold: true },
        ]}
      />
      <InsightBox color="#4A148C" bg="#EDE7F6" border="#CE93D8" icon="🔍">
        Excluyendo el abigeato, la ΔK operativa es de solo −5.306 USD. El incremento de stock de granos (+23.495 USD) compensa la mayor parte de las depreciaciones de maquinaria y pasturas (−20.500 USD). El abigeato de 24 vacas (−22.994 USD) es un evento extraordinario que distorsiona el resultado patrimonial.
      </InsightBox>
    </div>
  );
}

// ============================================================
// MAIN
// ============================================================
export default function Dashboard() {
  const [tab, setTab] = useState("global");
  const tabs = [
    { id: "global", label: "Resultado Global", emoji: "📊" },
    { id: "composicion", label: "Composición", emoji: "🍕" },
    { id: "actividades", label: "Actividades", emoji: "🐄" },
    { id: "patrimonio", label: "Patrimonio", emoji: "🏦" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'Inter',system-ui,sans-serif" }}>
      <header style={{
        background: `linear-gradient(135deg, ${P.azulProf} 0%, ${P.naranjaQ} 100%)`,
        padding: "24px 28px 16px",
        color: "#fff"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 24, fontWeight: 800, letterSpacing: -0.5 }}>
              🌾 El Piojillo — Dashboard de Gestión
            </h1>
            <p style={{ margin: "3px 0 0", opacity: 0.85, fontSize: 13 }}>
              Campaña 2024/25 · 483 ha · San Luis, Argentina
            </p>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: 8,
            padding: "7px 14px",
            fontSize: 12,
            backdropFilter: "blur(4px)",
            textAlign: "right"
          }}>
            <div>Cría · Recría · Maíz</div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>IC: {fmtN(25007)} USD</div>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 3, marginTop: 14, overflowX: "auto" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                background: tab === t.id ? "rgba(255,255,255,0.22)" : "transparent",
                border: "none",
                color: "#fff",
                padding: "7px 16px",
                borderRadius: "8px 8px 0 0",
                cursor: "pointer",
                fontWeight: tab === t.id ? 700 : 400,
                fontSize: 13,
                opacity: tab === t.id ? 1 : 0.7,
                transition: "all 0.15s",
                whiteSpace: "nowrap",
                fontFamily: "inherit"
              }}
            >
              {t.emoji} {t.label}
            </button>
          ))}
        </nav>
      </header>
      <main style={{ maxWidth: 1060, margin: "0 auto", padding: "0 20px 36px" }}>
        {tab === "global" && <TabGlobal />}
        {tab === "composicion" && <TabComposicion />}
        {tab === "actividades" && <TabActividades />}
        {tab === "patrimonio" && <TabPatrimonio />}
      </main>
      <footer style={{
        textAlign: "center",
        padding: "14px 20px",
        borderTop: `1px solid ${C.border}`,
        fontSize: 11,
        color: C.text2
      }}>
        MGA — Modelo de Gestión Agropecuaria · El Piojillo · Campaña 2024/25
      </footer>
    </div>
  );
}
