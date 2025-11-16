"use client";
import React, { useRef } from 'react';
import { Download, ZoomIn, ZoomOut } from 'lucide-react';

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
    link.download = 'Schema_Unifilaire_TOSTAN_A3.svg';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <div className="bg-white border-b border-gray-300 p-2 flex items-center gap-4 shadow-sm">
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

            <g id="cartouche">
              <rect x="1000" y="870" width="380" height="110" fill="#fff" stroke="#000" strokeWidth="2"/>
              <line x1="1000" y1="900" x2="1380" y2="900" stroke="#000" strokeWidth="1"/>
              <line x1="1000" y1="930" x2="1380" y2="930" stroke="#000" strokeWidth="1"/>
              <line x1="1000" y1="960" x2="1380" y2="960" stroke="#000" strokeWidth="1"/>
              <line x1="1200" y1="870" x2="1200" y2="980" stroke="#000" strokeWidth="1"/>
              
              <text x="1010" y="890" fontFamily="Arial" fontSize="16" fontWeight="bold">TOSTAN TRAINING CENTER</text>
              <text x="1010" y="920" fontFamily="Arial" fontSize="11">Site: Thiès, Sénégal</text>
              <text x="1210" y="920" fontFamily="Arial" fontSize="11">Date: 16/11/2025</text>
              <text x="1010" y="950" fontFamily="Arial" fontSize="11">Norme: NFC 15-100 / NS 01-001</text>
              <text x="1210" y="950" fontFamily="Arial" fontSize="11">Format: A3</text>
              <text x="1010" y="975" fontFamily="Arial" fontSize="11">Schéma: UNIFILAIRE GÉNÉRAL</text>
              <text x="1210" y="975" fontFamily="Arial" fontSize="11">Révision: V1</text>
            </g>

            <rect x="20" y="20" width="960" height="40" fill="#1e40af" stroke="#000" strokeWidth="2"/>
            <text x="500" y="47" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#fff" textAnchor="middle">
              SCHÉMA UNIFILAIRE INTÉGRÉ - PRODUCTION PV ET DISTRIBUTION
            </text>

            <g id="sources">
              <circle cx="80" cy="120" r="25" fill="#fff" stroke="#000" strokeWidth="2"/>
              <text x="80" y="118" fontFamily="Arial" fontSize="10" textAnchor="middle" fontWeight="bold">SENELEC</text>
              <text x="80" y="130" fontFamily="Arial" fontSize="9" textAnchor="middle">3P+N+PE</text>
              <text x="80" y="155" fontFamily="Arial" fontSize="9" textAnchor="middle" fill="#666">5×95mm²</text>

              <line x1="80" y1="145" x2="80" y2="200" stroke="#000" strokeWidth="3" markerEnd="url(#arrowhead)"/>

              <rect x="160" y="95" width="60" height="50" fill="#fff" stroke="#000" strokeWidth="2"/>
              <text x="190" y="115" fontFamily="Arial" fontSize="10" textAnchor="middle" fontWeight="bold">GE</text>
              <text x="190" y="127" fontFamily="Arial" fontSize="9" textAnchor="middle">Triphasé</text>
              <text x="190" y="138" fontFamily="Arial" fontSize="8" textAnchor="middle">Existant</text>
              <line x1="190" y1="145" x2="190" y2="200" stroke="#000" strokeWidth="3" markerEnd="url(#arrowhead)"/>

              <rect x="40" y="205" width="180" height="60" fill="#fffbeb" stroke="#000" strokeWidth="2"/>
              <text x="130" y="225" fontFamily="Arial" fontSize="12" fontWeight="bold" textAnchor="middle">ATS PRINCIPAL</text>
              <text x="130" y="242" fontFamily="Arial" fontSize="9" textAnchor="middle">Commutateur Auto.</text>
              <text x="130" y="258" fontFamily="Arial" fontSize="9" textAnchor="middle">Interverrouillage S1/S2</text>

              <line x1="130" y1="265" x2="130" y2="310" stroke="#000" strokeWidth="4" markerEnd="url(#arrowhead)"/>
              <text x="145" y="290" fontFamily="Arial" fontSize="9" fill="#666">HN33 4×35mm²</text>

              <rect x="85" y="315" width="90" height="35" fill="#fff" stroke="#000" strokeWidth="2"/>
              <text x="130" y="328" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">DJ-TGBT</text>
              <text x="130" y="342" fontFamily="Arial" fontSize="10" textAnchor="middle">250A - 4P</text>

              <line x1="130" y1="350" x2="130" y2="390" stroke="#000" strokeWidth="4" markerEnd="url(#arrowhead)"/>
            </g>

            <g id="tgbt">
              <rect x="50" y="395" width="160" height="120" fill="#dbeafe" stroke="#000" strokeWidth="3"/>
              <text x="130" y="415" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle">TGBT</text>
              <text x="130" y="432" fontFamily="Arial" fontSize="9" textAnchor="middle">Tableau Général</text>
              <text x="130" y="446" fontFamily="Arial" fontSize="9" textAnchor="middle">Basse Tension</text>
              <text x="130" y="460" fontFamily="Arial" fontSize="9" textAnchor="middle">Triphasé</text>
              
              <rect x="70" y="470" width="120" height="8" fill="#fbbf24" stroke="#000" strokeWidth="1"/>
              <text x="130" y="492" fontFamily="Arial" fontSize="8" textAnchor="middle">Busbar AC Commun</text>
              
              <circle cx="130" cy="505" r="5" fill="none" stroke="#000" strokeWidth="1"/>
              <line x1="125" y1="510" x2="135" y2="510" stroke="#000" strokeWidth="1"/>
              <line x1="127" y1="513" x2="133" y2="513" stroke="#000" strokeWidth="1"/>
              <line x1="129" y1="516" x2="131" y2="516" stroke="#000" strokeWidth="1"/>
            </g>

            <g id="compact1">
              <rect x="290" y="100" width="280" height="420" fill="#f0fdf4" stroke="#000" strokeWidth="2"/>
              <text x="430" y="125" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle">COMPACT 1</text>
              <text x="430" y="142" fontFamily="Arial" fontSize="9" textAnchor="middle">Admin + Archives + Cuisine + Pompe + Police</text>

              <rect x="305" y="155" width="250" height="50" fill="#fef3c7" stroke="#000" strokeWidth="1"/>
              <text x="430" y="172" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">CHAMP PV</text>
              <text x="430" y="186" fontFamily="Arial" fontSize="9" textAnchor="middle">120 modules × 580Wc</text>
              <text x="430" y="198" fontFamily="Arial" fontSize="8" textAnchor="middle">4 onduleurs × 2 strings × 15 modules</text>

              <rect x="320" y="215" width="90" height="40" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="365" y="230" fontFamily="Arial" fontSize="9" textAnchor="middle" fontWeight="bold">COFFRETS DC</text>
              <text x="365" y="243" fontFamily="Arial" fontSize="8" textAnchor="middle">1000V - 25A</text>
              <line x1="365" y1="205" x2="365" y2="215" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>

              <rect x="440" y="215" width="90" height="40" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="485" y="227" fontFamily="Arial" fontSize="8" textAnchor="middle">Sectionneur DC</text>
              <text x="485" y="238" fontFamily="Arial" fontSize="8" textAnchor="middle">Fusibles DC</text>
              <text x="485" y="249" fontFamily="Arial" fontSize="8" textAnchor="middle">PF DC Type II</text>

              <rect x="305" y="270" width="250" height="50" fill="#e0e7ff" stroke="#000" strokeWidth="1"/>
              <text x="430" y="288" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">4 × ONDULEURS SRNE 18kW</text>
              <text x="430" y="302" fontFamily="Arial" fontSize="9" textAnchor="middle">48VDC - Parallèle AC</text>
              <text x="430" y="314" fontFamily="Arial" fontSize="8" textAnchor="middle">Busbar AC Compact</text>
              
              <line x1="365" y1="255" x2="365" y2="270" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>
              <line x1="485" y1="255" x2="485" y2="270" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>

              <rect x="305" y="335" width="250" height="45" fill="#fef9c3" stroke="#000" strokeWidth="1"/>
              <text x="430" y="352" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">5 × BATTERIES LiFePO₄</text>
              <text x="430" y="366" fontFamily="Arial" fontSize="9" textAnchor="middle">51,2V - 314Ah | MegaFuse</text>
              <text x="430" y="377" fontFamily="Arial" fontSize="8" textAnchor="middle">Bus DC 48-52V</text>
              
              <line x1="430" y1="320" x2="430" y2="335" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>

              <rect x="305" y="395" width="115" height="50" fill="#fef2f2" stroke="#000" strokeWidth="1"/>
              <text x="362" y="410" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC IN</text>
              <text x="362" y="422" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 4P 63A 300mA</text>
              <text x="362" y="432" fontFamily="Arial" fontSize="8" textAnchor="middle">DD 4P 63A 300mA</text>
              <text x="362" y="442" fontFamily="Arial" fontSize="8" textAnchor="middle">PF AC I+II</text>

              <rect x="440" y="395" width="115" height="50" fill="#f0fdf4" stroke="#000" strokeWidth="1"/>
              <text x="497" y="410" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC OUT</text>
              <text x="497" y="422" fontFamily="Arial" fontSize="8" textAnchor="middle">Inter 4P 63A</text>
              <text x="497" y="432" fontFamily="Arial" fontSize="8" textAnchor="middle">DJ 300A - 4P</text>
              <text x="497" y="442" fontFamily="Arial" fontSize="8" textAnchor="middle">→ TGBT</text>

              <rect x="350" y="460" width="160" height="40" fill="#fffbeb" stroke="#000" strokeWidth="1"/>
              <text x="430" y="477" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">ATS COMPACT 1</text>
              <text x="430" y="492" fontFamily="Arial" fontSize="9" textAnchor="middle">300A - Interverrouillage</text>

              <line x1="430" y1="500" x2="430" y2="540" stroke="#000" strokeWidth="3"/>
              <line x1="430" y1="540" x2="210" y2="540" stroke="#000" strokeWidth="3" markerEnd="url(#arrowhead)"/>
              <text x="320" y="535" fontFamily="Arial" fontSize="8" fill="#666">RVFV 4G10mm²</text>
            </g>

            <g id="compact2">
              <rect x="610" y="100" width="280" height="420" fill="#fef2f2" stroke="#000" strokeWidth="2"/>
              <text x="750" y="125" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle">COMPACT 2</text>
              <text x="750" y="142" fontFamily="Arial" fontSize="9" textAnchor="middle">Hébergement + Salles + Réfectoire + Magasin</text>

              <rect x="625" y="155" width="250" height="50" fill="#fef3c7" stroke="#000" strokeWidth="1"/>
              <text x="750" y="172" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">CHAMP PV</text>
              <text x="750" y="186" fontFamily="Arial" fontSize="9" textAnchor="middle">90 modules × 580Wc</text>
              <text x="750" y="198" fontFamily="Arial" fontSize="8" textAnchor="middle">3 onduleurs × 2 strings × 15 modules</text>

              <rect x="640" y="215" width="90" height="40" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="685" y="230" fontFamily="Arial" fontSize="9" textAnchor="middle" fontWeight="bold">COFFRETS DC</text>
              <text x="685" y="243" fontFamily="Arial" fontSize="8" textAnchor="middle">1000V - 25A</text>
              <line x1="685" y1="205" x2="685" y2="215" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>

              <rect x="760" y="215" width="90" height="40" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="805" y="227" fontFamily="Arial" fontSize="8" textAnchor="middle">Sectionneur DC</text>
              <text x="805" y="238" fontFamily="Arial" fontSize="8" textAnchor="middle">Fusibles DC</text>
              <text x="805" y="249" fontFamily="Arial" fontSize="8" textAnchor="middle">PF DC Type II</text>

              <rect x="625" y="270" width="250" height="50" fill="#e0e7ff" stroke="#000" strokeWidth="1"/>
              <text x="750" y="288" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">3 × ONDULEURS SRNE 18kW</text>
              <text x="750" y="302" fontFamily="Arial" fontSize="9" textAnchor="middle">48VDC - Parallèle AC</text>
              <text x="750" y="314" fontFamily="Arial" fontSize="8" textAnchor="middle">Busbar AC Compact</text>
              
              <line x1="685" y1="255" x2="685" y2="270" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>
              <line x1="805" y1="255" x2="805" y2="270" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>

              <rect x="625" y="335" width="250" height="45" fill="#fef9c3" stroke="#000" strokeWidth="1"/>
              <text x="750" y="352" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">4 × BATTERIES LiFePO₄</text>
              <text x="750" y="366" fontFamily="Arial" fontSize="9" textAnchor="middle">51,2V - 314Ah | MegaFuse</text>
              <text x="750" y="377" fontFamily="Arial" fontSize="8" textAnchor="middle">Bus DC 48-52V</text>
              
              <line x1="750" y1="320" x2="750" y2="335" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>

              <rect x="625" y="395" width="115" height="50" fill="#fef2f2" stroke="#000" strokeWidth="1"/>
              <text x="682" y="410" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC IN</text>
              <text x="682" y="422" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 4P 63A 300mA</text>
              <text x="682" y="432" fontFamily="Arial" fontSize="8" textAnchor="middle">DD 4P 63A 300mA</text>
              <text x="682" y="442" fontFamily="Arial" fontSize="8" textAnchor="middle">PF AC I+II</text>

              <rect x="760" y="395" width="115" height="50" fill="#f0fdf4" stroke="#000" strokeWidth="1"/>
              <text x="817" y="410" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC OUT</text>
              <text x="817" y="422" fontFamily="Arial" fontSize="8" textAnchor="middle">Inter 4P 63A</text>
              <text x="817" y="432" fontFamily="Arial" fontSize="8" textAnchor="middle">DJ 200A - 4P</text>
              <text x="817" y="442" fontFamily="Arial" fontSize="8" textAnchor="middle">→ TGBT</text>

              <rect x="670" y="460" width="160" height="40" fill="#fffbeb" stroke="#000" strokeWidth="1"/>
              <text x="750" y="477" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">ATS COMPACT 2</text>
              <text x="750" y="492" fontFamily="Arial" fontSize="9" textAnchor="middle">200A - Interverrouillage</text>

              <line x1="750" y1="500" x2="750" y2="560" stroke="#000" strokeWidth="3"/>
              <line x1="750" y1="560" x2="210" y2="560" stroke="#000" strokeWidth="3" markerEnd="url(#arrowhead)"/>
              <text x="480" y="555" fontFamily="Arial" fontSize="8" fill="#666">RVFV 4G8mm²</text>
            </g>

            <g id="compact3">
              <rect x="930" y="100" width="280" height="420" fill="#eff6ff" stroke="#000" strokeWidth="2"/>
              <text x="1070" y="125" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle">COMPACT 3</text>
              <text x="1070" y="142" fontFamily="Arial" fontSize="9" textAnchor="middle">Malick Diagne</text>

              <rect x="945" y="155" width="250" height="50" fill="#fef3c7" stroke="#000" strokeWidth="1"/>
              <text x="1070" y="172" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">CHAMP PV</text>
              <text x="1070" y="186" fontFamily="Arial" fontSize="9" textAnchor="middle">63 modules × 580Wc</text>
              <text x="1070" y="198" fontFamily="Arial" fontSize="8" textAnchor="middle">2 ond. × (2×16 + 15+16 mod.)</text>

              <rect x="960" y="215" width="90" height="40" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="1005" y="230" fontFamily="Arial" fontSize="9" textAnchor="middle" fontWeight="bold">COFFRETS DC</text>
              <text x="1005" y="243" fontFamily="Arial" fontSize="8" textAnchor="middle">1000V - 25A</text>
              <line x1="1005" y1="205" x2="1005" y2="215" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>

              <rect x="1080" y="215" width="90" height="40" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="1125" y="227" fontFamily="Arial" fontSize="8" textAnchor="middle">Sectionneur DC</text>
              <text x="1125" y="238" fontFamily="Arial" fontSize="8" textAnchor="middle">Fusibles DC</text>
              <text x="1125" y="249" fontFamily="Arial" fontSize="8" textAnchor="middle">PF DC Type II</text>

              <rect x="945" y="270" width="250" height="50" fill="#e0e7ff" stroke="#000" strokeWidth="1"/>
              <text x="1070" y="288" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">2 × ONDULEURS SRNE 18kW</text>
              <text x="1070" y="302" fontFamily="Arial" fontSize="9" textAnchor="middle">48VDC - Parallèle AC</text>
              <text x="1070" y="314" fontFamily="Arial" fontSize="8" textAnchor="middle">Busbar AC Compact</text>
              
              <line x1="1005" y1="255" x2="1005" y2="270" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>
              <line x1="1125" y1="255" x2="1125" y2="270" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>

              <rect x="945" y="335" width="250" height="45" fill="#fef9c3" stroke="#000" strokeWidth="1"/>
              <text x="1070" y="352" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle">3 × BATTERIES LiFePO₄</text>
              <text x="1070" y="366" fontFamily="Arial" fontSize="9" textAnchor="middle">51,2V - 314Ah | MegaFuse</text>
              <text x="1070" y="377" fontFamily="Arial" fontSize="8" textAnchor="middle">Bus DC 48-52V</text>
              
              <line x1="1070" y1="320" x2="1070" y2="335" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>

              <rect x="945" y="395" width="115" height="50" fill="#fef2f2" stroke="#000" strokeWidth="1"/>
              <text x="1002" y="410" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC IN</text>
              <text x="1002" y="422" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 4P 63A 300mA</text>
              <text x="1002" y="432" fontFamily="Arial" fontSize="8" textAnchor="middle">DD 4P 63A 300mA</text>
              <text x="1002" y="442" fontFamily="Arial" fontSize="8" textAnchor="middle">PF AC I+II</text>

              <rect x="1080" y="395" width="115" height="50" fill="#f0fdf4" stroke="#000" strokeWidth="1"/>
              <text x="1137" y="410" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">AC OUT</text>
              <text x="1137" y="422" fontFamily="Arial" fontSize="8" textAnchor="middle">Inter 4P 63A</text>
              <text x="1137" y="432" fontFamily="Arial" fontSize="8" textAnchor="middle">DJ 150A - 4P</text>
              <text x="1137" y="442" fontFamily="Arial" fontSize="8" textAnchor="middle">→ TGBT</text>

              <rect x="990" y="460" width="160" height="40" fill="#fffbeb" stroke="#000" strokeWidth="1"/>
              <text x="1070" y="477" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle">ATS COMPACT 3</text>
              <text x="1070" y="492" fontFamily="Arial" fontSize="9" textAnchor="middle">150A - Interverrouillage</text>

              <line x1="1070" y1="500" x2="1070" y2="580" stroke="#000" strokeWidth="3"/>
              <line x1="1070" y1="580" x2="210" y2="580" stroke="#000" strokeWidth="3" markerEnd="url(#arrowhead)"/>
              <text x="640" y="575" fontFamily="Arial" fontSize="8" fill="#666">RVFV 4G6mm²</text>
            </g>

            <g id="distribution">
              <rect x="30" y="600" width="1340" height="240" fill="#f9fafb" stroke="#000" strokeWidth="2"/>
              <text x="700" y="625" fontFamily="Arial" fontSize="16" fontWeight="bold" textAnchor="middle">DISTRIBUTION BÂTIMENT - TABLEAUX DIVISIONNAIRES</text>
              
              <g id="td-admin">
                <rect x="50" y="645" width="170" height="180" fill="#fff" stroke="#000" strokeWidth="1"/>
                <text x="135" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-ADMIN</text>
                <text x="135" y="682" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 30mA - 4P 63A</text>
                <line x1="60" y1="690" x2="210" y2="690" stroke="#666" strokeWidth="0.5"/>
                <text x="60" y="705" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="60" y="720" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="60" y="735" fontFamily="Arial" fontSize="8">• Clim: 20A - 3×2,5mm²</text>
                <text x="60" y="750" fontFamily="Arial" fontSize="8">• Montée: HN33 4×35mm²</text>
                <line x1="135" y1="760" x2="135" y2="600" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              </g>

              <g id="td-cuisine">
                <rect x="240" y="645" width="170" height="180" fill="#fff" stroke="#000" strokeWidth="1"/>
                <text x="325" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-CUISINE</text>
                <text x="325" y="682" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 30mA - 4P 63A</text>
                <line x1="250" y1="690" x2="400" y2="690" stroke="#666" strokeWidth="0.5"/>
                <text x="250" y="705" fontFamily="Arial" fontSize="8">• Four: 32A - 5×6mm²</text>
                <text x="250" y="720" fontFamily="Arial" fontSize="8">• Prises: 20A - 3×2,5mm²</text>
                <text x="250" y="735" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="250" y="750" fontFamily="Arial" fontSize="8">• Montée: HN33 4×35mm²</text>
                <line x1="325" y1="760" x2="325" y2="600" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              </g>

              <g id="td-archives">
                <rect x="430" y="645" width="170" height="180" fill="#fff" stroke="#000" strokeWidth="1"/>
                <text x="515" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-ARCHIVES</text>
                <text x="515" y="682" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 30mA - 4P 63A</text>
                <line x1="440" y1="690" x2="590" y2="690" stroke="#666" strokeWidth="0.5"/>
                <text x="440" y="705" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="440" y="720" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="440" y="735" fontFamily="Arial" fontSize="8">• Clim: 20A - 3×2,5mm²</text>
                <text x="440" y="750" fontFamily="Arial" fontSize="8">• Montée: HN33 4×35mm²</text>
                <line x1="515" y1="760" x2="515" y2="600" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              </g>

              <g id="td-police">
                <rect x="620" y="645" width="170" height="180" fill="#fff" stroke="#000" strokeWidth="1"/>
                <text x="705" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-POLICE</text>
                <text x="705" y="682" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 30mA - 4P 63A</text>
                <line x1="630" y1="690" x2="780" y2="690" stroke="#666" strokeWidth="0.5"/>
                <text x="630" y="705" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="630" y="720" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="630" y="735" fontFamily="Arial" fontSize="8">• Clim: 20A - 3×2,5mm²</text>
                <text x="630" y="750" fontFamily="Arial" fontSize="8">• Montée: HN33 4×35mm²</text>
                <line x1="705" y1="760" x2="705" y2="600" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              </g>

              <g id="td-hebergement">
                <rect x="810" y="645" width="170" height="180" fill="#fff" stroke="#000" strokeWidth="1"/>
                <text x="895" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-HÉBERGEMENT</text>
                <text x="895" y="682" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 30mA - 4P 63A</text>
                <line x1="820" y1="690" x2="970" y2="690" stroke="#666" strokeWidth="0.5"/>
                <text x="820" y="705" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="820" y="720" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="820" y="735" fontFamily="Arial" fontSize="8">• Clim: 25A - 5×4mm²</text>
                <text x="820" y="750" fontFamily="Arial" fontSize="8">• Montée: HN33 4×35mm²</text>
                <line x1="895" y1="760" x2="895" y2="600" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              </g>

              <g id="td-salles">
                <rect x="1000" y="645" width="170" height="180" fill="#fff" stroke="#000" strokeWidth="1"/>
                <text x="1085" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-SALLES</text>
                <text x="1085" y="682" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 30mA - 4P 63A</text>
                <line x1="1010" y1="690" x2="1160" y2="690" stroke="#666" strokeWidth="0.5"/>
                <text x="1010" y="705" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="1010" y="720" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="1010" y="735" fontFamily="Arial" fontSize="8">• Clim: 20A - 3×2,5mm²</text>
                <text x="1010" y="750" fontFamily="Arial" fontSize="8">• Montée: HN33 4×35mm²</text>
                <line x1="1085" y1="760" x2="1085" y2="600" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              </g>

              <g id="td-malick">
                <rect x="1190" y="645" width="170" height="180" fill="#fff" stroke="#000" strokeWidth="1"/>
                <text x="1275" y="665" fontFamily="Arial" fontSize="11" fontWeight="bold" textAnchor="middle">TD-MALICK DIAGNE</text>
                <text x="1275" y="682" fontFamily="Arial" fontSize="8" textAnchor="middle">ID 30mA - 4P 63A</text>
                <line x1="1200" y1="690" x2="1350" y2="690" stroke="#666" strokeWidth="0.5"/>
                <text x="1200" y="705" fontFamily="Arial" fontSize="8">• Éclairage: 10A - 3×1,5mm²</text>
                <text x="1200" y="720" fontFamily="Arial" fontSize="8">• Prises: 16A - 3×2,5mm²</text>
                <text x="1200" y="735" fontFamily="Arial" fontSize="8">• Clim/IT: 25A - 5×4mm²</text>
                <text x="1200" y="750" fontFamily="Arial" fontSize="8">• Montée: HN33 4×35mm²</text>
                <line x1="1275" y1="760" x2="1275" y2="600" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              </g>

              <line x1="130" y1="515" x2="130" y2="600" stroke="#000" strokeWidth="3"/>
              <line x1="130" y1="600" x2="1275" y2="600" stroke="#000" strokeWidth="3"/>
            </g>

            <g id="legende">
              <rect x="20" y="860" width="960" height="120" fill="#f9fafb" stroke="#000" strokeWidth="2"/>
              <text x="30" y="880" fontFamily="Arial" fontSize="12" fontWeight="bold">LÉGENDE</text>
              
              <rect x="30" y="895" width="20" height="15" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="55" y="907" fontFamily="Arial" fontSize="9">ID: Interrupteur Différentiel</text>
              
              <rect x="220" y="895" width="20" height="15" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="245" y="907" fontFamily="Arial" fontSize="9">DD: Disjoncteur Divisionnaire</text>
              
              <rect x="420" y="895" width="20" height="15" fill="#fff" stroke="#000" strokeWidth="1"/>
              <text x="445" y="907" fontFamily="Arial" fontSize="9">DJ: Disjoncteur de Puissance</text>
              
              <rect x="630" y="895" width="20" height="15" fill="#fffbeb" stroke="#000" strokeWidth="1"/>
              <text x="655" y="907" fontFamily="Arial" fontSize="9">ATS: Commutateur Auto. Source</text>

              <line x1="30" y1="925" x2="50" y2="925" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2"/>
              <text x="55" y="930" fontFamily="Arial" fontSize="9">Liaison DC (PV/Batteries)</text>
              
              <line x1="220" y1="925" x2="240" y2="925" stroke="#000" strokeWidth="2"/>
              <text x="245" y="930" fontFamily="Arial" fontSize="9">Liaison AC (Courant alternatif)</text>
              
              <rect x="420" y="920" width="20" height="10" fill="#fbbf24" stroke="#000" strokeWidth="1"/>
              <text x="445" y="930" fontFamily="Arial" fontSize="9">Busbar AC</text>

              <circle cx="640" cy="925" r="5" fill="none" stroke="#000" strokeWidth="1"/>
              <line x1="635" y1="930" x2="645" y2="930" stroke="#000" strokeWidth="1"/>
              <text x="655" y="930" fontFamily="Arial" fontSize="9">Mise à la terre</text>

              <text x="30" y="950" fontFamily="Arial" fontSize="9">PF: Parafoudre</text>
              <text x="220" y="950" fontFamily="Arial" fontSize="9">TGBT: Tableau Général Basse Tension</text>
              <text x="420" y="950" fontFamily="Arial" fontSize="9">TD: Tableau Divisionnaire</text>
              <text x="630" y="950" fontFamily="Arial" fontSize="9">GE: Groupe Électrogène</text>

              <text x="30" y="970" fontFamily="Arial" fontSize="8" fill="#666">Sélectivité différentielle: 300mA (incendie) en amont, 30mA (personnes) en aval</text>
            </g>

          </svg>
        </div>
      </div>
    </div>
  );
};

export default SchemaUnifilaireTostan;