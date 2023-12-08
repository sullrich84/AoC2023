export type Puzzle = {
  move: ("L" | "R")[]
  network: { [key: string]: { L: string; R: string } }
}

export const sample1: Puzzle = {
  move: ["L", "L", "R"],
  network: {
    AAA: { L: "BBB", R: "BBB" },
    BBB: { L: "AAA", R: "ZZZ" },
    ZZZ: { L: "ZZZ", R: "ZZZ" },
  },
}

export const sample2: Puzzle = {
  move: ["L", "R"],
  network: {
    "11A": { L: "11B", R: "XXX" },
    "11B": { L: "XXX", R: "11Z" },
    "11Z": { L: "11B", R: "XXX" },
    "22A": { L: "22B", R: "XXX" },
    "22B": { L: "22C", R: "22C" },
    "22C": { L: "22Z", R: "22Z" },
    "22Z": { L: "22B", R: "22B" },
    "XXX": { L: "XXX", R: "XXX" },
  },
}

export const data: Puzzle = {
  move: [
    "L",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "L",
    "L",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "L",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "L",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "L",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "L",
    "R",
    "L",
    "R",
    "L",
    "L",
    "L",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "L",
    "R",
    "L",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "L",
    "L",
    "R",
    "R",
    "R",
    "L",
    "L",
    "R",
    "R",
    "L",
    "L",
    "R",
    "R",
    "L",
    "L",
    "R",
    "R",
    "R",
    "L",
    "L",
    "L",
    "L",
    "R",
    "L",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "L",
    "L",
    "L",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "L",
    "R",
    "R",
    "L",
    "L",
    "L",
    "L",
    "R",
    "R",
    "L",
    "L",
    "R",
    "R",
    "L",
    "L",
    "R",
    "R",
    "L",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "L",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "R",
    "L",
    "R",
    "R",
    "R",
    "L",
    "L",
    "R",
    "R",
    "R",
    "R",
  ],
  network: {
    GXF: { L: "XQB", R: "GFH" },
    QQC: { L: "HQF", R: "BNK" },
    TPP: { L: "XNG", R: "FDD" },
    LQD: { L: "MGR", R: "GJN" },
    XNG: { L: "RCM", R: "BJG" },
    NQC: { L: "KNT", R: "DQF" },
    DGJ: { L: "PGM", R: "LSB" },
    RBF: { L: "RCH", R: "RCH" },
    DNH: { L: "RTL", R: "MLF" },
    VKF: { L: "SRV", R: "TQR" },
    MPT: { L: "FVV", R: "TVP" },
    TKX: { L: "VRN", R: "KNV" },
    XLQ: { L: "MCF", R: "MCF" },
    MNJ: { L: "FRT", R: "QGV" },
    STF: { L: "LFQ", R: "QDS" },
    FFH: { L: "JVM", R: "TCJ" },
    KRT: { L: "GFC", R: "HRX" },
    FVG: { L: "QFS", R: "RSJ" },
    DBH: { L: "GXF", R: "DJL" },
    RKP: { L: "VNL", R: "MSC" },
    VQX: { L: "GGG", R: "RPB" },
    FCM: { L: "VMC", R: "MGV" },
    SRL: { L: "LVV", R: "JQN" },
    HHM: { L: "BDM", R: "FRV" },
    GMN: { L: "LPK", R: "FHT" },
    QCF: { L: "RCH", R: "NJM" },
    PCB: { L: "MDJ", R: "KDM" },
    VMR: { L: "THX", R: "HHB" },
    XQK: { L: "BJQ", R: "LST" },
    FCS: { L: "KPT", R: "RSC" },
    XTG: { L: "XTL", R: "SVX" },
    FVF: { L: "KXB", R: "VVV" },
    NNR: { L: "SBM", R: "TPP" },
    NPH: { L: "RHN", R: "FRR" },
    GJF: { L: "FXG", R: "MLP" },
    TRR: { L: "LVC", R: "RMR" },
    NBS: { L: "SFH", R: "JGT" },
    SSH: { L: "KTK", R: "DDM" },
    CJH: { L: "QJK", R: "XHB" },
    DQF: { L: "NSR", R: "MJB" },
    FHT: { L: "PFK", R: "GPS" },
    GTJ: { L: "QXC", R: "XBR" },
    KQB: { L: "JXT", R: "KGR" },
    JLL: { L: "GTJ", R: "CBN" },
    QPH: { L: "LTX", R: "BDJ" },
    BSP: { L: "MRH", R: "BXJ" },
    QBX: { L: "GPR", R: "SHJ" },
    SPJ: { L: "SLD", R: "XQK" },
    PML: { L: "TTV", R: "BHX" },
    FQN: { L: "TPJ", R: "BTV" },
    GTK: { L: "NBS", R: "VNP" },
    DSQ: { L: "RFN", R: "QGB" },
    KTK: { L: "JHR", R: "FCM" },
    FXV: { L: "BBN", R: "VPK" },
    LJC: { L: "VKH", R: "PPQ" },
    NBA: { L: "JBL", R: "LSR" },
    RKK: { L: "VTL", R: "SNM" },
    FVV: { L: "DQS", R: "CSM" },
    MGJ: { L: "QHP", R: "DPL" },
    RND: { L: "JRQ", R: "XGJ" },
    DVP: { L: "RBF", R: "RBF" },
    JXR: { L: "TJN", R: "CVC" },
    FMV: { L: "CVJ", R: "BVZ" },
    XBL: { L: "KFC", R: "HHT" },
    GDR: { L: "KCV", R: "KCV" },
    NGN: { L: "VKH", R: "PPQ" },
    NJB: { L: "VTH", R: "FSQ" },
    MBD: { L: "JKS", R: "SFQ" },
    TGC: { L: "PXP", R: "TTF" },
    VMT: { L: "XJN", R: "CCH" },
    LBF: { L: "QRB", R: "SKN" },
    DGH: { L: "CSD", R: "RND" },
    SFH: { L: "XHH", R: "GSC" },
    QQD: { L: "VTT", R: "NLX" },
    BLB: { L: "GHJ", R: "KQD" },
    LFG: { L: "TLH", R: "XJT" },
    CQS: { L: "FRR", R: "RHN" },
    XRS: { L: "QLF", R: "KLC" },
    DJL: { L: "GFH", R: "XQB" },
    LJM: { L: "RPM", R: "HPF" },
    HHT: { L: "LBF", R: "VCS" },
    GFL: { L: "LFG", R: "MGQ" },
    TNX: { L: "TSJ", R: "HCK" },
    HPR: { L: "MTG", R: "TJX" },
    LKP: { L: "BXL", R: "BHG" },
    KRC: { L: "DCT", R: "CTS" },
    PSJ: { L: "QPF", R: "MQT" },
    CXG: { L: "NPG", R: "JQP" },
    QTK: { L: "XBL", R: "DSM" },
    SVP: { L: "MLF", R: "RTL" },
    NDT: { L: "NLC", R: "MLK" },
    TDR: { L: "DJR", R: "CJQ" },
    RHS: { L: "HXN", R: "PSZ" },
    PSZ: { L: "VNG", R: "NNK" },
    KKL: { L: "GLH", R: "SPJ" },
    RSB: { L: "SFQ", R: "JKS" },
    PQS: { L: "XVK", R: "LMV" },
    TTV: { L: "MLG", R: "FRH" },
    CJQ: { L: "CTM", R: "KCC" },
    VTT: { L: "QSQ", R: "TVV" },
    TCJ: { L: "MTD", R: "KKX" },
    CNM: { L: "SXQ", R: "RGK" },
    XCC: { L: "DNP", R: "FQN" },
    CXD: { L: "TJX", R: "MTG" },
    VTL: { L: "JFV", R: "DHN" },
    BJG: { L: "FHB", R: "QVJ" },
    MJR: { L: "HDL", R: "LSF" },
    CSV: { L: "CTS", R: "DCT" },
    LFQ: { L: "LNX", R: "RHQ" },
    MNL: { L: "XBL", R: "DSM" },
    NDR: { L: "PGT", R: "TPC" },
    CKS: { L: "CDQ", R: "GLT" },
    VVV: { L: "BVL", R: "QQC" },
    GGG: { L: "JGS", R: "VRC" },
    QRT: { L: "SQJ", R: "VSJ" },
    HQF: { L: "NJK", R: "NJK" },
    JGK: { L: "FJK", R: "PXJ" },
    RXG: { L: "CLT", R: "GTK" },
    TNH: { L: "SJM", R: "QNX" },
    HLX: { L: "QJX", R: "PGN" },
    FRR: { L: "CKP", R: "NHC" },
    QMK: { L: "QVH", R: "QLH" },
    FRT: { L: "TMB", R: "VRX" },
    KJD: { L: "GBS", R: "QMT" },
    RCH: { L: "TGC", R: "TGC" },
    JGF: { L: "DKD", R: "CHG" },
    TSM: { L: "TDR", R: "XHJ" },
    MTG: { L: "DRP", R: "KRR" },
    DCF: { L: "NQC", R: "KNM" },
    VPQ: { L: "HRB", R: "MGG" },
    XVK: { L: "MPC", R: "XMX" },
    NNK: { L: "FKT", R: "CMD" },
    TBF: { L: "JDV", R: "LQD" },
    TTH: { L: "SJM", R: "QNX" },
    NLX: { L: "TVV", R: "QSQ" },
    HGT: { L: "LSF", R: "HDL" },
    FCB: { L: "KLC", R: "QLF" },
    GBH: { L: "HTJ", R: "LXL" },
    BJQ: { L: "XDH", R: "RGV" },
    FLH: { L: "FXV", R: "SMJ" },
    XGN: { L: "CHN", R: "BLJ" },
    RGV: { L: "QCB", R: "TCC" },
    BCV: { L: "NHF", R: "NDH" },
    GQD: { L: "LDC", R: "TVB" },
    BCT: { L: "KGS", R: "QCH" },
    NGC: { L: "MGJ", R: "RPT" },
    LSL: { L: "QVH", R: "QLH" },
    SQJ: { L: "TTH", R: "TNH" },
    VNL: { L: "RLV", R: "CRK" },
    XCQ: { L: "KQB", R: "BLP" },
    CDL: { L: "DJL", R: "GXF" },
    MJB: { L: "CRR", R: "HHM" },
    GSP: { L: "DQJ", R: "FLV" },
    NCM: { L: "SQN", R: "VPJ" },
    JRQ: { L: "RJM", R: "CXG" },
    SXA: { L: "QPH", R: "CFB" },
    LBT: { L: "GPL", R: "NDJ" },
    QNX: { L: "PJT", R: "PQC" },
    PBV: { L: "RRP", R: "TSM" },
    CSD: { L: "XGJ", R: "JRQ" },
    MLK: { L: "GLG", R: "SKB" },
    CFB: { L: "LTX", R: "BDJ" },
    BCH: { L: "HPQ", R: "JBR" },
    BBN: { L: "RHR", R: "VMT" },
    KCV: { L: "RHL", R: "RHL" },
    SGG: { L: "SMP", R: "QSP" },
    GFB: { L: "KCF", R: "KJR" },
    TSD: { L: "NSD", R: "NDL" },
    CXL: { L: "FVG", R: "JCJ" },
    FSQ: { L: "FQG", R: "GXQ" },
    BQF: { L: "HRB", R: "MGG" },
    LRK: { L: "JPG", R: "BHR" },
    LBB: { L: "BHX", R: "TTV" },
    CXR: { L: "BXX", R: "STP" },
    MGV: { L: "RLK", R: "FDX" },
    FHB: { L: "LCN", R: "KSX" },
    JDQ: { L: "GFK", R: "BHD" },
    FJL: { L: "GDR", R: "GDR" },
    TSN: { L: "RKJ", R: "GLN" },
    VPK: { L: "RHR", R: "VMT" },
    VCS: { L: "SKN", R: "QRB" },
    BKG: { L: "RSC", R: "KPT" },
    LQB: { L: "MMQ", R: "BCT" },
    KJK: { L: "SMF", R: "VPM" },
    XMV: { L: "PQS", R: "RCX" },
    TCC: { L: "GPP", R: "KRT" },
    BFS: { L: "DDP", R: "VJJ" },
    FDD: { L: "RCM", R: "BJG" },
    BHG: { L: "MKG", R: "BSM" },
    GQP: { L: "PRR", R: "FFH" },
    GXQ: { L: "BLH", R: "FMB" },
    XBV: { L: "NSH", R: "GCB" },
    MCF: { L: "QPH", R: "CFB" },
    BTD: { L: "BCH", R: "GFM" },
    JQD: { L: "VPQ", R: "BQF" },
    JGT: { L: "XHH", R: "GSC" },
    KGS: { L: "MGB", R: "QQS" },
    JMF: { L: "PSK", R: "GDD" },
    VTZ: { L: "NNR", R: "NVQ" },
    JGS: { L: "KHM", R: "DTS" },
    CBF: { L: "NDJ", R: "GPL" },
    XPM: { L: "MCF", R: "VGZ" },
    RSJ: { L: "VCC", R: "MGS" },
    BLQ: { L: "HJP", R: "MPP" },
    HHB: { L: "NKX", R: "PXK" },
    JKS: { L: "DKV", R: "GMN" },
    GFH: { L: "RXG", R: "VGP" },
    MSC: { L: "RLV", R: "CRK" },
    KJR: { L: "SLQ", R: "FLH" },
    KFC: { L: "VCS", R: "LBF" },
    GGM: { L: "KJK", R: "QJF" },
    QDS: { L: "RHQ", R: "LNX" },
    TPC: { L: "PFD", R: "DJN" },
    DSM: { L: "HHT", R: "KFC" },
    BPJ: { L: "RKK", R: "GGV" },
    MLG: { L: "PDG", R: "SGF" },
    HTJ: { L: "RBJ", R: "PKL" },
    HJR: { L: "MRH", R: "BXJ" },
    JVA: { L: "NVQ", R: "NNR" },
    PXK: { L: "CRV", R: "RHB" },
    NJK: { L: "CVJ", R: "CVJ" },
    XPR: { L: "PGT", R: "TPC" },
    DTS: { L: "FCS", R: "BKG" },
    XJN: { L: "TFT", R: "LKP" },
    SNV: { L: "DDT", R: "LBL" },
    BXX: { L: "KKQ", R: "GBH" },
    PQM: { L: "MXJ", R: "FTT" },
    NSX: { L: "HLX", R: "GVH" },
    CVJ: { L: "JBL", R: "LSR" },
    HKQ: { L: "VMR", R: "DSR" },
    RQJ: { L: "QFV", R: "XMV" },
    CMQ: { L: "KKL", R: "QDL" },
    PGM: { L: "VBL", R: "KFF" },
    LST: { L: "RGV", R: "XDH" },
    CMD: { L: "HKQ", R: "SPB" },
    XSV: { L: "LBB", R: "PML" },
    JHB: { L: "SSB", R: "CXR" },
    LVC: { L: "JHB", R: "TVH" },
    QNT: { L: "RBB", R: "NDT" },
    QPF: { L: "FJG", R: "TKX" },
    NDH: { L: "RRT", R: "PQM" },
    TSJ: { L: "LGH", R: "FBN" },
    KDM: { L: "GJJ", R: "NVX" },
    HMJ: { L: "HPF", R: "RPM" },
    STP: { L: "GBH", R: "KKQ" },
    LDC: { L: "LBT", R: "CBF" },
    RCB: { L: "BPN", R: "JXR" },
    MSN: { L: "PDF", R: "JHF" },
    KKX: { L: "HVX", R: "BKX" },
    GLT: { L: "VHR", R: "GGM" },
    MRH: { L: "LCD", R: "CKD" },
    VGP: { L: "CLT", R: "GTK" },
    LLV: { L: "MRN", R: "PBV" },
    PDL: { L: "DGH", R: "LNK" },
    PFD: { L: "RCB", R: "VRH" },
    CRK: { L: "NGC", R: "KQR" },
    TVP: { L: "CSM", R: "DQS" },
    VTH: { L: "GXQ", R: "FQG" },
    RHJ: { L: "SHN", R: "PNR" },
    MMQ: { L: "QCH", R: "KGS" },
    GFK: { L: "VDV", R: "XCC" },
    PQC: { L: "SRF", R: "KML" },
    SHJ: { L: "CHD", R: "DCB" },
    QJF: { L: "SMF", R: "VPM" },
    QLF: { L: "NGX", R: "RKP" },
    LTX: { L: "RNS", R: "VHH" },
    RQB: { L: "MGQ", R: "LFG" },
    BHD: { L: "XCC", R: "VDV" },
    FQG: { L: "BLH", R: "FMB" },
    SNM: { L: "JFV", R: "DHN" },
    LRQ: { L: "JDL", R: "QBX" },
    SHP: { L: "FRT", R: "QGV" },
    DDP: { L: "CRJ", R: "SXV" },
    LMV: { L: "XMX", R: "MPC" },
    KMP: { L: "HQB", R: "SSK" },
    GXM: { L: "SRV", R: "TQR" },
    SMP: { L: "JGK", R: "GST" },
    KRH: { L: "PBV", R: "MRN" },
    RDM: { L: "FKN", R: "MSN" },
    FNF: { L: "VJJ", R: "DDP" },
    VKH: { L: "CJX", R: "PDB" },
    NHF: { L: "PQM", R: "RRT" },
    PBJ: { L: "RMR", R: "LVC" },
    FRG: { L: "QJC", R: "BPL" },
    RHG: { L: "BGQ", R: "XCQ" },
    RPB: { L: "VRC", R: "JGS" },
    KQD: { L: "VBS", R: "MBN" },
    LSR: { L: "SRH", R: "CSS" },
    KFF: { L: "MFT", R: "NSX" },
    TJX: { L: "KRR", R: "DRP" },
    GPL: { L: "FPQ", R: "SSH" },
    XNM: { L: "BCH", R: "GFM" },
    MPP: { L: "RLX", R: "FVF" },
    HQB: { L: "DJJ", R: "SPV" },
    SSK: { L: "SPV", R: "DJJ" },
    XVA: { L: "SHP", R: "MNJ" },
    TMT: { L: "VRS", R: "JHH" },
    NGX: { L: "MSC", R: "VNL" },
    SMF: { L: "HFP", R: "JMF" },
    SFQ: { L: "DKV", R: "GMN" },
    GBM: { L: "NDH", R: "NHF" },
    DKV: { L: "FHT", R: "LPK" },
    PTN: { L: "FCD", R: "SRL" },
    GPB: { L: "CVS", R: "GFD" },
    QFR: { L: "BLQ", R: "LCT" },
    TLH: { L: "KMP", R: "LFS" },
    TVG: { L: "BHD", R: "GFK" },
    RRT: { L: "MXJ", R: "FTT" },
    DCB: { L: "BPC", R: "GJF" },
    VRN: { L: "CVH", R: "PLG" },
    MGG: { L: "RGR", R: "DDB" },
    XND: { L: "LGX", R: "FCN" },
    HDC: { L: "DJP", R: "BPJ" },
    TCV: { L: "NNV", R: "MDV" },
    JQP: { L: "LSL", R: "QMK" },
    KLC: { L: "NGX", R: "RKP" },
    DPL: { L: "VSL", R: "GQP" },
    BHX: { L: "MLG", R: "FRH" },
    HNK: { L: "LFQ", R: "QDS" },
    RHR: { L: "CCH", R: "XJN" },
    RCM: { L: "FHB", R: "QVJ" },
    JVN: { L: "RHL", R: "VTZ" },
    HSS: { L: "LXF", R: "LXF" },
    XQB: { L: "RXG", R: "VGP" },
    XJQ: { L: "NLN", R: "XLD" },
    HFP: { L: "PSK", R: "GDD" },
    HCK: { L: "FBN", R: "LGH" },
    VHR: { L: "KJK", R: "QJF" },
    MLF: { L: "MPT", R: "SGJ" },
    TPS: { L: "PGM", R: "LSB" },
    HJJ: { L: "CQS", R: "NPH" },
    LMQ: { L: "JQD", R: "VPR" },
    GPR: { L: "CHD", R: "DCB" },
    QFS: { L: "MGS", R: "VCC" },
    SKB: { L: "SMG", R: "STS" },
    CKT: { L: "CCJ", R: "RJH" },
    SDV: { L: "NGN", R: "LJC" },
    DJB: { L: "DVP", R: "SHV" },
    CDR: { L: "RQJ", R: "BPH" },
    QHP: { L: "VSL", R: "GQP" },
    PFK: { L: "HQJ", R: "XSV" },
    PNM: { L: "NRQ", R: "JGF" },
    SQN: { L: "LJM", R: "HMJ" },
    KXB: { L: "BVL", R: "QQC" },
    NHX: { L: "XDQ", R: "PTN" },
    TFT: { L: "BHG", R: "BXL" },
    XDH: { L: "TCC", R: "QCB" },
    XFN: { L: "QGB", R: "RFN" },
    BLJ: { L: "QRV", R: "GGH" },
    QLH: { L: "SGG", R: "QHQ" },
    KPT: { L: "LQB", R: "TNG" },
    VBS: { L: "PDL", R: "PJH" },
    RFN: { L: "GFL", R: "RQB" },
    JDL: { L: "GPR", R: "SHJ" },
    NNV: { L: "VSN", R: "BRN" },
    JNV: { L: "KDM", R: "MDJ" },
    SLK: { L: "FLV", R: "DQJ" },
    JPG: { L: "XRS", R: "FCB" },
    DQJ: { L: "NGR", R: "XKM" },
    LMT: { L: "GJC", R: "BKT" },
    GFD: { L: "DMP", R: "XND" },
    RJM: { L: "NPG", R: "JQP" },
    GLH: { L: "XQK", R: "SLD" },
    SPB: { L: "DSR", R: "VMR" },
    MGQ: { L: "TLH", R: "XJT" },
    SNL: { L: "MLR", R: "VTM" },
    KNT: { L: "MJB", R: "NSR" },
    DDM: { L: "FCM", R: "JHR" },
    TDD: { L: "GLN", R: "RKJ" },
    RRX: { L: "XLQ", R: "XPM" },
    SGF: { L: "SNL", R: "FJF" },
    BTV: { L: "GFB", R: "SMX" },
    BPH: { L: "XMV", R: "QFV" },
    VSJ: { L: "TNH", R: "TTH" },
    DSD: { L: "DVP", R: "SHV" },
    JXT: { L: "DGJ", R: "TPS" },
    DDV: { L: "NNV", R: "MDV" },
    DRP: { L: "KDS", R: "TNJ" },
    MTD: { L: "HVX", R: "BKX" },
    CVH: { L: "FFD", R: "RDM" },
    LCD: { L: "CMJ", R: "CMJ" },
    NLC: { L: "SKB", R: "GLG" },
    XJT: { L: "LFS", R: "KMP" },
    CHG: { L: "DHF", R: "FVX" },
    MFT: { L: "HLX", R: "GVH" },
    HRX: { L: "HPM", R: "XGN" },
    KGR: { L: "TPS", R: "DGJ" },
    GLJ: { L: "NSH", R: "GCB" },
    GPP: { L: "GFC", R: "HRX" },
    TVV: { L: "NFR", R: "QNT" },
    QJK: { L: "QKQ", R: "KDV" },
    XHH: { L: "NJB", R: "PVR" },
    BHR: { L: "FCB", R: "XRS" },
    CKD: { L: "CMJ", R: "RRX" },
    XKM: { L: "VQX", R: "RDL" },
    PXJ: { L: "GBM", R: "BCV" },
    DCT: { L: "HDC", R: "BFG" },
    HXN: { L: "NNK", R: "VNG" },
    QGG: { L: "BPH", R: "RQJ" },
    DQS: { L: "FKL", R: "NCM" },
    STL: { L: "DDT", R: "LBL" },
    PDB: { L: "FNF", R: "BFS" },
    ZZZ: { L: "TTF", R: "PXP" },
    SHV: { L: "RBF", R: "QCF" },
    NGL: { L: "GDR", R: "XRQ" },
    QVH: { L: "QHQ", R: "SGG" },
    CBN: { L: "XBR", R: "QXC" },
    RNT: { L: "KRC", R: "CSV" },
    GCB: { L: "DDF", R: "LMQ" },
    NDL: { L: "DDV", R: "TCV" },
    SRV: { L: "CDR", R: "QGG" },
    DMP: { L: "LGX", R: "LGX" },
    RKJ: { L: "KFG", R: "FRG" },
    SKG: { L: "KBH", R: "LRQ" },
    QGB: { L: "RQB", R: "GFL" },
    XBR: { L: "GQD", R: "QJV" },
    DHN: { L: "LMT", R: "NBB" },
    LPK: { L: "PFK", R: "GPS" },
    QVS: { L: "HJJ", R: "TQJ" },
    MSV: { L: "RJH", R: "CCJ" },
    CCK: { L: "SQJ", R: "VSJ" },
    QHQ: { L: "SMP", R: "QSP" },
    PKL: { L: "RVD", R: "BDX" },
    JDV: { L: "MGR", R: "GJN" },
    FDX: { L: "JFT", R: "TNX" },
    DJN: { L: "RCB", R: "VRH" },
    XGJ: { L: "CXG", R: "RJM" },
    DJJ: { L: "VKF", R: "GXM" },
    VPR: { L: "VPQ", R: "BQF" },
    PGT: { L: "PFD", R: "DJN" },
    RGR: { L: "RPS", R: "NBT" },
    BRK: { L: "BSP", R: "HJR" },
    KKQ: { L: "LXL", R: "HTJ" },
    VRC: { L: "DTS", R: "KHM" },
    GST: { L: "FJK", R: "PXJ" },
    SLD: { L: "BJQ", R: "LST" },
    GHL: { L: "NRQ", R: "JGF" },
    HQJ: { L: "PML", R: "LBB" },
    BLH: { L: "RNT", R: "JFC" },
    SPV: { L: "GXM", R: "VKF" },
    VPM: { L: "JMF", R: "HFP" },
    RBB: { L: "MLK", R: "NLC" },
    FTT: { L: "PVF", R: "DVS" },
    XRQ: { L: "KCV", R: "JVN" },
    LSB: { L: "VBL", R: "KFF" },
    QMT: { L: "CCK", R: "QRT" },
    FBN: { L: "XNM", R: "BTD" },
    JFT: { L: "TSJ", R: "HCK" },
    HDL: { L: "QHL", R: "XNP" },
    BPC: { L: "FXG", R: "MLP" },
    TVB: { L: "LBT", R: "CBF" },
    KNM: { L: "KNT", R: "DQF" },
    CHN: { L: "QRV", R: "GGH" },
    SRH: { L: "XQN", R: "NNC" },
    LXF: { L: "HXN", R: "HXN" },
    VCC: { L: "SKG", R: "QQR" },
    VMM: { L: "RGK", R: "SXQ" },
    FCD: { L: "LVV", R: "JQN" },
    FMB: { L: "RNT", R: "JFC" },
    CNC: { L: "PTN", R: "XDQ" },
    KCC: { L: "JLL", R: "VFC" },
    CDQ: { L: "VHR", R: "GGM" },
    QFV: { L: "RCX", R: "PQS" },
    XQN: { L: "RHG", R: "TKF" },
    SMJ: { L: "VPK", R: "BBN" },
    SRF: { L: "JDQ", R: "TVG" },
    SKN: { L: "RLS", R: "RHJ" },
    KXX: { L: "KHL", R: "LFJ" },
    GJN: { L: "BRK", R: "FPX" },
    QGV: { L: "VRX", R: "TMB" },
    SXV: { L: "GQM", R: "KJD" },
    VGZ: { L: "CFB", R: "QPH" },
    JQN: { L: "XFN", R: "DSQ" },
    BKT: { L: "CBT", R: "PVD" },
    QJC: { L: "PBJ", R: "TRR" },
    BLP: { L: "JXT", R: "KGR" },
    TTF: { L: "MMV", R: "MFK" },
    PXP: { L: "MMV", R: "MFK" },
    PSK: { L: "KMJ", R: "QQD" },
    VPJ: { L: "HMJ", R: "LJM" },
    RPQ: { L: "CDL", R: "DBH" },
    RPS: { L: "NDR", R: "XPR" },
    QQS: { L: "VDG", R: "XJP" },
    GGH: { L: "PCB", R: "JNV" },
    KHL: { L: "MLT", R: "PSJ" },
    NPG: { L: "QMK", R: "LSL" },
    XDQ: { L: "SRL", R: "FCD" },
    MXJ: { L: "PVF", R: "DVS" },
    VGG: { L: "XLD", R: "NLN" },
    DNP: { L: "TPJ", R: "BTV" },
    XRN: { L: "LRK", R: "QXS" },
    XTS: { L: "NQC", R: "KNM" },
    FJF: { L: "MLR", R: "VTM" },
    MVL: { L: "THG", R: "GPB" },
    TPJ: { L: "GFB", R: "SMX" },
    FJG: { L: "VRN", R: "KNV" },
    NDX: { L: "JDV", R: "LQD" },
    JHR: { L: "MGV", R: "VMC" },
    KNV: { L: "CVH", R: "PLG" },
    NSH: { L: "LMQ", R: "DDF" },
    THG: { L: "CVS", R: "GFD" },
    RDL: { L: "RPB", R: "GGG" },
    BNK: { L: "NJK", R: "FMV" },
    FHG: { L: "THG", R: "GPB" },
    NKX: { L: "RHB", R: "CRV" },
    MMV: { L: "CKS", R: "FRS" },
    RHB: { L: "GSP", R: "SLK" },
    GVH: { L: "QJX", R: "PGN" },
    LFS: { L: "HQB", R: "SSK" },
    SJM: { L: "PQC", R: "PJT" },
    TVH: { L: "CXR", R: "SSB" },
    FKN: { L: "JHF", R: "PDF" },
    KRR: { L: "TNJ", R: "KDS" },
    HPQ: { L: "FJL", R: "NGL" },
    PDG: { L: "FJF", R: "SNL" },
    RRP: { L: "TDR", R: "XHJ" },
    LGX: { L: "XVV", R: "XVV" },
    QKQ: { L: "TDD", R: "TSN" },
    GQM: { L: "GBS", R: "QMT" },
    MQT: { L: "FJG", R: "TKX" },
    HRB: { L: "RGR", R: "DDB" },
    HQS: { L: "DJB", R: "DSD" },
    XMX: { L: "MNL", R: "QTK" },
    LGH: { L: "XNM", R: "BTD" },
    QJX: { L: "PPC", R: "KXX" },
    JBR: { L: "FJL", R: "NGL" },
    FRV: { L: "HGT", R: "MJR" },
    BXN: { L: "QXS", R: "LRK" },
    GFM: { L: "HPQ", R: "JBR" },
    MDV: { L: "VSN", R: "BRN" },
    PPQ: { L: "PDB", R: "CJX" },
    FRH: { L: "PDG", R: "SGF" },
    KBH: { L: "QBX", R: "JDL" },
    LNX: { L: "XTG", R: "MJV" },
    PHD: { L: "XJQ", R: "VGG" },
    DJR: { L: "KCC", R: "CTM" },
    LNK: { L: "RND", R: "CSD" },
    SVX: { L: "HRJ", R: "RPQ" },
    BVZ: { L: "LSR", R: "JBL" },
    STS: { L: "CMQ", R: "MGX" },
    DDF: { L: "VPR", R: "JQD" },
    GHJ: { L: "MBN", R: "VBS" },
    HVX: { L: "CXD", R: "HPR" },
    JBL: { L: "CSS", R: "SRH" },
    HPF: { L: "BNS", R: "QFR" },
    DSR: { L: "THX", R: "HHB" },
    KMJ: { L: "VTT", R: "NLX" },
    GFC: { L: "XGN", R: "HPM" },
    CJX: { L: "FNF", R: "BFS" },
    FKT: { L: "SPB", R: "HKQ" },
    MBN: { L: "PDL", R: "PJH" },
    NLN: { L: "CXL", R: "KNR" },
    GSC: { L: "PVR", R: "NJB" },
    LFJ: { L: "MLT", R: "PSJ" },
    NBT: { L: "NDR", R: "XPR" },
    RLK: { L: "TNX", R: "JFT" },
    SSB: { L: "BXX", R: "STP" },
    FJK: { L: "GBM", R: "BCV" },
    VRX: { L: "CJH", R: "KXH" },
    DJP: { L: "RKK", R: "GGV" },
    HRJ: { L: "CDL", R: "DBH" },
    XHB: { L: "QKQ", R: "KDV" },
    BVL: { L: "HQF", R: "HQF" },
    PVF: { L: "VMM", R: "CNM" },
    GLN: { L: "KFG", R: "FRG" },
    KHM: { L: "BKG", R: "FCS" },
    VHH: { L: "MBJ", R: "PHD" },
    XPV: { L: "DJB", R: "DSD" },
    MJV: { L: "XTL", R: "SVX" },
    BDJ: { L: "VHH", R: "RNS" },
    RLS: { L: "SHN", R: "PNR" },
    CBT: { L: "RQM", R: "JJX" },
    PRR: { L: "JVM", R: "TCJ" },
    DVS: { L: "VMM", R: "CNM" },
    KXH: { L: "QJK", R: "XHB" },
    SHD: { L: "LXF", R: "RHS" },
    GPS: { L: "XSV", R: "HQJ" },
    MGR: { L: "BRK", R: "FPX" },
    BXJ: { L: "LCD", R: "CKD" },
    RBJ: { L: "RVD", R: "BDX" },
    JFC: { L: "KRC", R: "CSV" },
    GDD: { L: "QQD", R: "KMJ" },
    KDS: { L: "TBF", R: "NDX" },
    BRN: { L: "HSS", R: "SHD" },
    QXC: { L: "QJV", R: "GQD" },
    GLG: { L: "STS", R: "SMG" },
    MGX: { L: "QDL", R: "KKL" },
    MLT: { L: "MQT", R: "QPF" },
    HPM: { L: "BLJ", R: "CHN" },
    CKP: { L: "CNC", R: "NHX" },
    KML: { L: "TVG", R: "JDQ" },
    AAA: { L: "PXP", R: "TTF" },
    BPZ: { L: "MNJ", R: "SHP" },
    FPQ: { L: "DDM", R: "KTK" },
    NSR: { L: "CRR", R: "HHM" },
    XLD: { L: "CXL", R: "KNR" },
    PLG: { L: "FFD", R: "RDM" },
    RPM: { L: "BNS", R: "QFR" },
    SGJ: { L: "FVV", R: "TVP" },
    BPL: { L: "PBJ", R: "TRR" },
    RHN: { L: "NHC", R: "CKP" },
    MGB: { L: "XJP", R: "VDG" },
    RJH: { L: "BTK", R: "FBK" },
    VNP: { L: "JGT", R: "SFH" },
    BDX: { L: "SNV", R: "STL" },
    VSN: { L: "HSS", R: "HSS" },
    LCT: { L: "MPP", R: "HJP" },
    NBB: { L: "GJC", R: "BKT" },
    VRS: { L: "GHL", R: "PNM" },
    JJX: { L: "BLB", R: "FBQ" },
    TMB: { L: "KXH", R: "CJH" },
    RLX: { L: "KXB", R: "VVV" },
    NJM: { L: "TGC", R: "ZZZ" },
    VNG: { L: "CMD", R: "FKT" },
    GJJ: { L: "MSV", R: "CKT" },
    CVC: { L: "SNH", R: "TMT" },
    CVS: { L: "DMP", R: "DMP" },
    MFK: { L: "CKS", R: "FRS" },
    XHJ: { L: "DJR", R: "CJQ" },
    FCN: { L: "XVV", R: "BPZ" },
    JVM: { L: "KKX", R: "MTD" },
    RQM: { L: "FBQ", R: "BLB" },
    SLQ: { L: "FXV", R: "SMJ" },
    BNS: { L: "LCT", R: "BLQ" },
    DKD: { L: "FVX", R: "DHF" },
    JHF: { L: "MBD", R: "RSB" },
    FBQ: { L: "GHJ", R: "KQD" },
    KDV: { L: "TSN", R: "TDD" },
    FVL: { L: "HJJ", R: "TQJ" },
    LXL: { L: "PKL", R: "RBJ" },
    VDV: { L: "FQN", R: "DNP" },
    BDM: { L: "HGT", R: "MJR" },
    VDG: { L: "KHJ", R: "SDV" },
    BFG: { L: "DJP", R: "BPJ" },
    PNR: { L: "XPV", R: "HQS" },
    XTL: { L: "RPQ", R: "HRJ" },
    PGN: { L: "PPC", R: "KXX" },
    XNP: { L: "LLV", R: "KRH" },
    VTM: { L: "DNH", R: "SVP" },
    VJJ: { L: "CRJ", R: "SXV" },
    NVQ: { L: "SBM", R: "TPP" },
    RLV: { L: "NGC", R: "KQR" },
    THX: { L: "NKX", R: "PXK" },
    MLP: { L: "GLJ", R: "XBV" },
    MPC: { L: "MNL", R: "QTK" },
    FPX: { L: "BSP", R: "HJR" },
    NHC: { L: "NHX", R: "CNC" },
    CRV: { L: "SLK", R: "GSP" },
    NNC: { L: "RHG", R: "TKF" },
    SNH: { L: "JHH", R: "VRS" },
    KNR: { L: "FVG", R: "JCJ" },
    CRJ: { L: "GQM", R: "KJD" },
    PJT: { L: "SRF", R: "KML" },
    XJP: { L: "KHJ", R: "SDV" },
    BXL: { L: "BSM", R: "MKG" },
    QRB: { L: "RHJ", R: "RLS" },
    SMX: { L: "KCF", R: "KJR" },
    CSM: { L: "FKL", R: "NCM" },
    MGS: { L: "QQR", R: "SKG" },
    RTL: { L: "SGJ", R: "MPT" },
    CND: { L: "NDL", R: "NSD" },
    BTK: { L: "QVS", R: "FVL" },
    TNJ: { L: "TBF", R: "NDX" },
    JFV: { L: "LMT", R: "NBB" },
    CMJ: { L: "XLQ", R: "XLQ" },
    CCJ: { L: "BTK", R: "FBK" },
    SXQ: { L: "FHG", R: "MVL" },
    MLR: { L: "DNH", R: "SVP" },
    PJH: { L: "LNK", R: "DGH" },
    KFG: { L: "QJC", R: "BPL" },
    MRN: { L: "RRP", R: "TSM" },
    LBL: { L: "HNK", R: "STF" },
    NFR: { L: "RBB", R: "NDT" },
    NGR: { L: "RDL", R: "VQX" },
    PVR: { L: "VTH", R: "FSQ" },
    LVV: { L: "XFN", R: "DSQ" },
    RCX: { L: "XVK", R: "LMV" },
    FLV: { L: "NGR", R: "XKM" },
    CRR: { L: "FRV", R: "BDM" },
    BSM: { L: "CND", R: "TSD" },
    FVX: { L: "XRN", R: "BXN" },
    TKF: { L: "XCQ", R: "BGQ" },
    QSQ: { L: "NFR", R: "QNT" },
    XVV: { L: "SHP", R: "MNJ" },
    RVD: { L: "SNV", R: "STL" },
    MKG: { L: "TSD", R: "CND" },
    QCB: { L: "GPP", R: "KRT" },
    NVX: { L: "MSV", R: "CKT" },
    GGV: { L: "VTL", R: "SNM" },
    GJC: { L: "PVD", R: "CBT" },
    QSP: { L: "JGK", R: "GST" },
    VBL: { L: "MFT", R: "NSX" },
    DDB: { L: "RPS", R: "NBT" },
    BKX: { L: "HPR", R: "CXD" },
    FKL: { L: "VPJ", R: "SQN" },
    VRH: { L: "BPN", R: "JXR" },
    QQR: { L: "KBH", R: "LRQ" },
    RSC: { L: "LQB", R: "TNG" },
    NRQ: { L: "DKD", R: "CHG" },
    RHL: { L: "NVQ", R: "NNR" },
    QCH: { L: "MGB", R: "QQS" },
    CTS: { L: "BFG", R: "HDC" },
    KHJ: { L: "NGN", R: "LJC" },
    RGK: { L: "MVL", R: "FHG" },
    CCH: { L: "LKP", R: "TFT" },
    VSL: { L: "FFH", R: "PRR" },
    KQR: { L: "RPT", R: "MGJ" },
    LCN: { L: "XTS", R: "DCF" },
    TJN: { L: "TMT", R: "SNH" },
    CLT: { L: "NBS", R: "VNP" },
    JCJ: { L: "QFS", R: "RSJ" },
    BPN: { L: "TJN", R: "CVC" },
    FXG: { L: "GLJ", R: "XBV" },
    BGQ: { L: "KQB", R: "BLP" },
    RMR: { L: "TVH", R: "JHB" },
    CTM: { L: "JLL", R: "VFC" },
    KCF: { L: "SLQ", R: "FLH" },
    DHF: { L: "XRN", R: "BXN" },
    NDJ: { L: "SSH", R: "FPQ" },
    KSX: { L: "XTS", R: "DCF" },
    RPT: { L: "DPL", R: "QHP" },
    QJV: { L: "TVB", R: "LDC" },
    TNG: { L: "BCT", R: "MMQ" },
    FBK: { L: "FVL", R: "QVS" },
    MBJ: { L: "XJQ", R: "VGG" },
    CHD: { L: "GJF", R: "BPC" },
    LSF: { L: "QHL", R: "XNP" },
    SHN: { L: "HQS", R: "XPV" },
    TQR: { L: "CDR", R: "QGG" },
    GRA: { L: "NNK", R: "VNG" },
    RNS: { L: "MBJ", R: "PHD" },
    VFC: { L: "GTJ", R: "CBN" },
    PPC: { L: "LFJ", R: "KHL" },
    DDT: { L: "STF", R: "HNK" },
    NSD: { L: "TCV", R: "DDV" },
    VMC: { L: "FDX", R: "RLK" },
    QXS: { L: "JPG", R: "BHR" },
    PDF: { L: "MBD", R: "RSB" },
    QRV: { L: "PCB", R: "JNV" },
    QVJ: { L: "KSX", R: "LCN" },
    QDL: { L: "GLH", R: "SPJ" },
    MDJ: { L: "GJJ", R: "NVX" },
    HJP: { L: "FVF", R: "RLX" },
    FRS: { L: "GLT", R: "CDQ" },
    SBM: { L: "FDD", R: "XNG" },
    SMG: { L: "CMQ", R: "MGX" },
    TQJ: { L: "NPH", R: "CQS" },
    RHQ: { L: "MJV", R: "XTG" },
    FFD: { L: "MSN", R: "FKN" },
    CSS: { L: "XQN", R: "NNC" },
    PVD: { L: "RQM", R: "JJX" },
    GBS: { L: "QRT", R: "CCK" },
    JHH: { L: "PNM", R: "GHL" },
    QHL: { L: "LLV", R: "KRH" },
  },
}
