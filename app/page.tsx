'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  CheckCircle, 
  Calendar, 
  DollarSign, 
  Layers, 
  Settings, 
  Users, 
  Upload, 
  Download, 
  RefreshCw, 
  Plus, 
  Trash2, 
  AlertTriangle, 
  Sparkles,
  Database,
  BarChart2,
  Sliders,
  FileSpreadsheet,
  Check,
  ChevronRight,
  Info
} from 'lucide-react';

// ── 类型定义 ──
interface SetupAssumptions {
  defaultWageRate: number;
  stdShiftHours: number;
  otMultiplier: number;
}

interface Product {
  productId: string;
  productName: string;
  processCategory: string;
  stdThroughput: number; // 包 / 小时
}

interface ProductionPlanItem {
  id: string;
  date: string;
  productId: string;
  planQuantity: number;
}

interface ActualProductionItem {
  id: string;
  date: string;
  productId: string;
  actualQuantity: number;
}

interface LaborInputItem {
  id: string;
  date: string;
  actualWorkers: number;
  actualPaidHours: number;
  actualTotalCost: number;
}

// ── 默认种子数据 (Seed Data) ──
const DEFAULT_ASSUMPTIONS: SetupAssumptions = {
  defaultWageRate: 25.0,
  stdShiftHours: 8.0,
  otMultiplier: 1.5,
};

const DEFAULT_PRODUCTS: Product[] = [
  { productId: 'PROD001', productName: 'Chicken Jerky Dehydrated', processCategory: 'Dehydrate', stdThroughput: 120 },
  { productId: 'PROD002', productName: 'Beef Heart Dehydrated', processCategory: 'Dehydrate', stdThroughput: 80 },
  { productId: 'PROD003', productName: 'Sweet Potato Jerky', processCategory: 'Dehydrate', stdThroughput: 150 },
  { productId: 'PROD004', productName: 'OEM Packaging', processCategory: 'Packaging', stdThroughput: 300 },
];

const DEFAULT_PLANS: ProductionPlanItem[] = [
  { id: 'p1', date: '2026-07-01', productId: 'PROD001', planQuantity: 4000 },
  { id: 'p2', date: '2026-07-01', productId: 'PROD002', planQuantity: 2000 },
  { id: 'p3', date: '2026-07-02', productId: 'PROD003', planQuantity: 6000 },
  { id: 'p4', date: '2026-07-03', productId: 'PROD004', planQuantity: 15000 },
  { id: 'p5', date: '2026-07-04', productId: 'PROD001', planQuantity: 3500 },
  { id: 'p6', date: '2026-07-05', productId: 'PROD002', planQuantity: 1800 },
  { id: 'p7', date: '2026-07-06', productId: 'PROD003', planQuantity: 5500 },
  { id: 'p8', date: '2026-07-07', productId: 'PROD004', planQuantity: 16000 },
];

const DEFAULT_ACTUALS: ActualProductionItem[] = [
  { id: 'a1', date: '2026-07-01', productId: 'PROD001', actualQuantity: 3800 },
  { id: 'a2', date: '2026-07-01', productId: 'PROD002', actualQuantity: 1900 },
  { id: 'a3', date: '2026-07-02', productId: 'PROD003', actualQuantity: 5800 },
  { id: 'a4', date: '2026-07-03', productId: 'PROD004', actualQuantity: 14800 },
  { id: 'a5', date: '2026-07-04', productId: 'PROD001', actualQuantity: 3600 },
  { id: 'a6', date: '2026-07-05', productId: 'PROD002', actualQuantity: 1750 },
  { id: 'a7', date: '2026-07-06', productId: 'PROD003', actualQuantity: 5600 },
  { id: 'a8', date: '2026-07-07', productId: 'PROD004', actualQuantity: 15500 },
];

const DEFAULT_LABOR: LaborInputItem[] = [
  { id: 'l1', date: '2026-07-01', actualWorkers: 7, actualPaidHours: 48.0, actualTotalCost: 1200.0 },
  { id: 'l2', date: '2026-07-02', actualWorkers: 7, actualPaidHours: 50.0, actualTotalCost: 1250.0 },
  { id: 'l3', date: '2026-07-03', actualWorkers: 6, actualPaidHours: 52.0, actualTotalCost: 1300.0 },
  { id: 'l4', date: '2026-07-04', actualWorkers: 7, actualPaidHours: 45.0, actualTotalCost: 1125.0 },
  { id: 'l5', date: '2026-07-05', actualWorkers: 5, actualPaidHours: 30.0, actualTotalCost: 750.0 },
  { id: 'l6', date: '2026-07-06', actualWorkers: 7, actualPaidHours: 48.0, actualTotalCost: 1200.0 },
  { id: 'l7', date: '2026-07-07', actualWorkers: 7, actualPaidHours: 54.0, actualTotalCost: 1350.0 },
];

export default function EngineApp() {
  // ── 挂载状态保护 ──
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'plan' | 'actuals' | 'labor' | 'scenario' | 'setup'>('dashboard');
  const [lastSaved, setLastSaved] = useState<string>('');

  // ── 核心应用状态 ──
  const [assumptions, setAssumptions] = useState<SetupAssumptions>(DEFAULT_ASSUMPTIONS);
  const [products, setProducts] = useState<Product[]>(DEFAULT_PRODUCTS);
  const [plans, setPlans] = useState<ProductionPlanItem[]>(DEFAULT_PLANS);
  const [actuals, setActuals] = useState<ActualProductionItem[]>(DEFAULT_ACTUALS);
  const [labors, setLabors] = useState<LaborInputItem[]>(DEFAULT_LABOR);

  // ── 弹出提示/状态 ──
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // ── 交互添加状态 ──
  const [newProduct, setNewProduct] = useState<Partial<Product>>({ productId: '', productName: '', processCategory: 'Dehydrate', stdThroughput: 100 });
  const [newPlan, setNewPlan] = useState<Partial<ProductionPlanItem>>({ date: '2026-07-08', productId: 'PROD001', planQuantity: 5000 });
  const [newActual, setNewActual] = useState<Partial<ActualProductionItem>>({ date: '2026-07-08', productId: 'PROD001', actualQuantity: 4800 });
  const [newLItem, setNewLItem] = useState<Partial<LaborInputItem>>({ date: '2026-07-08', actualWorkers: 7, actualPaidHours: 56, actualTotalCost: 1400 });

  // ── CSV 批量导入状态 ──
  const [csvTarget, setCsvTarget] = useState<'plan' | 'actual' | 'labor' | 'product'>('actual');
  const [csvContent, setCsvContent] = useState<string>('');

  // ── 模拟沙盘输入 ──
  const [simWeeklyTarget, setSimWeeklyTarget] = useState<{ [prodId: string]: number }>({
    PROD001: 12000,
    PROD002: 4500,
    PROD003: 15000,
    PROD004: 40000,
  });
  const [simWorkers, setSimWorkers] = useState<number>(7);
  const [simShiftHours, setSimShiftHours] = useState<number>(8.0);
  const [simUtilization, setSimUtilization] = useState<number>(80.0);
  const [simWageRate, setSimWageRate] = useState<number>(25.0);

  // ── 从 LocalStorage 初始化 ──
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const storedAssumptions = localStorage.getItem('assumptions');
        const storedProducts = localStorage.getItem('products');
        const storedPlans = localStorage.getItem('plans');
        const storedActuals = localStorage.getItem('actuals');
        const storedLabors = localStorage.getItem('labors');
        const storedSaved = localStorage.getItem('last_saved');

        if (storedAssumptions) {
          try {
            const parsed = JSON.parse(storedAssumptions);
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
              setAssumptions(parsed);
            }
          } catch (e) {
            console.error("Failed to parse stored assumptions", e);
          }
        }
        if (storedProducts) {
          try {
            const parsed = JSON.parse(storedProducts);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setProducts(parsed);
            }
          } catch (e) {
            console.error("Failed to parse stored products", e);
          }
        }
        if (storedPlans) {
          try {
            const parsed = JSON.parse(storedPlans);
            if (Array.isArray(parsed)) {
              setPlans(parsed);
            }
          } catch (e) {
            console.error("Failed to parse stored plans", e);
          }
        }
        if (storedActuals) {
          try {
            const parsed = JSON.parse(storedActuals);
            if (Array.isArray(parsed)) {
              setActuals(parsed);
            }
          } catch (e) {
            console.error("Failed to parse stored actuals", e);
          }
        }
        if (storedLabors) {
          try {
            const parsed = JSON.parse(storedLabors);
            if (Array.isArray(parsed)) {
              setLabors(parsed);
            }
          } catch (e) {
            console.error("Failed to parse stored labors", e);
          }
        }

        if (storedSaved) {
          setLastSaved(storedSaved);
        } else {
          const now = new Date().toLocaleString();
          localStorage.setItem('last_saved', now);
          setLastSaved(now);
        }
      } catch (e) {
        console.error("Failed to load state from localStorage:", e);
      }
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // ── 保存状态 ──
  const triggerSave = (
    newAss = assumptions,
    newProds = products,
    newPls = plans,
    newActs = actuals,
    newLbs = labors
  ) => {
    try {
      localStorage.setItem('assumptions', JSON.stringify(newAss));
      localStorage.setItem('products', JSON.stringify(newProds));
      localStorage.setItem('plans', JSON.stringify(newPls));
      localStorage.setItem('actuals', JSON.stringify(newActs));
      localStorage.setItem('labors', JSON.stringify(newLbs));
      const now = new Date().toLocaleString();
      localStorage.setItem('last_saved', now);
      setLastSaved(now);
    } catch (e) {
      console.error("Failed to save state to localStorage:", e);
    }
  };

  const updateSavedTime = () => {
    const now = new Date().toLocaleString();
    localStorage.setItem('last_saved', now);
    setLastSaved(now);
  };

  // ── Toast 消息辅助 ──
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // ── 核心计算函数 (Cost Allocation Engine & Dashboard Core) ──
  
  // 1. 标准工时单品系数: stdLaborHoursPerPack = 1 / stdThroughput
  const getProductStdHours = (productId: string): number => {
    const safeProducts = Array.isArray(products) ? products : DEFAULT_PRODUCTS;
    const product = safeProducts.find(p => p.productId === productId);
    if (!product || product.stdThroughput <= 0) return 0;
    return 1 / product.stdThroughput;
  };

  // 2. 将报工表结合分摊引擎进行整合计算
  const getAllocatedActuals = () => {
    const safeActuals = Array.isArray(actuals) ? actuals : DEFAULT_ACTUALS;
    const safeProducts = Array.isArray(products) ? products : DEFAULT_PRODUCTS;
    const safeLabors = Array.isArray(labors) ? labors : DEFAULT_LABOR;

    return safeActuals.map(act => {
      const prod = safeProducts.find(p => p.productId === act.productId);
      const stdHoursPerPack = getProductStdHours(act.productId);
      const stdLaborHours = act.actualQuantity * stdHoursPerPack;

      // 找到同日期所有实际报工，算当天总标准工时
      const dayActuals = safeActuals.filter(a => a.date === act.date);
      const dayTotalStdHours = dayActuals.reduce((sum, item) => {
        return sum + (item.actualQuantity * getProductStdHours(item.productId));
      }, 0);

      // 从 Labor Input 找到当天的实际时数和实际成本
      const laborRecord = safeLabors.find(l => l.date === act.date);
      const dayActualPaidHours = laborRecord ? laborRecord.actualPaidHours : 0;
      const dayActualTotalCost = laborRecord ? laborRecord.actualTotalCost : 0;

      // 效率/利用率
      const dayLaborUtilization = dayActualPaidHours > 0 ? (dayTotalStdHours / dayActualPaidHours) : 0;

      // 分摊标准：按标准工时比例同比例分摊当天实际工时与实际人工成本
      const ratio = dayTotalStdHours > 0 ? (stdLaborHours / dayTotalStdHours) : 0;
      const allocatedActualHours = ratio * dayActualPaidHours;
      const allocatedActualCost = ratio * dayActualTotalCost;
      const unitActualLaborCost = act.actualQuantity > 0 ? (allocatedActualCost / act.actualQuantity) : 0;

      return {
        ...act,
        productName: prod ? prod.productName : 'Unknown Product',
        processCategory: prod ? prod.processCategory : 'N/A',
        stdThroughput: prod ? prod.stdThroughput : 0,
        stdHoursPerPack,
        stdLaborHours,
        dayTotalStdHours,
        dayActualPaidHours,
        dayActualTotalCost,
        dayLaborUtilization,
        allocatedActualHours,
        allocatedActualCost,
        unitActualLaborCost
      };
    }).sort((a, b) => b.date.localeCompare(a.date));
  };

  // 3. 看板汇总计算 (YTD KPIs)
  const calcDashboardKPIs = () => {
    const allocatedList = getAllocatedActuals();
    const safeLabors = Array.isArray(labors) ? labors : DEFAULT_LABOR;
    const safeActuals = Array.isArray(actuals) ? actuals : DEFAULT_ACTUALS;
    const safePlans = Array.isArray(plans) ? plans : DEFAULT_PLANS;
    
    // 累计标准工时
    const totalStdHours = allocatedList.reduce((sum, item) => sum + item.stdLaborHours, 0);
    // 累计总实际付费工时
    const totalActualPaidHours = safeLabors.reduce((sum, item) => sum + item.actualPaidHours, 0);
    // 累计利用率 (YTD Labor Utilization %)
    const ytdUtilization = totalActualPaidHours > 0 ? (totalStdHours / totalActualPaidHours) : 0;

    // 累计总产量
    const totalQuantity = safeActuals.reduce((sum, item) => sum + item.actualQuantity, 0);
    // 累计分摊的实际总成本
    const totalAllocatedCost = allocatedList.reduce((sum, item) => sum + item.allocatedActualCost, 0);
    // 综合平均单包人工成本
    const avgLaborCostPerPack = totalQuantity > 0 ? (totalAllocatedCost / totalQuantity) : 0;

    // 累计计划产量
    const totalPlanQty = safePlans.reduce((sum, item) => sum + item.planQuantity, 0);
    // 生产计划达成率
    const planAttainment = totalPlanQty > 0 ? (totalQuantity / totalPlanQty) : 0;

    return {
      ytdUtilization,
      avgLaborCostPerPack,
      planAttainment,
      totalQuantity,
      totalActualPaidHours,
      totalAllocatedCost,
    };
  };

  // 4. 按产品分组的汇总
  const getProductProductivityMatrix = () => {
    const allocatedList = getAllocatedActuals();
    const safeProducts = Array.isArray(products) ? products : DEFAULT_PRODUCTS;
    return safeProducts.map(prod => {
      const prodAllocated = allocatedList.filter(item => item.productId === prod.productId);
      const totalActualQty = prodAllocated.reduce((sum, item) => sum + item.actualQuantity, 0);
      const totalStdHours = prodAllocated.reduce((sum, item) => sum + item.stdLaborHours, 0);
      const totalAllocatedCost = prodAllocated.reduce((sum, item) => sum + item.allocatedActualCost, 0);
      const avgUnitLaborCost = totalActualQty > 0 ? (totalAllocatedCost / totalActualQty) : 0;

      return {
        ...prod,
        totalActualQty,
        totalStdHours,
        totalAllocatedCost,
        avgUnitLaborCost
      };
    });
  };

  // 5. 按产品对比计划与实际 (Plan vs Actual Variance & Bottleneck Tracker)
  const getProductPlanVsActual = () => {
    const safeProducts = Array.isArray(products) ? products : DEFAULT_PRODUCTS;
    const safePlans = Array.isArray(plans) ? plans : DEFAULT_PLANS;
    const safeActuals = Array.isArray(actuals) ? actuals : DEFAULT_ACTUALS;

    return safeProducts.map(prod => {
      const totalPlan = safePlans
        .filter(p => p.productId === prod.productId)
        .reduce((sum, p) => sum + p.planQuantity, 0);
      const totalActual = safeActuals
        .filter(a => a.productId === prod.productId)
        .reduce((sum, a) => sum + a.actualQuantity, 0);
      const variance = totalActual - totalPlan;
      const attainment = totalPlan > 0 ? (totalActual / totalPlan) : 0;

      return {
        ...prod,
        totalPlan,
        totalActual,
        variance,
        attainment
      };
    });
  };

  // ── 系统备份、恢复、重置、批量导入 ──
  
  // 一键重置数据
  const handleResetData = () => {
    if (window.confirm("Are you sure you want to restore all tables to pre-configured sample data? All local modifications will be replaced.")) {
      setAssumptions(DEFAULT_ASSUMPTIONS);
      setProducts(DEFAULT_PRODUCTS);
      setPlans(DEFAULT_PLANS);
      setActuals(DEFAULT_ACTUALS);
      setLabors(DEFAULT_LABOR);
      triggerSave(DEFAULT_ASSUMPTIONS, DEFAULT_PRODUCTS, DEFAULT_PLANS, DEFAULT_ACTUALS, DEFAULT_LABOR);
      showToast("Data has been reset to original operational standards.", "success");
    }
  };

  // 导出 JSON 备份
  const handleExportBackup = () => {
    const backupObj = {
      backupDate: new Date().toISOString(),
      assumptions,
      products,
      plans,
      actuals,
      labors
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupObj, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Labor_Economics_Engine_Backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("System database backup successfully downloaded.", "success");
  };

  // 导入 JSON 备份
  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.assumptions && parsed.products && parsed.plans && parsed.actuals && parsed.labors) {
          setAssumptions(parsed.assumptions);
          setProducts(parsed.products);
          setPlans(parsed.plans);
          setActuals(parsed.actuals);
          setLabors(parsed.labors);
          triggerSave(parsed.assumptions, parsed.products, parsed.plans, parsed.actuals, parsed.labors);
          showToast("Backup successfully validated and imported.", "success");
        } else {
          showToast("Invalid backup structure. Required keys are missing.", "error");
        }
      } catch (err) {
        showToast("Failed to parse JSON file.", "error");
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  // CSV 批量解析与导入
  const handleCSVImport = () => {
    if (!csvContent.trim()) {
      showToast("Please paste CSV data first.", "error");
      return;
    }

    const lines = csvContent.trim().split('\n');
    let successCount = 0;
    let errorCount = 0;

    try {
      if (csvTarget === 'plan') {
        const parsedPlans: ProductionPlanItem[] = [];
        lines.forEach((line, index) => {
          // Ignore header
          if (index === 0 && line.toLowerCase().includes('date')) return;
          const parts = line.split(',').map(p => p.trim());
          if (parts.length >= 3) {
            const [date, productId, planQty] = parts;
            if (date && productId && !isNaN(Number(planQty))) {
              parsedPlans.push({
                id: 'csv_' + Date.now() + '_' + index,
                date,
                productId,
                planQuantity: Number(planQty)
              });
              successCount++;
            } else {
              errorCount++;
            }
          } else {
            errorCount++;
          }
        });
        const updated = [...plans, ...parsedPlans];
        setPlans(updated);
        triggerSave(assumptions, products, updated, actuals, labors);

      } else if (csvTarget === 'actual') {
        const parsedActuals: ActualProductionItem[] = [];
        lines.forEach((line, index) => {
          if (index === 0 && line.toLowerCase().includes('date')) return;
          const parts = line.split(',').map(p => p.trim());
          if (parts.length >= 3) {
            const [date, productId, actQty] = parts;
            if (date && productId && !isNaN(Number(actQty))) {
              parsedActuals.push({
                id: 'csv_' + Date.now() + '_' + index,
                date,
                productId,
                actualQuantity: Number(actQty)
              });
              successCount++;
            } else {
              errorCount++;
            }
          } else {
            errorCount++;
          }
        });
        const updated = [...actuals, ...parsedActuals];
        setActuals(updated);
        triggerSave(assumptions, products, plans, updated, labors);

      } else if (csvTarget === 'labor') {
        const parsedLabor: LaborInputItem[] = [];
        lines.forEach((line, index) => {
          if (index === 0 && line.toLowerCase().includes('date')) return;
          const parts = line.split(',').map(p => p.trim());
          if (parts.length >= 4) {
            const [date, workers, paidHours, cost] = parts;
            if (date && !isNaN(Number(workers)) && !isNaN(Number(paidHours)) && !isNaN(Number(cost))) {
              parsedLabor.push({
                id: 'csv_' + Date.now() + '_' + index,
                date,
                actualWorkers: Number(workers),
                actualPaidHours: Number(paidHours),
                actualTotalCost: Number(cost)
              });
              successCount++;
            } else {
              errorCount++;
            }
          } else {
            errorCount++;
          }
        });
        const updated = [...labors, ...parsedLabor];
        setLabors(updated);
        triggerSave(assumptions, products, plans, actuals, updated);

      } else if (csvTarget === 'product') {
        const parsedProds: Product[] = [];
        lines.forEach((line, index) => {
          if (index === 0 && line.toLowerCase().includes('id')) return;
          const parts = line.split(',').map(p => p.trim());
          if (parts.length >= 4) {
            const [id, name, cat, tp] = parts;
            if (id && name && cat && !isNaN(Number(tp))) {
              parsedProds.push({
                productId: id,
                productName: name,
                processCategory: cat,
                stdThroughput: Number(tp)
              });
              successCount++;
            } else {
              errorCount++;
            }
          } else {
            errorCount++;
          }
        });
        // 覆盖同名的，或新增
        const updated = [...products];
        parsedProds.forEach(p => {
          const idx = updated.findIndex(item => item.productId === p.productId);
          if (idx >= 0) {
            updated[idx] = p;
          } else {
            updated.push(p);
          }
        });
        setProducts(updated);
        triggerSave(assumptions, updated, plans, actuals, labors);
      }

      showToast(`Import completed. Imported: ${successCount} rows. Errors/Skipped: ${errorCount} rows.`, successCount > 0 ? 'success' : 'error');
      setCsvContent('');
    } catch (err) {
      showToast("CSV Parsing broke down. Make sure comma separation is pristine.", "error");
    }
  };

  // ── 增删改的处理器 (保证数据流实时重算与保存) ──
  
  const handleAddProduct = () => {
    if (!newProduct.productId || !newProduct.productName || !newProduct.stdThroughput) {
      showToast("Please fill in all product master fields.", "error");
      return;
    }
    if (products.some(p => p.productId === newProduct.productId)) {
      showToast("Product ID must be unique.", "error");
      return;
    }
    const updated = [...products, newProduct as Product];
    setProducts(updated);
    triggerSave(assumptions, updated, plans, actuals, labors);
    setNewProduct({ productId: '', productName: '', processCategory: 'Dehydrate', stdThroughput: 100 });
    showToast("New Product Master listed.", "success");
  };

  const handleDeleteProduct = (prodId: string) => {
    const updated = products.filter(p => p.productId !== prodId);
    setProducts(updated);
    triggerSave(assumptions, updated, plans, actuals, labors);
    showToast("Product Master item removed.", "info");
  };

  const handleAddPlan = () => {
    const updated = [...plans, {
      ...newPlan,
      id: 'plan_' + Date.now(),
      planQuantity: Number(newPlan.planQuantity)
    } as ProductionPlanItem];
    setPlans(updated);
    triggerSave(assumptions, products, updated, actuals, labors);
    showToast("Schedule logged.", "success");
  };

  const handleDeletePlan = (id: string) => {
    const updated = plans.filter(p => p.id !== id);
    setPlans(updated);
    triggerSave(assumptions, products, updated, actuals, labors);
    showToast("Schedule removed.", "info");
  };

  const handleAddActual = () => {
    const updated = [...actuals, {
      ...newActual,
      id: 'actual_' + Date.now(),
      actualQuantity: Number(newActual.actualQuantity)
    } as ActualProductionItem];
    setActuals(updated);
    triggerSave(assumptions, products, plans, updated, labors);
    showToast("Actual batch reporting received.", "success");
  };

  const handleDeleteActual = (id: string) => {
    const updated = actuals.filter(a => a.id !== id);
    setActuals(updated);
    triggerSave(assumptions, products, plans, updated, labors);
    showToast("Batch reporting removed.", "info");
  };

  const handleAddLabor = () => {
    // 验证当天是否已经有记录
    if (labors.some(l => l.date === newLItem.date)) {
      showToast("Labor logs for this date already exists. Edit below directly.", "error");
      return;
    }
    const updated = [...labors, {
      ...newLItem,
      id: 'labor_' + Date.now(),
      actualWorkers: Number(newLItem.actualWorkers),
      actualPaidHours: Number(newLItem.actualPaidHours),
      actualTotalCost: Number(newLItem.actualTotalCost)
    } as LaborInputItem];
    setLabors(updated);
    triggerSave(assumptions, products, plans, actuals, updated);
    showToast("Daily labor timesheet logged.", "success");
  };

  const handleDeleteLabor = (id: string) => {
    const updated = labors.filter(l => l.id !== id);
    setLabors(updated);
    triggerSave(assumptions, products, plans, actuals, updated);
    showToast("Timesheet log removed.", "info");
  };

  // ── 行编辑处理器 (淡黄底色输入即时保存) ──
  
  const handleUpdateProductCell = (prodId: string, field: keyof Product, value: any) => {
    const updated = products.map(p => {
      if (p.productId === prodId) {
        return { ...p, [field]: field === 'stdThroughput' ? Number(value) : value };
      }
      return p;
    });
    setProducts(updated);
    triggerSave(assumptions, updated, plans, actuals, labors);
  };

  const handleUpdatePlanCell = (planId: string, field: keyof ProductionPlanItem, value: any) => {
    const updated = plans.map(p => {
      if (p.id === planId) {
        return { ...p, [field]: field === 'planQuantity' ? Number(value) : value };
      }
      return p;
    });
    setPlans(updated);
    triggerSave(assumptions, products, updated, actuals, labors);
  };

  const handleUpdateActualCell = (actId: string, field: keyof ActualProductionItem, value: any) => {
    const updated = actuals.map(a => {
      if (a.id === actId) {
        return { ...a, [field]: field === 'actualQuantity' ? Number(value) : value };
      }
      return a;
    });
    setActuals(updated);
    triggerSave(assumptions, products, plans, updated, labors);
  };

  const handleUpdateLaborCell = (laborId: string, field: keyof LaborInputItem, value: any) => {
    const updated = labors.map(l => {
      if (l.id === laborId) {
        return { ...l, [field]: (field === 'actualWorkers' || field === 'actualPaidHours' || field === 'actualTotalCost') ? Number(value) : value };
      }
      return l;
    });
    setLabors(updated);
    triggerSave(assumptions, products, plans, actuals, updated);
  };

  // ── 未挂载时显示骨架屏，防止 Hydration Error ──
  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F2]">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw className="w-10 h-10 animate-spin text-[#2251FF]" />
          <p className="text-sm font-mono tracking-wider uppercase text-[#051C2C]/50">Initializing capacity planning database...</p>
        </div>
      </div>
    );
  }

  // 计算当前的看板KPI指标和产品成本矩阵
  const kpis = calcDashboardKPIs();
  const productMatrix = getProductProductivityMatrix();
  const allocatedActuals = getAllocatedActuals();
  const planVsActualMatrix = getProductPlanVsActual();

  // ── 模拟沙盘计算 (Scenario Calculation Flow) ──
  const weeklyTheoreticalHours = simWorkers * simShiftHours * 5;
  const weeklyEffectiveHours = weeklyTheoreticalHours * (simUtilization / 100);
  
  // 模拟所需标准总工时
  const simStdHoursRequired = Object.entries(simWeeklyTarget).reduce((sum, [prodId, qty]) => {
    return sum + (qty * getProductStdHours(prodId));
  }, 0);

  const capacityGap = weeklyEffectiveHours - simStdHoursRequired;
  const gapRate = weeklyEffectiveHours > 0 ? (capacityGap / weeklyEffectiveHours) * 100 : 0;
  const expectedWeeklyTotalCost = weeklyTheoreticalHours * simWageRate;
  const totalWeeklyQuantity = Object.values(simWeeklyTarget).reduce((sum, q) => sum + q, 0);
  const expectedUnitLaborCost = totalWeeklyQuantity > 0 ? (expectedWeeklyTotalCost / totalWeeklyQuantity) : 0;

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F2]">
      {/* ── §1 顶栏水平导航栏 (Frosted Sticky Header) ── */}
      <header className="sticky top-0 z-50 h-14 bg-white border-b border-black/10 flex items-center justify-between px-10 shadow-sm">
        {/* 左侧品牌标识 */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#051C2C] flex items-center justify-center text-white font-heading font-bold text-lg select-none">
            E
          </div>
          <div>
            <h1 className="font-heading font-bold text-[16px] tracking-tight text-[#051C2C] leading-none">
              Manufacturing Labor Cost & Capacity Planning Toolkit
            </h1>
            <p className="text-[9px] font-mono tracking-wider text-[#888888] uppercase mt-0.5">
              Pet Treat Manufacturing Suite
            </p>
          </div>
        </div>

        {/* 右侧主 Tab 切换与系统状态 */}
        <div className="flex items-center gap-8 h-full">
          <nav className="flex items-center h-full gap-6">
            {[
              { id: 'dashboard', label: 'Management Dashboard', icon: BarChart2 },
              { id: 'products', label: 'Product Master', icon: Layers },
              { id: 'plan', label: 'Production Plan', icon: FileSpreadsheet },
              { id: 'actuals', label: 'Actual & Allocation', icon: TrendingUp },
              { id: 'labor', label: 'Labor Timesheets', icon: Users },
              { id: 'scenario', label: 'Capacity Simulator', icon: Sliders },
              { id: 'setup', label: 'System Setup', icon: Settings },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative h-14 flex items-center gap-2 text-xs font-medium tracking-tight transition-colors duration-150 ${
                    isActive 
                      ? 'text-[#051C2C] font-semibold' 
                      : 'text-[#888888] hover:text-[#051C2C]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabUnderline" 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2251FF]" 
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 实时存储状态显示 */}
          <div className="hidden lg:flex items-center gap-2 border-l border-black/10 pl-4 h-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse"></span>
            <span className="text-[10px] font-mono text-[#888888]">
              Last saved: {lastSaved || 'Offline Mode'}
            </span>
          </div>
        </div>
      </header>

      {/* ── 主内容包裹区 ── */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-10 py-10">
        
        {/* 全局 Toast 通知 */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-16 right-10 z-[100] px-4 py-2.5 rounded-lg shadow-lg text-white text-xs font-body flex items-center gap-2.5 ${
                toast.type === 'success' ? 'bg-[#00C853]' : toast.type === 'error' ? 'bg-[#D32F2F]' : 'bg-[#2251FF]'
              }`}
            >
              {toast.type === 'error' ? (
                <AlertTriangle className="w-4 h-4 shrink-0" />
              ) : (
                <Check className="w-4 h-4 shrink-0" />
              )}
              <span className="font-medium">{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── 视图切换区域 (带 FadeUp 动效) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="w-full space-y-8"
          >
            
            {/* ─── TAB 1: MANAGEMENT DASHBOARD ─── */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* 区域标题 */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h2 className="font-heading text-[28px] tracking-tight font-bold text-[#051C2C] leading-none">
                      Management Dashboard
                    </h2>
                    <p className="text-xs font-body text-[#888888] mt-1">
                      High-level labor productivity, unit cost tracking, and execution attainment statistics.
                    </p>
                  </div>
                  
                  {/* 快速行为 */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handleExportBackup}
                      className="px-3 py-1.5 bg-white border border-[#E8E8E6] text-xs font-semibold text-[#051C2C] hover:bg-gray-50 hover:-translate-y-0.5 rounded-lg shadow-sm flex items-center gap-1.5 transition-all active:translate-y-0 active:scale-[0.98]"
                    >
                      <Download className="w-3.5 h-3.5 text-[#2251FF]" />
                      <span>Backup DB</span>
                    </button>
                    <button 
                      onClick={handleResetData}
                      className="px-3 py-1.5 bg-white border border-[#E8E8E6] text-xs font-semibold text-[#D32F2F] hover:bg-red-50 hover:-translate-y-0.5 rounded-lg shadow-sm flex items-center gap-1.5 transition-all active:translate-y-0 active:scale-[0.98]"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset Standard</span>
                    </button>
                  </div>
                </div>

                {/* KPI Card Grid (Bento Grid Style) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* KPI 1: YTD Labor Utilization % */}
                  <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 hover:-translate-y-0.5 transition-transform duration-200 flex flex-col justify-between h-36 relative overflow-hidden">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#051C2C]">
                        YTD Labor Utilization %
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#051C2C]/5 flex items-center justify-center text-[#051C2C]">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div>
                      <span className="font-heading text-[32px] font-bold tracking-[-0.03em] leading-none text-[#051C2C]">
                        {(kpis.ytdUtilization * 100).toFixed(1)}%
                      </span>
                      <p className="text-[10px] text-[#888888] mt-1 flex items-center gap-1">
                        <span>Benchmark standard target:</span>
                        <span className="font-semibold text-[#00C853]">80% - 90%</span>
                      </p>
                    </div>
                    {/* Background Progress Indicator */}
                    <div className="absolute bottom-0 left-0 h-1 bg-[#2251FF]" style={{ width: `${Math.min(100, kpis.ytdUtilization * 100)}%` }} />
                  </div>

                  {/* KPI 2: Average Labor Cost per Pack */}
                  <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 hover:-translate-y-0.5 transition-transform duration-200 flex flex-col justify-between h-36 relative overflow-hidden">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#051C2C]">
                        Weighted Labor Cost / Pack
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#2251FF]/5 flex items-center justify-center text-[#2251FF]">
                        <DollarSign className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div>
                      <span className="font-heading text-[32px] font-bold tracking-[-0.03em] leading-none text-[#2251FF]">
                        ${kpis.avgLaborCostPerPack.toFixed(2)}
                      </span>
                      <p className="text-[10px] text-[#888888] mt-1">
                        Aggregated from all allocation actuals
                      </p>
                    </div>
                  </div>

                  {/* KPI 3: Plan Attainment Rate % */}
                  <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 hover:-translate-y-0.5 transition-transform duration-200 flex flex-col justify-between h-36 relative overflow-hidden">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] font-semibold tracking-[0.06em] uppercase text-[#051C2C]">
                        Schedule Attainment Rate %
                      </span>
                      <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-[#00C853]">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div>
                      <span className="font-heading text-[32px] font-bold tracking-[-0.03em] leading-none text-[#051C2C]">
                        {(kpis.planAttainment * 100).toFixed(1)}%
                      </span>
                      <p className="text-[10px] text-[#888888] mt-1">
                        Actual output / schedule target quantity
                      </p>
                    </div>
                    {/* Background Progress Indicator */}
                    <div className="absolute bottom-0 left-0 h-1 bg-[#00C853]" style={{ width: `${Math.min(100, kpis.planAttainment * 100)}%` }} />
                  </div>
                </div>

                {/* Insight/说明块 (Bento Styled Left-Border Highlight Box) */}
                <div className="border-l-[3px] border-[#2251FF] bg-[#051C2C]/[0.04] p-5 rounded-r-lg text-[#051C2C] space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#2251FF]" />
                    <h4 className="font-heading text-base font-bold tracking-tight">
                      Operational Performance & Labor Economics Insight
                    </h4>
                  </div>
                  <div className="text-xs font-body leading-relaxed space-y-2 text-gray-700">
                    <p>
                      • <strong>Paid vs. Productive Labor Utilization:</strong> The current **Labor Utilization is {(kpis.ytdUtilization * 100).toFixed(1)}%**.
                      {kpis.ytdUtilization < 0.75 ? (
                        <span className="text-[#D32F2F] font-semibold"> Operational leakage detected. {(100 - (kpis.ytdUtilization * 100)).toFixed(1)}% of paid timesheet hours are currently lost as downtime or transition friction rather than productive manufacturing standard hours. Review line staffing and setup procedures.</span>
                      ) : kpis.ytdUtilization > 0.92 ? (
                        <span className="text-[#00C853] font-semibold"> Outstanding throughput efficiency! The paid-to-productive conversion matches close to 100% of standard engineering targets. Monitor for worker fatigue.</span>
                      ) : (
                        <span> Operational performance is running inside the optimal healthy boundary. Paid timesheet hours are converted efficiently into standard productive output.</span>
                      )}
                    </p>
                    <p>
                      • <strong>Strategic Surcharges & Pricing Priority:</strong> Among the processed batches, <strong>{productMatrix.sort((a,b) => b.avgUnitLaborCost - a.avgUnitLaborCost)[0]?.productName || 'N/A'}</strong> incurs the highest labor surcharge, averaging <strong>${(productMatrix.sort((a,b) => b.avgUnitLaborCost - a.avgUnitLaborCost)[0]?.avgUnitLaborCost || 0).toFixed(2)} / pack</strong>. Consider reviewing the retail price margin or prioritizing higher-throughput lines to scale down unit labor burdens.
                    </p>
                  </div>
                </div>

                {/* ─── NEW BENTO SECTION: STRATEGIC SOLUTION DEEP-DIVE ─── */}
                <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-6 space-y-6">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#051C2C] tracking-tight">
                      Strategic Traceability & Engine Capabilities
                    </h3>
                    <p className="text-xs font-body text-[#888888] mt-0.5">
                      This active web database provides complete real-time traceability solving the 6 critical operational objectives. No Excel modification is needed.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Capability 1 */}
                    <div className="p-4 bg-[#F5F5F2] border border-[#E8E8E6] rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#2251FF]/10 flex items-center justify-center text-[#2251FF] text-xs font-bold font-mono">1</div>
                        <h4 className="text-xs font-bold text-[#051C2C] tracking-tight">Real Labor Cost Allocation</h4>
                      </div>
                      <p className="text-[11px] text-gray-600 leading-normal">
                        Calculates individual product labor costs proportionally by mapping daily actual paid hours/costs to output volumes using standard engineering times, replacing crude averages.
                      </p>
                      <div className="text-[10px] font-mono text-[#2251FF] bg-[#2251FF]/5 px-2 py-1 rounded inline-block">
                        Status: Active (See YTD Cost Matrix)
                      </div>
                    </div>

                    {/* Capability 2 */}
                    <div className="p-4 bg-[#F5F5F2] border border-[#E8E8E6] rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#2251FF]/10 flex items-center justify-center text-[#2251FF] text-xs font-bold font-mono">2</div>
                        <h4 className="text-xs font-bold text-[#051C2C] tracking-tight">Paid vs. Productive Conversion</h4>
                      </div>
                      <p className="text-[11px] text-gray-600 leading-normal">
                        Directly converts timesheet paid hours into standard productive hours. Tracks efficiency leakage and uncovers paid hours lost during non-productive transitions.
                      </p>
                      <div className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-block">
                        Status: Active (See YTD Utilization)
                      </div>
                    </div>

                    {/* Capability 3 */}
                    <div className="p-4 bg-[#F5F5F2] border border-[#E8E8E6] rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#2251FF]/10 flex items-center justify-center text-[#2251FF] text-xs font-bold font-mono">3</div>
                        <h4 className="text-xs font-bold text-[#051C2C] tracking-tight">Plan vs. Actual Bottleneck Monitor</h4>
                      </div>
                      <p className="text-[11px] text-gray-600 leading-normal">
                        Aggregates weekly targets against real batch completions, calculating exact variances to identify lagging product lines before schedule disruptions compound.
                      </p>
                      <div className="text-[10px] font-mono text-amber-600 bg-amber-50 px-2 py-1 rounded inline-block">
                        Status: Active (See Monitor Below)
                      </div>
                    </div>

                    {/* Capability 4 */}
                    <div className="p-4 bg-[#F5F5F2] border border-[#E8E8E6] rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#2251FF]/10 flex items-center justify-center text-[#2251FF] text-xs font-bold font-mono">4</div>
                        <h4 className="text-xs font-bold text-[#051C2C] tracking-tight">Interactive Capacity Simulator</h4>
                      </div>
                      <p className="text-[11px] text-gray-600 leading-normal">
                        A real-time sandbox simulating wages, headcount, shift lengths, and throughput speeds. Identifies prospective capacity gaps and unit cost effects instantly.
                      </p>
                      <button 
                        onClick={() => setActiveTab('scenario')}
                        className="text-[10px] font-bold text-[#2251FF] hover:underline flex items-center gap-1"
                      >
                        Launch Sandbox Simulator <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Capability 5 */}
                    <div className="p-4 bg-[#F5F5F2] border border-[#E8E8E6] rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#2251FF]/10 flex items-center justify-center text-[#2251FF] text-xs font-bold font-mono">5</div>
                        <h4 className="text-xs font-bold text-[#051C2C] tracking-tight">Labor Consumption Prioritization</h4>
                      </div>
                      <p className="text-[11px] text-gray-600 leading-normal">
                        Identifies high-intensity labor sinks. Provides direct strategic advice regarding price increases or automation prioritization to optimize gross margin contributions.
                      </p>
                      <div className="text-[10px] font-mono text-[#2251FF] bg-[#2251FF]/5 px-2 py-1 rounded inline-block">
                        Status: Active (See Advisor Quadrant)
                      </div>
                    </div>

                    {/* Capability 6 */}
                    <div className="p-4 bg-[#F5F5F2] border border-[#E8E8E6] rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#2251FF]/10 flex items-center justify-center text-[#2251FF] text-xs font-bold font-mono">6</div>
                        <h4 className="text-xs font-bold text-[#051C2C] tracking-tight">Reusable Single-Point Database</h4>
                      </div>
                      <p className="text-[11px] text-gray-600 leading-normal">
                        Retains chronological historical records securely in local cache. Supports CSV importing and full JSON database backups, avoiding weekly Excel rebuilds.
                      </p>
                      <button 
                        onClick={() => setActiveTab('setup')}
                        className="text-[10px] font-bold text-[#2251FF] hover:underline flex items-center gap-1"
                      >
                        Manage Backup & Imports <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* ─── NEW BENTO SECTION: PLAN VS ACTUAL & CONSUMPTION MATRIX ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Bento: Plan vs Actual Bottleneck Monitor */}
                  <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading text-base font-bold text-[#051C2C] tracking-tight flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-[#2251FF]" />
                          Plan vs. Actual Bottleneck Tracker
                        </h3>
                        <p className="text-[10px] text-[#888888] font-body">
                          Comparing targeted production schedules against real physical yield.
                        </p>
                      </div>
                      <span className="text-[9px] bg-[#2251FF]/5 text-[#2251FF] font-mono font-bold uppercase px-2 py-1 rounded">
                        Active Scheduling
                      </span>
                    </div>

                    <div className="overflow-hidden border border-[#E8E8E6] rounded-lg">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-black/10 bg-gray-50/50 text-[10px] font-semibold text-[#051C2C]">
                            <th className="px-4 py-2">Product</th>
                            <th className="px-4 py-2 text-right">Target (Packs)</th>
                            <th className="px-4 py-2 text-right">Actual (Packs)</th>
                            <th className="px-4 py-2 text-right">Variance</th>
                            <th className="px-4 py-2 text-right">Attainment</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E8E8E6] text-[11px] font-body text-gray-700">
                          {planVsActualMatrix.map(item => {
                            const isUnderproduced = item.variance < 0;
                            return (
                              <tr key={item.productId} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-4 py-2.5 font-semibold text-[#051C2C]">
                                  <div>{item.productName}</div>
                                  <div className="text-[9px] font-mono font-medium text-gray-400">{item.productId}</div>
                                </td>
                                <td className="px-4 py-2.5 text-right font-mono">{item.totalPlan.toLocaleString()}</td>
                                <td className="px-4 py-2.5 text-right font-mono font-semibold">{item.totalActual.toLocaleString()}</td>
                                <td className={`px-4 py-2.5 text-right font-mono font-bold ${isUnderproduced ? 'text-[#D32F2F]' : 'text-[#00C853]'}`}>
                                  {isUnderproduced ? '' : '+'}{item.variance.toLocaleString()}
                                </td>
                                <td className="px-4 py-2.5 text-right font-mono">
                                  <div className="flex items-center justify-end gap-1.5">
                                    <span className="font-extrabold">{(item.attainment * 100).toFixed(0)}%</span>
                                    <span className={`w-1.5 h-1.5 rounded-full ${isUnderproduced ? 'bg-[#D32F2F] animate-pulse' : 'bg-[#00C853]'}`}></span>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Right Bento: Pricing & Labor Consumption Priority Advisor */}
                  <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading text-base font-bold text-[#051C2C] tracking-tight flex items-center gap-1.5">
                          <Sliders className="w-4 h-4 text-[#2251FF]" />
                          Labor Consumption & Pricing Priority Advisor
                        </h3>
                        <p className="text-[10px] text-[#888888] font-body">
                          Strategic matrix mapping unit labor cost profile to assist retail pricing.
                        </p>
                      </div>
                      <span className="text-[9px] bg-emerald-50 text-emerald-700 font-mono font-bold uppercase px-2 py-1 rounded">
                        Pricing Intel
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {/* Quadrant 1: High Labor Cost */}
                      <div className="p-3 border border-[#E8E8E6] bg-red-50/40 rounded-lg space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#D32F2F] uppercase tracking-wider">🔴 High Labor Sinks</span>
                          <span className="text-[8px] font-mono bg-red-50 text-red-700 px-1.5 py-0.5 rounded font-bold">Premium Pricing Needed</span>
                        </div>
                        <div className="space-y-1 font-mono text-[10px] text-[#051C2C]">
                          {productMatrix
                            .filter(p => p.avgUnitLaborCost >= 0.25)
                            .map(p => (
                              <div key={p.productId} className="flex justify-between border-b border-red-100/50 pb-0.5">
                                <span className="truncate max-w-[120px]">{p.productName}</span>
                                <span className="font-bold">${p.avgUnitLaborCost.toFixed(2)}/pk</span>
                              </div>
                            ))}
                          {productMatrix.filter(p => p.avgUnitLaborCost >= 0.25).length === 0 && (
                            <div className="text-gray-400 italic text-[9px]">No products in this quadrant.</div>
                          )}
                        </div>
                        <p className="text-[9px] text-gray-500 leading-normal">
                          Requires higher markup/selling price, or specialized automation to optimize standard throughput bottleneck.
                        </p>
                      </div>

                      {/* Quadrant 2: Medium Cost */}
                      <div className="p-3 border border-[#E8E8E6] bg-amber-50/40 rounded-lg space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">🟡 Moderate Labor</span>
                          <span className="text-[8px] font-mono bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded font-bold">Monitor Margins</span>
                        </div>
                        <div className="space-y-1 font-mono text-[10px] text-[#051C2C]">
                          {productMatrix
                            .filter(p => p.avgUnitLaborCost >= 0.12 && p.avgUnitLaborCost < 0.25)
                            .map(p => (
                              <div key={p.productId} className="flex justify-between border-b border-amber-100 pb-0.5">
                                <span className="truncate max-w-[120px]">{p.productName}</span>
                                <span className="font-bold">${p.avgUnitLaborCost.toFixed(2)}/pk</span>
                              </div>
                            ))}
                          {productMatrix.filter(p => p.avgUnitLaborCost >= 0.12 && p.avgUnitLaborCost < 0.25).length === 0 && (
                            <div className="text-gray-400 italic text-[9px]">No products in this quadrant.</div>
                          )}
                        </div>
                        <p className="text-[9px] text-gray-500 leading-normal">
                          Healthy margins expected with standard retail markup. Ensure workers maintain the throughput speed during shifts.
                        </p>
                      </div>

                      {/* Quadrant 3: Low Cost / Efficient */}
                      <div className="p-3 border border-[#E8E8E6] bg-emerald-50/30 rounded-lg space-y-1.5 col-span-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">🟢 Labor-Lean Champions</span>
                          <span className="text-[8px] font-mono bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Highly Scalable</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 font-mono text-[10px] text-[#051C2C]">
                          {productMatrix
                            .filter(p => p.avgUnitLaborCost < 0.12)
                            .map(p => (
                              <div key={p.productId} className="flex justify-between border-b border-emerald-100 pb-0.5">
                                <span className="truncate max-w-[150px]">{p.productName}</span>
                                <span className="font-bold text-emerald-700">${p.avgUnitLaborCost.toFixed(2)}/pk</span>
                              </div>
                            ))}
                          {productMatrix.filter(p => p.avgUnitLaborCost < 0.12).length === 0 && (
                            <div className="text-gray-400 italic text-[9px] col-span-2">No products in this quadrant.</div>
                          )}
                        </div>
                        <p className="text-[9px] text-gray-500 leading-normal mt-1">
                          These products have outstanding labor efficiency profiles. Ideal for high-volume wholesale promos, competitive white-label agreements, or serving as entry-level high-turnover loss leaders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ─── NEW BENTO SECTION: LIVE CAPACITY SIMULATOR SHORTCUT HUD ─── */}
                <div className="bg-[#051C2C] text-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] p-5 flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="space-y-1.5 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] bg-[#2251FF] text-white font-mono font-bold uppercase px-2 py-0.5 rounded">
                        Active Sandbox State
                      </span>
                      <h4 className="font-heading text-sm font-bold tracking-tight">
                        What-If Capacity Sandbox Simulator
                      </h4>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Test prospective schedules, labor wage rates, headcounts, and efficiency adjustments before committing the physical timesheet roster. Currently simulating <strong>{simWorkers} crew members</strong> at <strong>{simShiftHours}h shifts</strong>.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-l border-white/10 pl-5">
                    <div className="text-right">
                      <div className="text-[10px] text-gray-400 font-mono uppercase">Simulation Capacity Gap</div>
                      <div className={`text-lg font-heading font-bold font-mono ${capacityGap >= 0 ? 'text-[#00C853]' : 'text-[#FF3D00]'}`}>
                        {capacityGap >= 0 ? '+' : ''}{capacityGap.toFixed(1)} hr / wk
                      </div>
                      <div className="text-[9px] text-gray-400">
                        {capacityGap >= 0 ? 'Adequate capacity margins' : 'Deficit — overtime required'}
                      </div>
                    </div>
                    <button 
                      onClick={() => setActiveTab('scenario')}
                      className="px-4 py-2 bg-[#2251FF] hover:bg-white hover:text-[#051C2C] text-white text-xs font-bold rounded-lg transition-all shadow-sm active:scale-[0.98]"
                    >
                      Enter Scenario Sandbox
                    </button>
                  </div>
                </div>

                {/* 产品级劳动效率与成本矩阵 (Bento Card Table-Container) */}
                <div className="space-y-3 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-bold text-[#051C2C] tracking-tight">
                      Productivity & Actual Cost Matrix (YTD Cumulative)
                    </h3>
                    <span className="text-[10px] font-mono text-[#888888] uppercase tracking-wider font-semibold">
                      Updated in Real-time from cost allocation engine
                    </span>
                  </div>

                  <div className="overflow-hidden bg-white border border-[#E8E8E6] rounded-lg">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-black/10 bg-gray-50/50">
                          <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Product ID</th>
                          <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Product Name</th>
                          <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Category</th>
                          <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Total Actual Yield</th>
                          <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Standard Hours used</th>
                          <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Allocated Cost</th>
                          <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Actual Cost / Pack</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8E6] text-xs font-body text-gray-700">
                        {productMatrix.map(prod => (
                          <tr key={prod.productId} className="hover:bg-gray-50/50 transition-all duration-100">
                            <td className="px-6 py-3 font-mono font-bold text-[#051C2C]">{prod.productId}</td>
                            <td className="px-6 py-3 font-semibold text-[#051C2C]">{prod.productName}</td>
                            <td className="px-6 py-3">
                              <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#051C2C]/5 text-[#051C2C] border border-[#051C2C]/10">
                                {prod.processCategory}
                              </span>
                            </td>
                            <td className="px-6 py-3 text-right font-mono font-semibold">{prod.totalActualQty.toLocaleString()} packs</td>
                            <td className="px-6 py-3 text-right font-mono">{prod.totalStdHours.toFixed(2)} hr</td>
                            <td className="px-6 py-3 text-right font-mono font-semibold text-[#051C2C]">${prod.totalAllocatedCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                            <td className="px-6 py-3 text-right">
                              {/* 数值带 Inline 数据条 */}
                              <div className="flex items-center justify-end gap-3">
                                <span className="font-mono font-extrabold text-[#2251FF]">${prod.avgUnitLaborCost.toFixed(2)}</span>
                                <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden relative">
                                  <div 
                                    className="absolute h-full bg-[#2251FF] rounded-full transition-all duration-500"
                                    style={{ width: `${Math.min(100, (prod.avgUnitLaborCost / 0.5) * 100)}%` }} // Normalized against 0.50 max pack cost
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB 2: PRODUCT MASTER ─── */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-[28px] tracking-tight font-bold text-[#051C2C] leading-none">Product & Process Master</h2>
                  <p className="text-xs font-body text-[#888888] mt-1">
                    Manage standard manufacturing throughput speeds. Fields marked in <span className="px-1.5 py-0.5 bg-[#FFFDE7] border border-[#E8E8E6] text-[10px] rounded font-bold">yellow</span> can be edited in-line. Standard hours per pack calculates automatically.
                  </p>
                </div>

                {/* Inline 添加表单 (Bento Form Card) */}
                <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Product ID</label>
                    <input 
                      type="text" 
                      placeholder="e.g., PROD005"
                      value={newProduct.productId}
                      onChange={e => setNewProduct({...newProduct, productId: e.target.value.toUpperCase()})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Product Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Salmon Flakes Baking"
                      value={newProduct.productName}
                      onChange={e => setNewProduct({...newProduct, productName: e.target.value})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Process Category</label>
                    <select
                      value={newProduct.processCategory}
                      onChange={e => setNewProduct({...newProduct, processCategory: e.target.value})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    >
                      <option value="Dehydrate">Dehydrate</option>
                      <option value="Packaging">Packaging</option>
                      <option value="Baking">Baking</option>
                      <option value="Cooking">Cooking</option>
                      <option value="Preprocessing">Preprocessing</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Throughput (packs/hr)</label>
                    <input 
                      type="number" 
                      placeholder="e.g., 200"
                      value={newProduct.stdThroughput || ''}
                      onChange={e => setNewProduct({...newProduct, stdThroughput: Math.max(1, Number(e.target.value))})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="md:col-span-5 flex justify-end">
                    <button 
                      onClick={handleAddProduct}
                      className="px-4 py-2 bg-[#051C2C] hover:bg-[#2251FF] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Register Product Master</span>
                    </button>
                  </div>
                </div>

                {/* 数据表 (Bento Table Card) */}
                <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5">
                  <div className="overflow-hidden border border-[#E8E8E6] rounded-lg">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-black/10 bg-gray-50/50">
                          <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Product ID</th>
                          <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Product Name (Editable)</th>
                          <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Process Category (Editable)</th>
                          <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Nominal Speed Standard (Editable)</th>
                          <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Std Hours / Pack (Calculated)</th>
                          <th className="px-6 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8E6] text-xs font-body text-gray-700">
                        {products.map(p => (
                          <tr key={p.productId} className="hover:bg-gray-50/50 transition-all duration-100">
                            <td className="px-6 py-3 font-mono font-bold text-[#051C2C]">{p.productId}</td>
                            <td className="px-6 py-2">
                              <input 
                                type="text" 
                                value={p.productName} 
                                onChange={e => handleUpdateProductCell(p.productId, 'productName', e.target.value)}
                                className="px-2 py-1 bg-[#FFFDE7]/80 rounded text-xs w-full focus:bg-white text-[#051C2C] border border-[#E8E8E6] focus:outline-none"
                              />
                            </td>
                            <td className="px-6 py-2">
                              <select
                                value={p.processCategory}
                                onChange={e => handleUpdateProductCell(p.productId, 'processCategory', e.target.value)}
                                className="px-2 py-1 bg-[#FFFDE7]/80 rounded text-xs w-full focus:bg-white text-[#051C2C] border border-[#E8E8E6] focus:outline-none"
                              >
                                <option value="Dehydrate">Dehydrate</option>
                                <option value="Packaging">Packaging</option>
                                <option value="Baking">Baking</option>
                                <option value="Cooking">Cooking</option>
                                <option value="Preprocessing">Preprocessing</option>
                              </select>
                            </td>
                            <td className="px-6 py-2 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <input 
                                  type="number" 
                                  value={p.stdThroughput} 
                                  onChange={e => handleUpdateProductCell(p.productId, 'stdThroughput', e.target.value)}
                                  className="px-2 py-1 bg-[#FFFDE7]/80 rounded text-xs w-24 text-right focus:bg-white font-mono font-bold text-[#051C2C] border border-[#E8E8E6] focus:outline-none"
                                />
                                <span className="text-gray-400 font-semibold text-[10px]">pk/hr</span>
                              </div>
                            </td>
                            <td className="px-6 py-3 text-right font-mono font-bold text-[#2251FF]">
                              {(1 / p.stdThroughput).toFixed(4)} hr
                            </td>
                            <td className="px-6 py-3 text-center">
                              <button 
                                onClick={() => handleDeleteProduct(p.productId)}
                                className="p-1 hover:bg-red-50 hover:text-[#D32F2F] text-gray-400 rounded transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB 3: PRODUCTION PLAN ─── */}
            {activeTab === 'plan' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-[28px] tracking-tight font-bold text-[#051C2C] leading-none">Production Plan Scheduler</h2>
                  <p className="text-xs font-body text-[#888888] mt-1">
                    Manage upcoming production plan quantities. Product Name and Process Category are cross-referenced instantly.
                  </p>
                </div>

                {/* Scheduler Form (Bento Form Card) */}
                <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Scheduled Date</label>
                    <input 
                      type="date" 
                      value={newPlan.date}
                      onChange={e => setNewPlan({...newPlan, date: e.target.value})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Product Master ID</label>
                    <select
                      value={newPlan.productId}
                      onChange={e => setNewPlan({...newPlan, productId: e.target.value})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    >
                      {products.map(p => (
                        <option key={p.productId} value={p.productId}>{p.productId} - {p.productName}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Plan target (Packs)</label>
                    <input 
                      type="number" 
                      placeholder="e.g., 5000"
                      value={newPlan.planQuantity || ''}
                      onChange={e => setNewPlan({...newPlan, planQuantity: Math.max(1, Number(e.target.value))})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    />
                  </div>
                  <button 
                    onClick={handleAddPlan}
                    className="px-4 py-2 bg-[#051C2C] hover:bg-[#2251FF] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Schedule Row</span>
                  </button>
                </div>

                {/* Table list (Bento Table Card) */}
                <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5">
                  <div className="overflow-hidden border border-[#E8E8E6] rounded-lg">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-black/10 bg-gray-50/50">
                          <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Date (Editable)</th>
                          <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Product ID</th>
                          <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Product Name (XLOOKUP)</th>
                          <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Category</th>
                          <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Plan Target (Editable)</th>
                          <th className="px-6 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8E6] text-xs font-body text-gray-700">
                        {plans.sort((a,b) => b.date.localeCompare(a.date)).map(p => {
                          const matchedProd = products.find(prod => prod.productId === p.productId);
                          return (
                            <tr key={p.id} className="hover:bg-gray-50/50 transition-all duration-100">
                              <td className="px-6 py-2">
                                <input 
                                  type="date" 
                                  value={p.date} 
                                  onChange={e => handleUpdatePlanCell(p.id, 'date', e.target.value)}
                                  className="px-2 py-1 bg-[#FFFDE7]/80 rounded text-xs focus:bg-white text-[#051C2C] border border-[#E8E8E6] focus:outline-none font-mono"
                                />
                              </td>
                              <td className="px-6 py-3 font-mono text-gray-500 font-bold">{p.productId}</td>
                              <td className="px-6 py-3 font-semibold text-[#051C2C]">{matchedProd ? matchedProd.productName : 'Unknown Product'}</td>
                              <td className="px-6 py-3">
                                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#051C2C]/5 text-[#051C2C] border border-[#051C2C]/10">
                                  {matchedProd ? matchedProd.processCategory : 'N/A'}
                                </span>
                              </td>
                              <td className="px-6 py-2 text-right">
                                <input 
                                  type="number" 
                                  value={p.planQuantity} 
                                  onChange={e => handleUpdatePlanCell(p.id, 'planQuantity', e.target.value)}
                                  className="px-2 py-1 bg-[#FFFDE7]/80 rounded text-xs w-28 text-right focus:bg-white font-mono font-bold text-[#051C2C] border border-[#E8E8E6] focus:outline-none"
                                />
                              </td>
                              <td className="px-6 py-3 text-center">
                                <button 
                                  onClick={() => handleDeletePlan(p.id)}
                                  className="p-1 hover:bg-red-50 hover:text-[#D32F2F] text-gray-400 rounded transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB 4: ACTUAL & COST ALLOCATION ENGINE ─── */}
            {activeTab === 'actuals' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-[28px] tracking-tight font-bold text-[#051C2C] leading-none">
                    Actual Production & Cost Allocation Engine
                  </h2>
                  <p className="text-xs font-body text-[#888888] mt-1">
                    <strong>Soul Module:</strong> Automatically calculates standard hours, pulls daily timesheets, evaluates utilization, and performs pro-rata cost distribution down to the single pack actual cost.
                  </p>
                </div>

                {/* Reporting Batches Form (Bento Form Card) */}
                <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Reporting Date</label>
                    <input 
                      type="date" 
                      value={newActual.date}
                      onChange={e => setNewActual({...newActual, date: e.target.value})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Select Product</label>
                    <select
                      value={newActual.productId}
                      onChange={e => setNewActual({...newActual, productId: e.target.value})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    >
                      {products.map(p => (
                        <option key={p.productId} value={p.productId}>{p.productId} - {p.productName}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Actual Yield (Packs)</label>
                    <input 
                      type="number" 
                      placeholder="e.g., 4000"
                      value={newActual.actualQuantity || ''}
                      onChange={e => setNewActual({...newActual, actualQuantity: Math.max(1, Number(e.target.value))})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    />
                  </div>
                  <button 
                    onClick={handleAddActual}
                    className="px-4 py-2 bg-[#051C2C] hover:bg-[#2251FF] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Post Daily Batch</span>
                  </button>
                </div>

                {/* 核心分摊引擎一体化表格 (Bento Ledger Table Card) */}
                <div className="space-y-3 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-bold text-[#051C2C] tracking-tight">
                      Standard Costing & Pro-Rata Cost Allocation Ledger
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F]"></span>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase mr-3">Downtime Leakage Warning (&lt; 70% Util)</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00C853]"></span>
                      <span className="text-[10px] font-semibold text-gray-500 uppercase">Optimal Threshold (&ge; 80% Util)</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto border border-[#E8E8E6] rounded-lg">
                    <table className="w-full text-left border-collapse min-w-[1200px]">
                      <thead>
                        <tr className="border-b border-black/10 bg-gray-50/50">
                          <th className="px-4 py-3 text-[10px] font-semibold text-[#051C2C] uppercase tracking-[0.06em]">Date (Edit)</th>
                          <th className="px-4 py-3 text-[10px] font-semibold text-[#051C2C] uppercase tracking-[0.06em]">Product ID</th>
                          <th className="px-4 py-3 text-[10px] font-semibold text-[#051C2C] uppercase tracking-[0.06em]">Product Name</th>
                          <th className="px-4 py-3 text-right text-[10px] font-semibold text-[#051C2C] uppercase tracking-[0.06em]">Yield (Edit)</th>
                          <th className="px-4 py-3 text-right text-[10px] font-semibold text-[#051C2C] uppercase tracking-[0.06em]">Std Hours Required</th>
                          <th className="px-4 py-3 text-right text-[10px] font-semibold text-[#051C2C] uppercase tracking-[0.06em]">Total Std Hours</th>
                          <th className="px-4 py-3 text-right text-[10px] font-semibold text-[#051C2C] uppercase tracking-[0.06em]">Paid Hours (Timesheet)</th>
                          <th className="px-4 py-3 text-center text-[10px] font-semibold text-[#051C2C] uppercase tracking-[0.06em]">Labor Utilization</th>
                          <th className="px-4 py-3 text-right text-[10px] font-semibold text-[#051C2C] uppercase tracking-[0.06em]">Allocated Hours</th>
                          <th className="px-4 py-3 text-right text-[10px] font-semibold text-[#051C2C] uppercase tracking-[0.06em]">Allocated Cost</th>
                          <th className="px-4 py-3 text-right text-[10px] font-bold text-[#2251FF] uppercase tracking-[0.06em]">Unit Labor Cost</th>
                          <th className="px-4 py-3 text-center text-[10px] font-semibold text-[#051C2C] uppercase tracking-[0.06em]">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8E6] text-xs font-body text-gray-700">
                        {allocatedActuals.map(act => {
                          const isLowUtil = act.dayLaborUtilization > 0 && act.dayLaborUtilization < 0.70;
                          return (
                            <tr 
                              key={act.id} 
                              className={`transition-all duration-100 ${
                                isLowUtil 
                                  ? 'bg-[#D32F2F]/[0.02] hover:bg-[#D32F2F]/[0.05]' 
                                  : 'hover:bg-gray-50/50'
                              }`}
                            >
                              {/* Date Edit */}
                              <td className="px-4 py-1.5 font-mono">
                                <input 
                                  type="date" 
                                  value={act.date} 
                                  onChange={e => handleUpdateActualCell(act.id, 'date', e.target.value)}
                                  className="px-1.5 py-0.5 bg-[#FFFDE7]/80 rounded text-xs focus:bg-white text-[#051C2C] border border-[#E8E8E6] focus:outline-none"
                                />
                              </td>
                              <td className="px-4 py-3 font-mono font-bold text-gray-500">{act.productId}</td>
                              <td className="px-4 py-3 font-semibold text-[#051C2C]">{act.productName}</td>
                              
                              {/* Yield Edit */}
                              <td className="px-4 py-1.5 text-right">
                                <input 
                                  type="number" 
                                  value={act.actualQuantity} 
                                  onChange={e => handleUpdateActualCell(act.id, 'actualQuantity', e.target.value)}
                                  className="px-1.5 py-0.5 bg-[#FFFDE7]/80 rounded text-xs w-20 text-right focus:bg-white font-mono font-bold text-[#051C2C] border border-[#E8E8E6] focus:outline-none"
                                />
                              </td>

                              {/* Std Hours Required */}
                              <td className="px-4 py-3 text-right font-mono text-gray-500">
                                {act.stdLaborHours.toFixed(2)} hr
                              </td>

                              {/* Total Std Hours */}
                              <td className="px-4 py-3 text-right font-mono text-gray-500">
                                {act.dayTotalStdHours.toFixed(2)} hr
                              </td>

                              {/* Paid Hours (Timesheet) */}
                              <td className="px-4 py-3 text-right font-mono text-gray-500">
                                {act.dayActualPaidHours > 0 ? `${act.dayActualPaidHours.toFixed(1)} hr` : <span className="text-red-500 font-bold">Unlogged</span>}
                              </td>

                              {/* Labor Utilization Badge */}
                              <td className="px-4 py-3 text-center">
                                {act.dayLaborUtilization > 0 ? (
                                  <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-bold border uppercase ${
                                    isLowUtil 
                                      ? 'bg-red-50 text-[#D32F2F] border-red-100 animate-pulse' 
                                      : act.dayLaborUtilization >= 0.80 
                                      ? 'bg-emerald-50 text-[#00C853] border-emerald-100' 
                                      : 'bg-blue-50 text-[#2251FF] border-blue-100'
                                  }`}>
                                    {(act.dayLaborUtilization * 100).toFixed(1)}%
                                  </span>
                                ) : (
                                  <span className="text-red-500 font-mono text-[10px] font-bold">0%</span>
                                )}
                              </td>

                              {/* Allocated Hours */}
                              <td className="px-4 py-3 text-right font-mono text-gray-500">
                                {act.allocatedActualHours.toFixed(2)} hr
                              </td>

                              {/* Allocated Cost */}
                              <td className="px-4 py-3 text-right font-mono text-[#051C2C] font-semibold">
                                ${act.allocatedActualCost.toFixed(2)}
                              </td>

                              {/* Unit Labor Cost with Highlights */}
                              <td className="px-4 py-3 text-right font-mono font-black text-[#2251FF] bg-[#2251FF]/5 text-sm">
                                ${act.unitActualLaborCost.toFixed(3)}
                              </td>

                              {/* Action */}
                              <td className="px-4 py-3 text-center">
                                <button 
                                  onClick={() => handleDeleteActual(act.id)}
                                  className="p-1 hover:bg-red-50 hover:text-[#D32F2F] text-gray-400 rounded transition-colors"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB 5: LABOR INPUTS ─── */}
            {activeTab === 'labor' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-[28px] tracking-tight font-bold text-[#051C2C] leading-none">Labor Timesheets & Payroll Input</h2>
                  <p className="text-xs font-body text-[#888888] mt-1">
                    Log total paid workforce hours and payroll spend per calendar day. This forms the cost boundary distributed by the pro-rata allocation engine.
                  </p>
                </div>

                {/* Timesheet Add Form (Bento Form Card) */}
                <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Calendar Date</label>
                    <input 
                      type="date" 
                      value={newLItem.date}
                      onChange={e => setNewLItem({...newLItem, date: e.target.value})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Active Workers Count</label>
                    <input 
                      type="number" 
                      placeholder="e.g., 7"
                      value={newLItem.actualWorkers || ''}
                      onChange={e => setNewLItem({...newLItem, actualWorkers: Math.max(1, Number(e.target.value))})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Total Paid Hours (Sum)</label>
                    <input 
                      type="number" 
                      placeholder="e.g., 48"
                      value={newLItem.actualPaidHours || ''}
                      onChange={e => setNewLItem({...newLItem, actualPaidHours: Math.max(1, Number(e.target.value))})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-semibold tracking-wider text-[#051C2C] uppercase">Total Cost Logged ($)</label>
                    <input 
                      type="number" 
                      placeholder="e.g., 1200"
                      value={newLItem.actualTotalCost || ''}
                      onChange={e => setNewLItem({...newLItem, actualTotalCost: Math.max(1, Number(e.target.value))})}
                      className="w-full px-3 py-1.5 text-xs font-medium bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:bg-white text-[#051C2C] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="md:col-span-4 flex justify-end">
                    <button 
                      onClick={handleAddLabor}
                      className="px-4 py-2 bg-[#051C2C] hover:bg-[#2251FF] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Log Daily Timesheet</span>
                    </button>
                  </div>
                </div>

                {/* Table timesheet (Bento Table Card) */}
                <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5">
                  <div className="overflow-hidden border border-[#E8E8E6] rounded-lg">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-black/10 bg-gray-50/50">
                          <th className="px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Date (Editable)</th>
                          <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Active Workers (Editable)</th>
                          <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Total Paid Hours (Editable)</th>
                          <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Total Payroll ($) (Editable)</th>
                          <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Avg Hourly Rate (Formula)</th>
                          <th className="px-6 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.06em] text-[#051C2C]">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8E6] text-xs font-body text-gray-700">
                        {labors.sort((a,b) => b.date.localeCompare(a.date)).map(l => {
                          const avgRate = l.actualPaidHours > 0 ? (l.actualTotalCost / l.actualPaidHours) : assumptions.defaultWageRate;
                          return (
                            <tr key={l.id} className="hover:bg-gray-50/50 transition-all duration-100">
                              <td className="px-6 py-2">
                                <input 
                                  type="date" 
                                  value={l.date} 
                                  onChange={e => handleUpdateLaborCell(l.id, 'date', e.target.value)}
                                  className="px-2 py-1 bg-[#FFFDE7]/80 rounded text-xs focus:bg-white text-[#051C2C] border border-[#E8E8E6] focus:outline-none font-mono"
                                />
                              </td>
                              <td className="px-6 py-2 text-right">
                                <input 
                                  type="number" 
                                  value={l.actualWorkers} 
                                  onChange={e => handleUpdateLaborCell(l.id, 'actualWorkers', e.target.value)}
                                  className="px-2 py-1 bg-[#FFFDE7]/80 rounded text-xs w-20 text-right focus:bg-white font-mono text-[#051C2C] border border-[#E8E8E6] focus:outline-none"
                                />
                              </td>
                              <td className="px-6 py-2 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <input 
                                    type="number" 
                                    value={l.actualPaidHours} 
                                    onChange={e => handleUpdateLaborCell(l.id, 'actualPaidHours', e.target.value)}
                                    className="px-2 py-1 bg-[#FFFDE7]/80 rounded text-xs w-24 text-right focus:bg-white font-mono font-bold text-[#051C2C] border border-[#E8E8E6] focus:outline-none"
                                  />
                                  <span className="text-gray-400 font-semibold text-[10px]">hr</span>
                                </div>
                              </td>
                              <td className="px-6 py-2 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <span className="text-gray-400 font-mono font-bold text-xs">$</span>
                                  <input 
                                    type="number" 
                                    value={l.actualTotalCost} 
                                    onChange={e => handleUpdateLaborCell(l.id, 'actualTotalCost', e.target.value)}
                                    className="px-2 py-1 bg-[#FFFDE7]/80 rounded text-xs w-28 text-right focus:bg-white font-mono font-bold text-[#051C2C] border border-[#E8E8E6] focus:outline-none"
                                  />
                                </div>
                              </td>
                              <td className="px-6 py-3 text-right font-mono font-bold text-[#00C853]">
                                ${avgRate.toFixed(2)}/hr
                              </td>
                              <td className="px-6 py-3 text-center">
                                <button 
                                  onClick={() => handleDeleteLabor(l.id)}
                                  className="p-1 hover:bg-red-50 hover:text-[#D32F2F] text-gray-400 rounded transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB 6: CAPACITY SIMULATOR (WHAT-IF) ─── */}
            {activeTab === 'scenario' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-[28px] tracking-tight font-bold text-[#051C2C] leading-none">Capacity & Cost Decision Sandbox</h2>
                  <p className="text-xs font-body text-[#888888] mt-1">
                    Play with weekly dispatch target numbers, headcount assignments, and standard efficiency assumptions. See standard capacity gap and forecasted payroll economics instantly.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Controls Card (Bento Input Card) */}
                  <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 space-y-6 lg:col-span-1">
                    <h3 className="font-heading text-base font-bold text-[#051C2C] tracking-tight border-b border-[#E8E8E6] pb-3 flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-[#2251FF]" />
                      <span>Simulated Inputs</span>
                    </h3>

                    {/* Target Quantities Grid */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888]">Simulated Weekly Yield Targets (Packs)</span>
                      <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                        {products.map(p => (
                          <div key={p.productId} className="flex items-center justify-between gap-3 bg-gray-50/50 p-2 rounded-lg border border-gray-100">
                            <span className="text-xs font-semibold text-gray-700 truncate max-w-[150px]">{p.productName}</span>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <input 
                                type="number" 
                                value={simWeeklyTarget[p.productId] || 0}
                                onChange={e => setSimWeeklyTarget({
                                  ...simWeeklyTarget,
                                  [p.productId]: Math.max(0, Number(e.target.value))
                                })}
                                className="w-20 px-2 py-1 bg-[#FFFDE7] border border-[#E8E8E6] rounded text-right font-mono text-xs focus:bg-white font-bold text-[#051C2C] focus:outline-none"
                              />
                              <span className="text-[9px] font-bold text-gray-400">pk</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Operational Variables */}
                    <div className="space-y-4 pt-3 border-t border-[#E8E8E6]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] block">Workforce Configurations</span>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <label className="text-gray-600 font-medium">Simulated Attendance</label>
                          <span className="font-mono font-bold text-[#051C2C]">{simWorkers} workers</span>
                        </div>
                        <input 
                          type="range" 
                          min="1" 
                          max="15" 
                          value={simWorkers}
                          onChange={e => setSimWorkers(Number(e.target.value))}
                          className="w-full accent-[#2251FF]"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <label className="text-gray-600 font-medium">Daily Hours / Worker</label>
                          <span className="font-mono font-bold text-[#051C2C]">{simShiftHours.toFixed(1)} hr</span>
                        </div>
                        <input 
                          type="range" 
                          min="4" 
                          max="12" 
                          step="0.5"
                          value={simShiftHours}
                          onChange={e => setSimShiftHours(Number(e.target.value))}
                          className="w-full accent-[#2251FF]"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <label className="text-gray-600 font-medium">Simulated Utilization</label>
                          <span className="font-mono font-bold text-[#051C2C]">{simUtilization.toFixed(0)}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="50" 
                          max="100" 
                          value={simUtilization}
                          onChange={e => setSimUtilization(Number(e.target.value))}
                          className="w-full accent-[#2251FF]"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <label className="text-gray-600 font-medium">Base Wage Rate</label>
                          <span className="font-mono font-bold text-[#051C2C]">${simWageRate.toFixed(2)}/hr</span>
                        </div>
                        <input 
                          type="range" 
                          min="15" 
                          max="45" 
                          step="0.5"
                          value={simWageRate}
                          onChange={e => setSimWageRate(Number(e.target.value))}
                          className="w-full accent-[#2251FF]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Formula Matrix Sandbox (Bento Output Grid) */}
                  <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 lg:col-span-2 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="font-heading text-base font-bold text-[#051C2C] tracking-tight border-b border-[#E8E8E6] pb-3">
                        Capacity Gap & Payroll Projections
                      </h3>
                      
                      <div className="space-y-4 mt-6">
                        {/* A. Max available weekly hours */}
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="space-y-0.5">
                            <span className="text-xs font-semibold text-[#051C2C]">A. Theoretical Max Weekly Hours</span>
                            <p className="text-[10px] text-[#888888]">Count of Workers × Standard Shift Hours × 5 Operating Days</p>
                          </div>
                          <span className="font-mono font-bold text-[#051C2C] text-sm">{weeklyTheoreticalHours.toFixed(1)} hours</span>
                        </div>

                        {/* B. Effective weekly hours */}
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="space-y-0.5">
                            <span className="text-xs font-semibold text-[#051C2C]">B. Simulated Effective Hours</span>
                            <p className="text-[10px] text-[#888888]">Theoretical Max Hours × Simulated Labor Utilization Rate</p>
                          </div>
                          <span className="font-mono font-bold text-[#2251FF] text-sm">{weeklyEffectiveHours.toFixed(1)} hours</span>
                        </div>

                        {/* C. Target standard labor hours required */}
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="space-y-0.5">
                            <span className="text-xs font-semibold text-[#051C2C]">C. Simulated Standard Labor Requirement</span>
                            <p className="text-[10px] text-[#888888]">Target Quantity × Registered Standard Speed standard</p>
                          </div>
                          <span className="font-mono font-bold text-[#051C2C] text-sm">{simStdHoursRequired.toFixed(1)} hours</span>
                        </div>

                        {/* D. Capacity Gap */}
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="space-y-0.5">
                            <span className="text-xs font-semibold text-[#051C2C]">D. Workforce Capacity Surplus / Gap (Hours)</span>
                            <p className="text-[10px] text-[#888888]">Simulated Effective Hours (B) − Simulated Labor Requirement (C)</p>
                          </div>
                          <span className={`font-mono font-extrabold text-sm px-2.5 py-1 rounded-lg ${
                            capacityGap < 0 ? 'bg-red-50 text-[#D32F2F] border border-red-100' : 'bg-emerald-50 text-[#00C853] border border-emerald-100'
                          }`}>
                            {capacityGap >= 0 ? '+' : ''}{capacityGap.toFixed(1)} hours
                          </span>
                        </div>

                        {/* E. Gap Rate */}
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="space-y-0.5">
                            <span className="text-xs font-semibold text-[#051C2C]">E. Capacity Surplus / Deficit Ratio (%)</span>
                            <p className="text-[10px] text-[#888888]">Capacity Gap Hours / Simulated Effective Hours</p>
                          </div>
                          <span className={`font-mono font-bold text-sm ${
                            capacityGap < 0 ? 'text-[#D32F2F]' : 'text-[#00C853]'
                          }`}>
                            {capacityGap >= 0 ? '+' : ''}{gapRate.toFixed(1)}%
                          </span>
                        </div>

                        {/* F. Expected total labor cost */}
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="space-y-0.5">
                            <span className="text-xs font-semibold text-[#051C2C]">F. Forecasted Weekly Payroll Surcharge</span>
                            <p className="text-[10px] text-[#888888]">Theoretical Max Hours × Simulated Base Wage Rate</p>
                          </div>
                          <span className="font-mono font-bold text-[#051C2C] text-sm">${expectedWeeklyTotalCost.toFixed(2)}</span>
                        </div>

                        {/* G. Expected unit labor cost */}
                        <div className="flex items-center justify-between py-2">
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-[#2251FF]">G. Forecasted Actual Pack Unit Cost</span>
                            <p className="text-[10px] text-[#888888]">Forecasted Weekly Payroll / Total Quantity Targets</p>
                          </div>
                          <span className="font-mono font-black text-[#2251FF] text-xl bg-[#2251FF]/5 px-3 py-1 rounded-lg border border-[#2251FF]/15">${expectedUnitLaborCost.toFixed(3)} / pack</span>
                        </div>
                      </div>
                    </div>

                    {/* Result alert banner */}
                    {capacityGap < 0 ? (
                      <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-xs font-body text-[#D32F2F] flex gap-3 items-start mt-6">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-[#D32F2F]" />
                        <div>
                          <p className="font-bold uppercase tracking-wider text-[10px] mb-1">Capacity Deficit Warning</p>
                          <p className="leading-relaxed">
                            Simulated production schedules require <strong className="font-semibold">{simStdHoursRequired.toFixed(1)} standard hours</strong>, while effective labor only supplies <strong className="font-semibold">{weeklyEffectiveHours.toFixed(1)} hours</strong>. This creates a shortfall of <strong className="font-semibold">{Math.abs(capacityGap).toFixed(1)} standard hours ({Math.abs(gapRate).toFixed(1)}%)</strong>. Consider raising active headcount to {Math.ceil(simStdHoursRequired / (simShiftHours * 5 * (simUtilization/100)))} workers or optimizing timesheet utilization.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-xs font-body text-[#00C853] flex gap-3 items-start mt-6">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#00C853]" />
                        <div>
                          <p className="font-bold uppercase tracking-wider text-[10px] mb-1">Capacity Surplus Verified</p>
                          <p className="leading-relaxed">
                            Your labor capacity is optimal. Effective labor hours (<strong className="font-semibold">{weeklyEffectiveHours.toFixed(1)} hrs</strong>) exceed simulation standards requirements (<strong className="font-semibold">{simStdHoursRequired.toFixed(1)} hrs</strong>) with a comfortable safety cushion of <strong className="font-semibold">{capacityGap.toFixed(1)} surplus hours</strong>.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB 7: SYSTEM SETUP ─── */}
            {activeTab === 'setup' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-[28px] tracking-tight font-bold text-[#051C2C] leading-none">System Assumptions & Data Integration</h2>
                  <p className="text-xs font-body text-[#888888] mt-1">
                    Configure default wage values, manage CSV spreadsheet ingestion, or download/restore offline database snapshots.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column: Global Parameters & Backup Management */}
                  <div className="space-y-6">
                    {/* Assumptions Card */}
                    <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 space-y-4">
                      <h3 className="font-heading text-base font-bold text-[#051C2C] tracking-tight border-b border-[#E8E8E6] pb-3 flex items-center gap-2">
                        <Settings className="w-4 h-4 text-[#2251FF]" />
                        <span>Setup Global Assumptions</span>
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold tracking-wider text-[#051C2C] uppercase">Default Hourly Wage</label>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs text-gray-400 font-semibold">$</span>
                            <input 
                              type="number" 
                              value={assumptions.defaultWageRate}
                              onChange={e => {
                                const val = Number(e.target.value);
                                setAssumptions({...assumptions, defaultWageRate: val});
                                triggerSave({...assumptions, defaultWageRate: val});
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#FFFDE7] border border-[#E8E8E6] rounded-md text-xs font-mono font-bold text-[#051C2C] focus:outline-none focus:bg-white"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold tracking-wider text-[#051C2C] uppercase">Standard Shift Hour</label>
                          <div className="flex items-center gap-1.5">
                            <input 
                              type="number" 
                              value={assumptions.stdShiftHours}
                              onChange={e => {
                                const val = Number(e.target.value);
                                setAssumptions({...assumptions, stdShiftHours: val});
                                triggerSave({...assumptions, stdShiftHours: val});
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#FFFDE7] border border-[#E8E8E6] rounded-md text-xs font-mono font-bold text-[#051C2C] focus:outline-none focus:bg-white"
                            />
                            <span className="text-xs text-gray-400 font-semibold">hr</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold tracking-wider text-[#051C2C] uppercase">Overtime Multiplier</label>
                          <div className="flex items-center gap-1.5">
                            <input 
                              type="number" 
                              value={assumptions.otMultiplier}
                              step="0.1"
                              onChange={e => {
                                const val = Number(e.target.value);
                                setAssumptions({...assumptions, otMultiplier: val});
                                triggerSave({...assumptions, otMultiplier: val});
                              }}
                              className="w-full px-2.5 py-1.5 bg-[#FFFDE7] border border-[#E8E8E6] rounded-md text-xs font-mono font-bold text-[#051C2C] focus:outline-none focus:bg-white"
                            />
                            <span className="text-xs text-gray-400 font-semibold">x</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Offline Database Backup Management */}
                    <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 space-y-4">
                      <h3 className="font-heading text-base font-bold text-[#051C2C] tracking-tight border-b border-[#E8E8E6] pb-3 flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#2251FF]" />
                        <span>Database Snapshots</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50/50 rounded-xl flex flex-col justify-between h-28 border border-gray-100">
                          <div className="space-y-1">
                            <h4 className="text-xs font-semibold text-[#051C2C]">Export Database Backup</h4>
                            <p className="text-[10px] text-gray-500 leading-normal">Download complete operational logs as a standard portable JSON file.</p>
                          </div>
                          <button 
                            onClick={handleExportBackup}
                            className="w-full py-1.5 bg-[#051C2C] hover:bg-[#2251FF] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Export JSON Backup</span>
                          </button>
                        </div>

                        <div className="p-4 bg-gray-50/50 rounded-xl flex flex-col justify-between h-28 border border-gray-100 relative">
                          <div className="space-y-1">
                            <h4 className="text-xs font-semibold text-[#051C2C]">Import Database Backup</h4>
                            <p className="text-[10px] text-gray-500 leading-normal">Select and upload a previously exported standard JSON file.</p>
                          </div>
                          <label className="w-full py-1.5 bg-white border border-[#E8E8E6] text-[#051C2C] hover:bg-gray-100 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer text-center active:scale-[0.98]">
                            <Upload className="w-3.5 h-3.5 text-[#2251FF]" />
                            <span>Upload Backup file</span>
                            <input 
                              type="file" 
                              accept=".json"
                              onChange={handleImportBackup}
                              className="hidden" 
                            />
                          </label>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button 
                          onClick={handleResetData}
                          className="w-full py-2 border border-red-200 text-[#D32F2F] hover:bg-red-50 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Wipe All Local Settings & Restore Factory Demo Seed</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Bulk CSV Spreadsheet Ingestion */}
                  <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/5 p-5 space-y-4 lg:col-span-1">
                    <h3 className="font-heading text-base font-bold text-[#051C2C] tracking-tight border-b border-[#E8E8E6] pb-3 flex items-center gap-2">
                      <Upload className="w-4 h-4 text-[#2251FF]" />
                      <span>Bulk CSV Spreadsheet Ingestion</span>
                    </h3>

                    <div className="space-y-4">
                      {/* Target Select */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold tracking-wider text-[#051C2C] uppercase block">Select Target Table</label>
                        <select 
                          value={csvTarget}
                          onChange={e => setCsvTarget(e.target.value as any)}
                          className="w-full px-3 py-2 text-xs font-body bg-[#FFFDE7] border border-[#E8E8E6] rounded-lg focus:outline-none focus:bg-white text-gray-700 font-semibold"
                        >
                          <option value="actual">Actual Production Batches (T_Actual)</option>
                          <option value="plan">Production Target Plan (T_Plan)</option>
                          <option value="labor">Labor Timesheets Input (T_Labor)</option>
                          <option value="product">Product Master Speeds (T_Products)</option>
                        </select>
                      </div>

                      {/* Header Format Hints */}
                      <div className="p-3 bg-gray-50/50 border border-gray-100 rounded-xl text-[11px] font-mono text-gray-600 space-y-1">
                        <span className="font-bold text-[#051C2C] block uppercase text-[9px] tracking-wider mb-1">Required CSV Columns:</span>
                        {csvTarget === 'actual' && (
                          <>
                            <p>Header: Date, ProductID, ActualQuantity</p>
                            <p className="text-gray-400">Example: 2026-07-08, PROD001, 5200</p>
                          </>
                        )}
                        {csvTarget === 'plan' && (
                          <>
                            <p>Header: Date, ProductID, PlanQuantity</p>
                            <p className="text-gray-400">Example: 2026-07-08, PROD001, 5500</p>
                          </>
                        )}
                        {csvTarget === 'labor' && (
                          <>
                            <p>Header: Date, Workers, PaidHours, TotalCost</p>
                            <p className="text-gray-400">Example: 2026-07-08, 7, 56.0, 1400.00</p>
                          </>
                        )}
                        {csvTarget === 'product' && (
                          <>
                            <p>Header: ProductID, ProductName, Category, Throughput</p>
                            <p className="text-gray-400">Example: PROD005, Duck Bites, Dehydrate, 110</p>
                          </>
                        )}
                      </div>

                      {/* Paste Area */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold tracking-wider text-[#051C2C] uppercase block">Paste CSV Contents</label>
                        <textarea 
                          rows={6}
                          placeholder="Date, ProductID, Quantity&#10;2026-07-08, PROD001, 4800&#10;2026-07-08, PROD002, 2200"
                          value={csvContent}
                          onChange={e => setCsvContent(e.target.value)}
                          className="w-full p-2.5 text-xs font-mono bg-white border border-[#E8E8E6] rounded-lg focus:outline-none focus:border-gray-300"
                        />
                      </div>

                      <button 
                        onClick={handleCSVImport}
                        className="w-full py-2 bg-[#2251FF] hover:bg-[#051C2C] text-white text-xs font-body font-semibold rounded-lg shadow transition-all active:scale-[0.99] flex items-center justify-center gap-1.5"
                      >
                        <Upload className="w-4 h-4" />
                        <span>Run Bulk Parsing & Import</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

      </main>

      {/* ── Footer ── */}
      <footer className="py-6 border-t border-[#E8E8E6] bg-white text-center mt-auto">
        <p className="text-[11px] font-mono text-[#888888] uppercase tracking-wider">
          Labor Economics & Capacity Planning Engine © 2026 • Designed for High-throughput Food Manufacturing Operations
        </p>
      </footer>
    </div>
  );
}
