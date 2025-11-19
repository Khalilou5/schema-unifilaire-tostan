"use client";
import React, { useRef } from 'react';
import { Download, ZoomIn, ZoomOut, Printer } from 'lucide-react';

const SchemaUnifilaireTostan = () => {
  const svgRef = useRef(null);
  const [zoom, setZoom] = React.useState(1);

  const handleDownload = () => {
    const svg = svgRef.current;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Schema_Unifilaire_TOSTAN_A3_v3.svg';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <div className="bg-white border-b border-gray-300 p-2 flex items-center gap-4 shadow-sm print:hidden">
        <button
          onClick={() => setZoom(Math.min(zoom + 0.1, 2))}
          className="p-2 hover:bg-gray-100 rounded"
          title="Zoom +"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={() => setZoom(Math.max(zoom - 0.1, 0.5))}
          className="p-2 hover:bg-gray-100 rounded"
          title="Zoom -"
        >
          <ZoomOut size={20} />
        </button>
        <span className="text-sm text-gray-600">{Math.round(zoom * 100)}%</span>
        <div className="flex-1" />
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          <Printer size={18} />
          Imprimer
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Download size={18} />
          Télécharger SVG
        </button>
      </div>

      <div className="flex-1 overflow-auto p-8 bg-gray-50">
        <div style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}>
          <svg
            ref={svgRef}
            width="1400"
            height="990"
            viewBox="0 0 1400 990"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-white shadow-lg"
          >
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#000" />
              </marker>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
              </pattern>
            </defs>

            <rect width="1400" height="990" fill="url(#grid)" />
            <rect width="1400" height="990" fill="none" stroke="#000" strokeWidth="2" />

            {/* TITRE PRINCIPAL */}
            <rect x="20" y="20" width="960" height="40" fill="#1e40af" stroke="#000" strokeWidth="2"/>
            <text x="500" y="47" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#fff" textAnchor="middle">
              SCHÉMA UNIFILAIRE INTÉGRÉ - PRODUCTION PV ET DISTRIBUTION
            </text>

            {/* SECTION SOURCES */}
            <g id="sources">
              {/* SENELEC */}
              <circle cx="80" cy="120" r="25" fill="#fff" stroke="#000" strokeWidth="2"/>
              <text x="80" y="118" fontFamily="Arial" fontSize="10" textAnchor="middle" fontWeight="bold">SENELEC</text>
              <text x="80" y="130" fontFamily="Arial" fontSize="9" textAnchor="middle">3P+N+PE</text>
              <text x="80" y="155" fontFamily="Arial" fontSize="9" textAnchor="middle" fill="#666">5×95mm²</text>
              <line x1="80" y1="145" x2="80" y2="200" stroke="#000" strokeWidth="3" markerEnd="url(#arrowhead)"/>

              {/* GROUPE ELECTROGENE */}
              <rect x="160" y="95" width="60" height="50" fill="#fff" stroke="#000" strokeWidth="2"/>
              <text x="190" y="115" fontFamily="Arial" fontSize="10" textAnchor="middle" fontWeight="bold">GE</text>
              <text x="190" y="127" fontFamily="Arial" fontSize="9" textAnchor="middle">Triphasé</text>
              <text x="190" y="138" fontFamily="Arial" fontSize="8" textAnchor="middle">Existant</text>
              <line x1="190" y1="145" x2="190" y2="200" stroke="#000" strokeWidth="3" markerEnd="url(#arrowhead)"/>

              {/* ATS PRINCIPAL */}
              <rect x="40" y="205" width="180" height="60" fill="#fffbeb" stroke="#000" strokeWidth="2"/>
              <text x="130" y="225" fontFamily="Arial" fontSize="12" fontWeight="bold" textAnchor="middle">ATS PRINCIPAL</text>
              <text x="130" y="242" fontFamily="Arial" fontSize="9" textAnchor="middle">Commutateur Auto.</text>
              <text x="130" y="258" fontFamily="Arial" fontSize="9" textAnchor="middle">Interverrouillage S1/S2</text>
              <line x1="130" y1="265" x2="130" y2="310" stroke="#000" strokeWidth="4" markerEnd="url(#arrowhead)"/>
              <text x="145" y="290" fontFamily="Arial" fontSize="9" fill="#666">HN33 4×35mm²</text>

              {/* DISJONCTEUR TÊTE TGBT */}
              <rect x="70" y="315" width="120" height="45" fill="#fff" stroke="#000" strokeWidth="2"/>
              <text x="130" y="330" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">DJ TÊTE TGBT</text>
              <text x="130" y="345" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">250A - 4P</text>
              <text x="130" y="356" fontFamily="Arial" fontSize="8" textAnchor="middle">Pdc: 50kA</text>
              <line x1="130" y1="360" x2="130" y2="390" stroke="#000" strokeWidth="4" markerEnd="url(#arrowhead)"/>
            </g>

            {/* TGBT PRINCIPAL */}
            <g id="tgbt">
              <rect x="40" y="395" width="180" height="135" fill="#dbeafe" stroke="#000" strokeWidth="3"/>
              <text x="130" y="415" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle">TGBT</text>
              <text x="130" y="432" fontFamily="Arial" fontSize="9" textAnchor="middle">Tableau Général</text>
              <text x="130" y="446" fontFamily="Arial" fontSize="9" textAnchor="middle">Basse Tension</text>
              <text x="130" y="460" fontFamily="Arial" fontSize="9" textAnchor="middle">Triphasé 400V</text>
              
              {/* Parafoudre TGBT */}
              <rect x="60" y="468" width="40" height="15" fill="#fef3c7" stroke="#000" strokeWidth="1"/>
              <text x="80" y="479" fontFamily="Arial" fontSize="7" textAnchor="middle">PF T1+T2</text>
              
              {/* Interrupteur-Sectionneur */}
              <rect x="110" y="468" width="40" height="15" fill="#e0e7ff" stroke="#000" strokeWidth="1"/>
              <text x="130" y="479" fontFamily="Arial" fontSize="7" textAnchor="middle">I-Sect</text>
              
              {/* Busbar */}
              <rect x="60" y="490" width="140" height="10" fill="#fbbf24" stroke="#000" strokeWidth="1.5"/>
              <text x="130" y="512" fontFamily="Arial" fontSize="8" textAnchor="middle" fontWeight="bold">BUSBAR AC COMMUN</text>
              
              {/* Terre */}
              <circle cx="130" cy="520" r="5" fill="none" stroke="#000" strokeWidth="1"/>
              <line x1="125" y1="525" x2="135" y2="525" stroke="#000" strokeWidth="1.5"/>
              <line x1="127" y1="528" x2="133" y2="528" stroke="#000" strokeWidth="1.5"/>
              <line x1="129" y1="531" x2="131" y2="531" stroke="#000" strokeWidth="1"/>
            </g>

            {/* COMPACT 1 */}
            <g id="compact1">
              <rect x="280" y="90" width="290" height="440" fill="#f0fdf4" stroke="#000" strokeWidth="2.5"/>
              <text x="425" y="115" fontFamily="Arial" fontSize="15" fontWeight="bold" textAnchor="middle">COMPACT 1</text>
              <text x="425" y="132" fontFamily="Arial" fontSize="9" textAnchor="middle">Admin + Archives + Cuisine + Pompe + Police</text>
              <text x="425" y="145" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#059669" fontWeight="bold">ATS 200A</text>

              {/* Champs PV */}
              <rect x="295" y="160" width="260" height="52" fill="#fef3c7" stroke="#000" strokeWidth="1.5"/>
              <text x="425" y="177" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">CHAMP PV - 34.8 kWc</text>
              <text x="425" y="191" fontFamily="Arial" fontSize="9" textAnchor="middle">60 modules × 580Wc</text>
              <text x="425" y="203" fontFamily="Arial" fontSize="8" textAnchor="middle">3 onduleurs × 2 strings × 10 modules</text>

              {/* Coffrets DC */}
              <rect x="305" y="222" width="110" height="50" fill="#fff" stroke="#000" strokeWidth="1.5"/>
              <text x="360" y="237" fontFamily="Arial" fontSize="9" textAnchor="middle" fontWeight="bold">COFFRETS DC</text>
              <text x="360" y="250" fontFamily="Arial" fontSize="8" textAnchor="middle">1000V / 25A (×3)</text>
              <text x="360" y="262" fontFamily="Arial" fontSize="7" textAnchor="middle">Sectionneur + Fusibles</text>
              <line x1="360" y1="212" x2="360" y2="222" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>

              <rect x="435" y="222" width="110" height="50" fill="#fef2f2" stroke="#000" strokeWidth="1.5"/>
              <text x="490" y="237" fontFamily="Arial" fontSize="9" textAnchor="middle" fontWeight="bold">PROTECTIONS DC</text>
              <text x="490" y="250" fontFamily="Arial" fontSize="8" textAnchor="middle">PF DC Type II</text>
              <text x="490" y="262" fontFamily="Arial" fontSize="7" textAnchor="middle">20kA - 1000VDC</text>
              <line x1="490" y1="212" x2="490" y2="222" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>

              {/* Câblage DC annoté */}
              <text x="360" y="285" fontFamily="Arial" fontSize="7" fill="#dc2626" textAnchor="middle">2×6mm² PV</text>
              <text x="490" y="285" fontFamily="Arial" fontSize="7" fill="#dc2626" textAnchor="middle">5×10mm²</text>

              {/* Onduleurs */}
              <rect x="295" y="292" width="260" height="55" fill="#e0e7ff" stroke="#000" strokeWidth="1.5"/>
              <text x="425" y="310" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">3 × ONDULEURS SRNE 18kW</text>
              <text x="425" y="325" fontFamily="Arial" fontSize="9" textAnchor="middle">HESP-18K - 48VDC / 400VAC</text>
              <text x="425" y="337" fontFamily="Arial" fontSize="8" textAnchor="middle">Parallèle AC - Busbar interne</text>
              <line x1="360" y1="272" x2="360" y2="292" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>
              <line x1="490" y1="272" x2="490" y2="292" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>

              {/* Batteries */}
              <rect x="295" y="357" width="260" height="52" fill="#fef9c3" stroke="#000" strokeWidth="1.5"/>
              <text x="425" y="374" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">2 × BATTERIES LiFePO₄</text>
              <text x="425" y="388" fontFamily="Arial" fontSize="9" textAnchor="middle">51,2V - 314Ah (32.2 kWh total)</text>
              <text x="425" y="401" fontFamily="Arial" fontSize="8" textAnchor="middle">Bus DC 48-52V | MegaFuse par branche</text>
              <line x1="425" y1="347" x2="425" y2="357" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>
              <text x="425" y="420" fontFamily="Arial" fontSize="7" fill="#dc2626" textAnchor="middle">HO7RN-F 10mm²</text>

              {/* AC IN */}
              <rect x="295" y="422" width="125" height="56" fill="#fef2f2" stroke="#000" strokeWidth="1.5"/>
              <text x="357" y="437" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC IN</text>
              <text x="357" y="450" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 4P 63A 300mA</text>
              <text x="357" y="461" fontFamily="Arial" fontSize="8" textAnchor="middle">DD 4P 63A 300mA</text>
              <text x="357" y="472" fontFamily="Arial" fontSize="8" textAnchor="middle">PF AC I+II 50kA</text>

              {/* AC OUT */}
              <rect x="430" y="422" width="125" height="56" fill="#dcfce7" stroke="#000" strokeWidth="1.5"/>
              <text x="492" y="437" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC OUT</text>
              <text x="492" y="450" fontFamily="Arial" fontSize="8" textAnchor="middle">Inter 4P 63A</text>
              <text x="492" y="461" fontFamily="Arial" fontSize="8" fontWeight="bold" textAnchor="middle">DJ 200A - 4P</text>
              <text x="492" y="472" fontFamily="Arial" fontSize="7" textAnchor="middle">→ TGBT</text>

              {/* ATS Compact 1 */}
              <rect x="335" y="487" width="180" height="28" fill="#fffbeb" stroke="#000" strokeWidth="1.5"/>
              <text x="425" y="504" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">ATS 200A - Interverrouillage</text>

              {/* Liaison vers TGBT */}
              <line x1="425" y1="515" x2="425" y2="542" stroke="#000" strokeWidth="3.5"/>
              <line x1="425" y1="542" x2="220" y2="542" stroke="#000" strokeWidth="3.5" markerEnd="url(#arrowhead)"/>
              <text x="320" y="537" fontFamily="Arial" fontSize="9" fill="#059669" fontWeight="bold">RVFV 4G8mm²</text>
            </g>

            {/* COMPACT 2 */}
            <g id="compact2">
              <rect x="600" y="90" width="290" height="440" fill="#fef2f2" stroke="#000" strokeWidth="2.5"/>
              <text x="745" y="115" fontFamily="Arial" fontSize="15" fontWeight="bold" textAnchor="middle">COMPACT 2</text>
              <text x="745" y="132" fontFamily="Arial" fontSize="9" textAnchor="middle">Hébergement + Salles + Réfectoire + Magasin</text>
              <text x="745" y="145" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#dc2626" fontWeight="bold">ATS 200A</text>

              {/* Champs PV */}
              <rect x="615" y="160" width="260" height="52" fill="#fef3c7" stroke="#000" strokeWidth="1.5"/>
              <text x="745" y="177" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">CHAMP PV - 34.8 kWc</text>
              <text x="745" y="191" fontFamily="Arial" fontSize="9" textAnchor="middle">60 modules × 580Wc</text>
              <text x="745" y="203" fontFamily="Arial" fontSize="8" textAnchor="middle">3 onduleurs × 2 strings × 10 modules</text>

              {/* Coffrets DC */}
              <rect x="625" y="222" width="110" height="50" fill="#fff" stroke="#000" strokeWidth="1.5"/>
              <text x="680" y="237" fontFamily="Arial" fontSize="9" textAnchor="middle" fontWeight="bold">COFFRETS DC</text>
              <text x="680" y="250" fontFamily="Arial" fontSize="8" textAnchor="middle">1000V / 25A (×3)</text>
              <text x="680" y="262" fontFamily="Arial" fontSize="7" textAnchor="middle">Sectionneur + Fusibles</text>
              <line x1="680" y1="212" x2="680" y2="222" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>

              <rect x="755" y="222" width="110" height="50" fill="#fef2f2" stroke="#000" strokeWidth="1.5"/>
              <text x="810" y="237" fontFamily="Arial" fontSize="9" textAnchor="middle" fontWeight="bold">PROTECTIONS DC</text>
              <text x="810" y="250" fontFamily="Arial" fontSize="8" textAnchor="middle">PF DC Type II</text>
              <text x="810" y="262" fontFamily="Arial" fontSize="7" textAnchor="middle">20kA - 1000VDC</text>
              <line x1="810" y1="212" x2="810" y2="222" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>

              <text x="680" y="285" fontFamily="Arial" fontSize="7" fill="#dc2626" textAnchor="middle">2×6mm² PV</text>
              <text x="810" y="285" fontFamily="Arial" fontSize="7" fill="#dc2626" textAnchor="middle">5×10mm²</text>

              {/* Onduleurs */}
              <rect x="615" y="292" width="260" height="55" fill="#e0e7ff" stroke="#000" strokeWidth="1.5"/>
              <text x="745" y="310" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">3 × ONDULEURS SRNE 18kW</text>
              <text x="745" y="325" fontFamily="Arial" fontSize="9" textAnchor="middle">HESP-18K - 48VDC / 400VAC</text>
              <text x="745" y="337" fontFamily="Arial" fontSize="8" textAnchor="middle">Parallèle AC - Busbar interne</text>
              <line x1="680" y1="272" x2="680" y2="292" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>
              <line x1="810" y1="272" x2="810" y2="292" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>

              {/* Batteries */}
              <rect x="615" y="357" width="260" height="52" fill="#fef9c3" stroke="#000" strokeWidth="1.5"/>
              <text x="745" y="374" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">2 × BATTERIES LiFePO₄</text>
              <text x="745" y="388" fontFamily="Arial" fontSize="9" textAnchor="middle">51,2V - 314Ah (32.2 kWh total)</text>
              <text x="745" y="401" fontFamily="Arial" fontSize="8" textAnchor="middle">Bus DC 48-52V | MegaFuse par branche</text>
              <line x1="745" y1="347" x2="745" y2="357" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>
              <text x="745" y="420" fontFamily="Arial" fontSize="7" fill="#dc2626" textAnchor="middle">HO7RN-F 10mm²</text>

              {/* AC IN */}
              <rect x="615" y="422" width="125" height="56" fill="#fef2f2" stroke="#000" strokeWidth="1.5"/>
              <text x="677" y="437" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC IN</text>
              <text x="677" y="450" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 4P 63A 300mA</text>
              <text x="677" y="461" fontFamily="Arial" fontSize="8" textAnchor="middle">DD 4P 63A 300mA</text>
              <text x="677" y="472" fontFamily="Arial" fontSize="8" textAnchor="middle">PF AC I+II 50kA</text>

              {/* AC OUT */}
              <rect x="750" y="422" width="125" height="56" fill="#dcfce7" stroke="#000" strokeWidth="1.5"/>
              <text x="812" y="437" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC OUT</text>
              <text x="812" y="450" fontFamily="Arial" fontSize="8" textAnchor="middle">Inter 4P 63A</text>
              <text x="812" y="461" fontFamily="Arial" fontSize="8" fontWeight="bold" textAnchor="middle">DJ 200A - 4P</text>
              <text x="812" y="472" fontFamily="Arial" fontSize="7" textAnchor="middle">→ TGBT</text>

              {/* ATS Compact 2 */}
              <rect x="655" y="487" width="180" height="28" fill="#fffbeb" stroke="#000" strokeWidth="1.5"/>
              <text x="745" y="504" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">ATS 200A - Interverrouillage</text>

              {/* Liaison vers TGBT */}
              <line x1="745" y1="515" x2="745" y2="562" stroke="#000" strokeWidth="3.5"/>
              <line x1="745" y1="562" x2="220" y2="562" stroke="#000" strokeWidth="3.5" markerEnd="url(#arrowhead)"/>
              <text x="480" y="557" fontFamily="Arial" fontSize="9" fill="#dc2626" fontWeight="bold">RVFV 4G8mm²</text>
            </g>

            {/* COMPACT 3 */}
            <g id="compact3">
              <rect x="920" y="90" width="290" height="440" fill="#eff6ff" stroke="#000" strokeWidth="2.5"/>
              <text x="1065" y="115" fontFamily="Arial" fontSize="15" fontWeight="bold" textAnchor="middle">COMPACT 3</text>
              <text x="1065" y="132" fontFamily="Arial" fontSize="9" textAnchor="middle">Malick Diagne</text>
              <text x="1065" y="145" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#2563eb" fontWeight="bold">ATS 150A</text>

              {/* Champs PV */}
              <rect x="935" y="160" width="260" height="52" fill="#fef3c7" stroke="#000" strokeWidth="1.5"/>
              <text x="1065" y="177" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">CHAMP PV - 16.2 kWc</text>
              <text x="1065" y="191" fontFamily="Arial" fontSize="9" textAnchor="middle">28 modules × 580Wc</text>
              <text x="1065" y="203" fontFamily="Arial" fontSize="8" textAnchor="middle">2 onduleurs × 14 modules (1 string/ond.)</text>

              {/* Coffrets DC */}
              <rect x="945" y="222" width="110" height="50" fill="#fff" stroke="#000" strokeWidth="1.5"/>
              <text x="1000" y="237" fontFamily="Arial" fontSize="9" textAnchor="middle" fontWeight="bold">COFFRETS DC</text>
              <text x="1000" y="250" fontFamily="Arial" fontSize="8" textAnchor="middle">1000V / 25A (×2)</text>
              <text x="1000" y="262" fontFamily="Arial" fontSize="7" textAnchor="middle">Sectionneur + Fusibles</text>
              <line x1="1000" y1="212" x2="1000" y2="222" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>

              <rect x="1075" y="222" width="110" height="50" fill="#fef2f2" stroke="#000" strokeWidth="1.5"/>
              <text x="1130" y="237" fontFamily="Arial" fontSize="9" textAnchor="middle" fontWeight="bold">PROTECTIONS DC</text>
              <text x="1130" y="250" fontFamily="Arial" fontSize="8" textAnchor="middle">PF DC Type II</text>
              <text x="1130" y="262" fontFamily="Arial" fontSize="7" textAnchor="middle">20kA - 1000VDC</text>
              <line x1="1130" y1="212" x2="1130" y2="222" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>

              <text x="1000" y="285" fontFamily="Arial" fontSize="7" fill="#dc2626" textAnchor="middle">2×6mm² PV</text>
              <text x="1130" y="285" fontFamily="Arial" fontSize="7" fill="#dc2626" textAnchor="middle">5×10mm²</text>

              {/* Onduleurs */}
              <rect x="935" y="292" width="260" height="55" fill="#e0e7ff" stroke="#000" strokeWidth="1.5"/>
              <text x="1065" y="310" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">2 × ONDULEURS SRNE 18kW</text>
              <text x="1065" y="325" fontFamily="Arial" fontSize="9" textAnchor="middle">HESP-18K - 48VDC / 400VAC</text>
              <text x="1065" y="337" fontFamily="Arial" fontSize="8" textAnchor="middle">Parallèle AC - Busbar interne</text>
              <line x1="1000" y1="272" x2="1000" y2="292" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>
              <line x1="1130" y1="272" x2="1130" y2="292" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>

              {/* Batteries */}
              <rect x="935" y="357" width="260" height="52" fill="#fef9c3" stroke="#000" strokeWidth="1.5"/>
              <text x="1065" y="374" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">1 × BATTERIE LiFePO₄</text>
              <text x="1065" y="388" fontFamily="Arial" fontSize="9" textAnchor="middle">51,2V - 314Ah (16.1 kWh total)</text>
              <text x="1065" y="401" fontFamily="Arial" fontSize="8" textAnchor="middle">Bus DC 48-52V | MegaFuse</text>
              <line x1="1065" y1="347" x2="1065" y2="357" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>
              <text x="1065" y="420" fontFamily="Arial" fontSize="7" fill="#dc2626" textAnchor="middle">HO7RN-F 10mm²</text>

              {/* AC IN */}
              <rect x="935" y="422" width="125" height="56" fill="#fef2f2" stroke="#000" strokeWidth="1.5"/>
              <text x="997" y="437" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC IN</text>
              <text x="997" y="450" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 4P 63A 300mA</text>
              <text x="997" y="461" fontFamily="Arial" fontSize="8" textAnchor="middle">DD 4P 63A 300mA</text>
              <text x="997" y="472" fontFamily="Arial" fontSize="8" textAnchor="middle">PF AC I+II 50kA</text>

              {/* AC OUT */}
              <rect x="1070" y="422" width="125" height="56" fill="#dcfce7" stroke="#000" strokeWidth="1.5"/>
              <text x="1132" y="437" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC OUT</text>
              <text x="1132" y="450" fontFamily="Arial" fontSize="8" textAnchor="middle">Inter 4P 63A</text>
              <text x="1132" y="461" fontFamily="Arial" fontSize="8" fontWeight="bold" textAnchor="middle">DJ 150A - 4P</text>
              <text x="1132" y="472" fontFamily="Arial" fontSize="7" textAnchor="middle">→ TGBT</text>

              {/* ATS Compact 3 */}
              <rect x="975" y="487" width="180" height="28" fill="#fffbeb" stroke="#000" strokeWidth="1.5"/>
              <text x="1065" y="504" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">ATS 150A - Interverrouillage</text>

              {/* Liaison vers TGBT */}
              <line x1="1065" y1="515" x2="1065" y2="582" stroke="#000" strokeWidth="3.5"/>
              <line x1="1065" y1="582" x2="220" y2="582" stroke="#000" strokeWidth="3.5" markerEnd="url(#arrowhead)"/>
              <text x="640" y="577" fontFamily="Arial" fontSize="9" fill="#2563eb" fontWeight="bold">RVFV 4G6mm²</text>
            </g>

            {/* SECTION DISTRIBUTION */}
            <g id="distribution">
              <rect x="20" y="605" width="1360" height="235" fill="#f9fafb" stroke="#000" strokeWidth="2"/>
              <text x="700" y="628" fontFamily="Arial" fontSize="16" fontWeight="bold" textAnchor="middle">DISTRIBUTION BÂTIMENT - TABLEAUX DIVISIONNAIRES (TD)</text>
              <line x1="130" y1="530" x2="130" y2="605" stroke="#000" strokeWidth="4"/>
              <line x1="130" y1="605" x2="1275" y2="605" stroke="#000" strokeWidth="4"/>
              
              {/* TD-ADMIN */}
              <g id="td-admin">
                <rect x="40" y="645" width="175" height="180" fill="#fff" stroke="#000" strokeWidth="1.5"/>
                <rect x="40" y="645" width="175" height="30" fill="#f0fdf4" stroke="#000" strokeWidth="1.5"/>
                <text x="127" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-ADMIN</text>
                <text x="127" y="692" fontFamily="Arial" fontSize="8" textAnchor="middle" fontWeight="bold">ID 30mA - 4P 63A</text>
                <line x1="50" y1="700" x2="205" y2="700" stroke="#666" strokeWidth="0.5"/>
                <text x="50" y="715" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="50" y="730" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="50" y="745" fontFamily="Arial" fontSize="8">• Clim: 20A - 3×2,5mm²</text>
                <text x="50" y="760" fontFamily="Arial" fontSize="8">• Divers: 10-16A</text>
                <text x="50" y="778" fontFamily="Arial" fontSize="8" fontWeight="bold">Montée: HN33 4×35mm²</text>
                <line x1="127" y1="790" x2="127" y2="605" stroke="#000" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
              </g>

              {/* TD-CUISINE */}
              <g id="td-cuisine">
                <rect x="230" y="645" width="175" height="180" fill="#fff" stroke="#000" strokeWidth="1.5"/>
                <rect x="230" y="645" width="175" height="30" fill="#fef3c7" stroke="#000" strokeWidth="1.5"/>
                <text x="317" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-CUISINE</text>
                <text x="317" y="692" fontFamily="Arial" fontSize="8" textAnchor="middle" fontWeight="bold">ID 30mA - 4P 63A</text>
                <line x1="240" y1="700" x2="395" y2="700" stroke="#666" strokeWidth="0.5"/>
                <text x="240" y="715" fontFamily="Arial" fontSize="8">• Four: 32A - 5×6mm²</text>
                <text x="240" y="730" fontFamily="Arial" fontSize="8">• Chauffe-eau: 32A - 6mm²</text>
                <text x="240" y="745" fontFamily="Arial" fontSize="8">• Prises: 20A - 3×2,5mm²</text>
                <text x="240" y="760" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="240" y="778" fontFamily="Arial" fontSize="8" fontWeight="bold">Montée: HN33 4×35mm²</text>
                <line x1="317" y1="790" x2="317" y2="605" stroke="#000" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
              </g>

              {/* TD-ARCHIVES */}
              <g id="td-archives">
                <rect x="420" y="645" width="175" height="180" fill="#fff" stroke="#000" strokeWidth="1.5"/>
                <rect x="420" y="645" width="175" height="30" fill="#f0fdf4" stroke="#000" strokeWidth="1.5"/>
                <text x="507" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-ARCHIVES</text>
                <text x="507" y="692" fontFamily="Arial" fontSize="8" textAnchor="middle" fontWeight="bold">ID 30mA - 4P 63A</text>
                <line x1="430" y1="700" x2="585" y2="700" stroke="#666" strokeWidth="0.5"/>
                <text x="430" y="715" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="430" y="730" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="430" y="745" fontFamily="Arial" fontSize="8">• Clim: 20A - 3×2,5mm²</text>
                <text x="430" y="760" fontFamily="Arial" fontSize="8">• PF Type II (sensible)</text>
                <text x="430" y="778" fontFamily="Arial" fontSize="8" fontWeight="bold">Montée: HN33 4×35mm²</text>
                <line x1="507" y1="790" x2="507" y2="605" stroke="#000" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
              </g>

              {/* TD-POLICE */}
              <g id="td-police">
                <rect x="610" y="645" width="175" height="180" fill="#fff" stroke="#000" strokeWidth="1.5"/>
                <rect x="610" y="645" width="175" height="30" fill="#f0fdf4" stroke="#000" strokeWidth="1.5"/>
                <text x="697" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-POLICE</text>
                <text x="697" y="692" fontFamily="Arial" fontSize="8" textAnchor="middle" fontWeight="bold">ID 30mA - 4P 63A</text>
                <line x1="620" y1="700" x2="775" y2="700" stroke="#666" strokeWidth="0.5"/>
                <text x="620" y="715" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="620" y="730" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="620" y="745" fontFamily="Arial" fontSize="8">• Clim: 20A - 3×2,5mm²</text>
                <text x="620" y="760" fontFamily="Arial" fontSize="8">• Pompe: 25A - 5×4mm²</text>
                <text x="620" y="778" fontFamily="Arial" fontSize="8" fontWeight="bold">Montée: HN33 4×35mm²</text>
                <line x1="697" y1="790" x2="697" y2="605" stroke="#000" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
              </g>

              {/* TD-HÉBERGEMENT */}
              <g id="td-hebergement">
                <rect x="800" y="645" width="175" height="180" fill="#fff" stroke="#000" strokeWidth="1.5"/>
                <rect x="800" y="645" width="175" height="30" fill="#fef2f2" stroke="#000" strokeWidth="1.5"/>
                <text x="887" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-HÉBERGEMENT</text>
                <text x="887" y="692" fontFamily="Arial" fontSize="8" textAnchor="middle" fontWeight="bold">ID 30mA - 4P 63A</text>
                <line x1="810" y1="700" x2="965" y2="700" stroke="#666" strokeWidth="0.5"/>
                <text x="810" y="715" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="810" y="730" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="810" y="745" fontFamily="Arial" fontSize="8">• Clim chambres: 25A - 5×4mm²</text>
                <text x="810" y="760" fontFamily="Arial" fontSize="8">• Cases dédiés par zone</text>
                <text x="810" y="778" fontFamily="Arial" fontSize="8" fontWeight="bold">Montée: HN33 4×35mm²</text>
                <line x1="887" y1="790" x2="887" y2="605" stroke="#000" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
              </g>

              {/* TD-SALLES */}
              <g id="td-salles">
                <rect x="990" y="645" width="175" height="180" fill="#fff" stroke="#000" strokeWidth="1.5"/>
                <rect x="990" y="645" width="175" height="30" fill="#fef2f2" stroke="#000" strokeWidth="1.5"/>
                <text x="1077" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-SALLES</text>
                <text x="1077" y="692" fontFamily="Arial" fontSize="8" textAnchor="middle" fontWeight="bold">ID 30mA - 4P 63A</text>
                <line x1="1000" y1="700" x2="1155" y2="700" stroke="#666" strokeWidth="0.5"/>
                <text x="1000" y="715" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="1000" y="730" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="1000" y="745" fontFamily="Arial" fontSize="8">• Clim salles: 20A - 3×2,5mm²</text>
                <text x="1000" y="760" fontFamily="Arial" fontSize="8">• Réfectoire + Magasin</text>
                <text x="1000" y="778" fontFamily="Arial" fontSize="8" fontWeight="bold">Montée: HN33 4×35mm²</text>
                <line x1="1077" y1="790" x2="1077" y2="605" stroke="#000" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
              </g>

              {/* TD-MALICK DIAGNE */}
              <g id="td-malick">
                <rect x="1180" y="645" width="185" height="180" fill="#fff" stroke="#000" strokeWidth="1.5"/>
                <rect x="1180" y="645" width="185" height="30" fill="#eff6ff" stroke="#000" strokeWidth="1.5"/>
                <text x="1272" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-MALICK DIAGNE</text>
                <text x="1272" y="692" fontFamily="Arial" fontSize="8" textAnchor="middle" fontWeight="bold">ID 30mA - 4P 63A</text>
                <line x1="1190" y1="700" x2="1355" y2="700" stroke="#666" strokeWidth="0.5"/>
                <text x="1190" y="715" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="1190" y="730" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="1190" y="745" fontFamily="Arial" fontSize="8">• Clim/IT: 25A - 5×4-6mm²</text>
                <text x="1190" y="760" fontFamily="Arial" fontSize="8">• Armoire serveur (PF T2)</text>
                <text x="1190" y="778" fontFamily="Arial" fontSize="8" fontWeight="bold">Montée: HN33 4×35mm²</text>
                <line x1="1272" y1="790" x2="1272" y2="605" stroke="#000" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
              </g>
            </g>

            {/* LÉGENDE */}
            <g id="legende">
              <rect x="20" y="855" width="960" height="125" fill="#f9fafb" stroke="#000" strokeWidth="2"/>
              <text x="30" y="875" fontFamily="Arial" fontSize="13" fontWeight="bold">LÉGENDE ET SYMBOLES NORMALISÉS</text>
              
              {/* Ligne 1 */}
              <rect x="30" y="890" width="22" height="16" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="57" y="902" fontFamily="Arial" fontSize="9">ID: Interrupteur Différentiel</text>
              
              <rect x="220" y="890" width="22" height="16" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="247" y="902" fontFamily="Arial" fontSize="9">DD: Disjoncteur Divisionnaire</text>
              
              <rect x="420" y="890" width="22" height="16" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="447" y="902" fontFamily="Arial" fontSize="9">DJ: Disjoncteur de Puissance</text>
              
              <rect x="620" y="890" width="22" height="16" fill="#fffbeb" stroke="#000" strokeWidth="1"/>
              <text x="647" y="902" fontFamily="Arial" fontSize="9">ATS: Commutateur Auto Source</text>

              {/* Ligne 2 */}
              <line x1="30" y1="923" x2="50" y2="923" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,3"/>
              <text x="57" y="928" fontFamily="Arial" fontSize="9">Liaison DC (PV/Batteries)</text>
              
              <line x1="220" y1="923" x2="240" y2="923" stroke="#000" strokeWidth="2.5"/>
              <text x="247" y="928" fontFamily="Arial" fontSize="9">Liaison AC (Courant alternatif)</text>
              
              <rect x="420" y="918" width="22" height="10" fill="#fbbf24" stroke="#000" strokeWidth="1"/>
              <text x="447" y="928" fontFamily="Arial" fontSize="9">Busbar AC (Jeu de barres)</text>

              <circle cx="635" cy="923" r="5" fill="none" stroke="#000" strokeWidth="1.5"/>
              <line x1="630" y1="928" x2="640" y2="928" stroke="#000" strokeWidth="1.5"/>
              <line x1="632" y1="931" x2="638" y2="931" stroke="#000" strokeWidth="1.5"/>
              <text x="647" y="928" fontFamily="Arial" fontSize="9">Mise à la terre (PE)</text>

              {/* Ligne 3 */}
              <rect x="30" y="943" width="22" height="16" fill="#fef3c7" stroke="#000" strokeWidth="1"/>
              <text x="57" y="955" fontFamily="Arial" fontSize="9">PF: Parafoudre (Type I+II ou II)</text>
              
              <text x="220" y="955" fontFamily="Arial" fontSize="9">TGBT: Tableau Général Basse Tension</text>
              <text x="420" y="955" fontFamily="Arial" fontSize="9">TD: Tableau Divisionnaire</text>
              <text x="620" y="955" fontFamily="Arial" fontSize="9">GE: Groupe Électrogène</text>

              {/* Ligne 4 - Notes techniques */}
              <text x="30" y="972" fontFamily="Arial" fontSize="8" fill="#059669" fontWeight="bold">⚡ Sélectivité différentielle: 300mA (incendie) en amont, 30mA (personnes) en aval</text>
              <text x="480" y="972" fontFamily="Arial" fontSize="8" fill="#dc2626" fontWeight="bold">⚠ ATS interverrouillés (pas de couplage réseau/GE)</text>
            </g>

            {/* CARTOUCHE */}
            <g id="cartouche">
              <rect x="1000" y="855" width="380" height="125" fill="#fff" stroke="#000" strokeWidth="2"/>
              <line x1="1000" y1="890" x2="1380" y2="890" stroke="#000" strokeWidth="1"/>
              <line x1="1000" y1="920" x2="1380" y2="920" stroke="#000" strokeWidth="1"/>
              <line x1="1000" y1="950" x2="1380" y2="950" stroke="#000" strokeWidth="1"/>
              <line x1="1200" y1="855" x2="1200" y2="980" stroke="#000" strokeWidth="1"/>
              
              <text x="1010" y="875" fontFamily="Arial" fontSize="16" fontWeight="bold">TOSTAN TRAINING CENTER</text>
              <text x="1010" y="908" fontFamily="Arial" fontSize="11">Auteur: I. Seck / Takoussane Energy</text>
              <text x="1210" y="908" fontFamily="Arial" fontSize="11">Projet: PV Hybride 85.8 kWc</text>
              <text x="1010" y="938" fontFamily="Arial" fontSize="11">Site: Thiès, Sénégal</text>
              <text x="1210" y="938" fontFamily="Arial" fontSize="11">Date: 17/11/2025</text>
              <text x="1010" y="968" fontFamily="Arial" fontSize="11" fontWeight="bold">Norme: NFC 15-100 / NS 01-001</text>
              <text x="1210" y="968" fontFamily="Arial" fontSize="11">Révision: V3.0</text>
              
              <text x="1190" y="875" fontFamily="Arial" fontSize="8" fill="#666">Conforme</text>
            </g>

            {/* Annotations techniques supplémentaires */}
            <text x="230" y="85" fontFamily="Arial" fontSize="9" fill="#666" fontStyle="italic">Total système: 8× onduleurs 18kW | 5× batteries 51,2V-314Ah | 148× modules 580Wc</text>
            <text x="230" y="75" fontFamily="Arial" fontSize="9" fill="#666" fontStyle="italic">Stockage total: 80.5 kWh | Production annuelle estimée: ~127 MWh/an</text>

          </svg>
        </div>
      </div>
    </div>
  );
};

export default SchemaUnifilaireTostan;
