import React, { useState } from 'react';
import { AlertCircle, TrendingUp, TrendingDown, CheckCircle, XCircle, DollarSign, BarChart3, Target, Zap, FileText, Upload, ArrowRight, ArrowLeft, Lightbulb, Shield, Clock } from 'lucide-react';

export default function AINavigationCopilot() {
  const [currentStep, setCurrentStep] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [selectedClause, setSelectedClause] = useState(null);

  // Mock contract data
  const contractData = {
    supplier: "Global Tech Supplies Inc.",
    contractType: "Software License Agreement",
    value: "$500,000",
    term: "3 years",
    uploadedFile: "Software_License_Agreement_GlobalTech.pdf"
  };

  // Supplier Intelligence Profile
  const supplierIntel = {
    companyName: "Global Tech Supplies Inc.",
    founded: "2012",
    headquarters: "San Francisco, CA",
    employeeCount: "850-1000",
    annualRevenue: "$125M",
    financialHealth: {
      score: 72,
      rating: "Good",
      trend: "stable",
      cashReserves: "Strong",
      debtRatio: "Low"
    },
    negotiationHistory: {
      totalContracts: 12,
      avgDiscount: "8.3%",
      avgNegotiationTime: "18 days",
      successRate: "91%",
      lastContract: "8 months ago"
    },
    concessionPattern: {
      style: "Aggressive Start → Collaborative",
      timeline: "Typically softens after 2nd meeting",
      priceFlexibility: "Moderate-High",
      termsFlexibility: "High",
      sweetSpot: "5-7% pricing adjustment + longer term"
    },
    keyContacts: [
      {
        name: "Sarah Chen",
        title: "VP of Sales",
        style: "Data-driven, collaborative",
        responseTime: "Fast (< 24hrs)",
        decisionPower: "High",
        tips: "Responds well to market benchmarks and case studies"
      },
      {
        name: "Michael Rodriguez",
        title: "Sales Director",
        style: "Relationship-focused",
        responseTime: "Medium (1-2 days)",
        decisionPower: "Medium",
        tips: "Emphasize long-term partnership value"
      }
    ],
    competitiveLandscape: {
      marketPosition: "Mid-tier player",
      competitors: ["TechVendor Pro", "DataSupply Corp", "CloudSystems Inc"],
      competitorCount: 4,
      yourLeverage: "High",
      marketTrend: "Increasing competition"
    },
    recentActivity: [
      {
        type: "positive",
        event: "Secured $20M Series B funding",
        date: "2 months ago",
        impact: "Less price pressure - financially stable"
      },
      {
        type: "neutral",
        event: "Launched new product line",
        date: "4 months ago",
        impact: "May offer bundle deals"
      },
      {
        type: "concern",
        event: "Lost major client (Fortune 100)",
        date: "6 months ago",
        impact: "Motivated to retain customers"
      }
    ],
    industryInsights: {
      marketGrowth: "+12% YoY",
      pricingTrend: "Stable to slightly decreasing",
      demandLevel: "High",
      seasonality: "Q4 deals offer best terms"
    },
    aiRecommendation: {
      approach: "Balanced - Firm but Fair",
      leverage: "HIGH",
      urgency: "Medium (they want the deal but not desperate)",
      keyTactic: "Lead with competitive intelligence, emphasize long-term value",
      avoidance: "Don't rush - they value relationship over quick wins"
    }
  };

  // Risk analysis data
  const risks = [
    {
      id: 1,
      clause: "Payment Terms",
      severity: "high",
      issue: "Net 15 payment terms",
      marketStandard: "Net 30-45",
      impact: "$42,000 cash flow impact",
      recommendation: "Negotiate to Net 30",
      likelihood: "85% acceptance rate",
      priority: 1
    },
    {
      id: 2,
      clause: "Auto-Renewal",
      severity: "critical",
      issue: "Automatic 20% annual price increase",
      marketStandard: "3-5% annual increase",
      impact: "$180,000 over 3 years",
      recommendation: "Cap at 5% or CPI",
      likelihood: "70% acceptance rate",
      priority: 1
    },
    {
      id: 3,
      clause: "Liability Cap",
      severity: "medium",
      issue: "Limited to 1x annual fees",
      marketStandard: "2-3x annual fees",
      impact: "Risk exposure: $500,000",
      recommendation: "Increase to 2x annual fees",
      likelihood: "60% acceptance rate",
      priority: 2
    },
    {
      id: 4,
      clause: "Termination Clause",
      severity: "low",
      issue: "90-day notice required",
      marketStandard: "60-90 days",
      impact: "Minimal - within range",
      recommendation: "Accept as-is",
      likelihood: "N/A",
      priority: 3
    }
  ];

  // Strategic recommendations
  const strategy = {
    totalSavings: "$222,000",
    negotiationScore: 78,
    timeline: "2-3 weeks",
    keyPriorities: [
      { item: "Auto-renewal pricing", priority: "CRITICAL", action: "Push hard - non-negotiable" },
      { item: "Payment terms", priority: "HIGH", action: "Strong position - industry standard" },
      { item: "Liability cap", priority: "MEDIUM", action: "Negotiate if possible" },
      { item: "Termination notice", priority: "LOW", action: "Accept current terms" }
    ],
    tactics: [
      "Lead with industry benchmarks on pricing escalation",
      "Bundle payment terms with volume commitments",
      "Reference competitor offerings for liability terms",
      "Show data from 47 similar negotiations"
    ]
  };

  const steps = [
    "Upload Contract",
    "Supplier Intel",
    "AI Analysis",
    "Risk Assessment",
    "Strategy",
    "Negotiation Guide",
    "Summary"
  ];

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setCurrentStep(1); // Go to Supplier Intel
    }, 3000);
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-start">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center" style={{ minWidth: '100px' }}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                index <= currentStep 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {index < currentStep ? <CheckCircle size={20} /> : index + 1}
              </div>
              <div className={`text-xs mt-2 font-medium text-center ${
                index <= currentStep ? 'text-blue-600' : 'text-gray-500'
              }`}>
                {step}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 flex items-center" style={{ marginTop: '20px', minWidth: '40px' }}>
                <div className={`h-1 w-full ${
                  index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderUploadStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Negotiation Copilot</h2>
        <p className="text-gray-600 text-lg">Powered by Sirion Intelligence</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
        <div className="text-center mb-6">
          <Upload className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Supplier Contract</h3>
          <p className="text-gray-600">Our AI will analyze terms, identify risks, and provide strategic negotiation guidance</p>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-dashed border-blue-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <FileText className="text-blue-600" size={40} />
              <div>
                <div className="font-semibold text-gray-900">{contractData.uploadedFile}</div>
                <div className="text-sm text-gray-500">24 pages • Software License</div>
              </div>
            </div>
            <CheckCircle className="text-green-600" size={24} />
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-500">Supplier</div>
              <div className="font-semibold">{contractData.supplier}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-500">Contract Value</div>
              <div className="font-semibold">{contractData.value}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-500">Type</div>
              <div className="font-semibold">{contractData.contractType}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-500">Term</div>
              <div className="font-semibold">{contractData.term}</div>
            </div>
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={analyzing}
          className="w-full mt-6 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          {analyzing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>AI Analyzing Contract...</span>
            </>
          ) : (
            <>
              <Zap size={20} />
              <span>Start AI Analysis</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-blue-50 p-4 rounded-lg">
          <Shield className="mx-auto mb-2 text-blue-600" size={24} />
          <div className="font-semibold text-sm">Risk Detection</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <BarChart3 className="mx-auto mb-2 text-blue-600" size={24} />
          <div className="font-semibold text-sm">Market Benchmarks</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <Target className="mx-auto mb-2 text-blue-600" size={24} />
          <div className="font-semibold text-sm">Strategy AI</div>
        </div>
      </div>
    </div>
  );

  const renderSupplierIntel = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Supplier Intelligence Profile</h2>
        <p className="text-purple-100">AI-powered insights about {supplierIntel.companyName}</p>
      </div>

      {/* Quick Stats Overview */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border-2 border-green-200">
          <div className="text-sm text-gray-600 mb-1">Financial Health</div>
          <div className="text-3xl font-bold text-green-600">{supplierIntel.financialHealth.score}</div>
          <div className="text-xs text-gray-500 mt-1">{supplierIntel.financialHealth.rating}</div>
        </div>
        <div className="bg-white p-4 rounded-xl border-2 border-blue-200">
          <div className="text-sm text-gray-600 mb-1">Past Contracts</div>
          <div className="text-3xl font-bold text-blue-600">{supplierIntel.negotiationHistory.totalContracts}</div>
          <div className="text-xs text-gray-500 mt-1">91% success rate</div>
        </div>
        <div className="bg-white p-4 rounded-xl border-2 border-orange-200">
          <div className="text-sm text-gray-600 mb-1">Avg Discount</div>
          <div className="text-3xl font-bold text-orange-600">{supplierIntel.negotiationHistory.avgDiscount}</div>
          <div className="text-xs text-gray-500 mt-1">Historically given</div>
        </div>
        <div className="bg-white p-4 rounded-xl border-2 border-purple-200">
          <div className="text-sm text-gray-600 mb-1">Your Leverage</div>
          <div className="text-3xl font-bold text-purple-600">{supplierIntel.competitiveLandscape.yourLeverage}</div>
          <div className="text-xs text-gray-500 mt-1">{supplierIntel.competitiveLandscape.competitorCount} alternatives</div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Shield className="mr-2 text-blue-600" size={24} />
          Company Overview
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Founded</span>
              <span className="font-semibold">{supplierIntel.founded}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Headquarters</span>
              <span className="font-semibold">{supplierIntel.headquarters}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Employees</span>
              <span className="font-semibold">{supplierIntel.employeeCount}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Annual Revenue</span>
              <span className="font-semibold text-green-600">{supplierIntel.annualRevenue}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Market Position</span>
              <span className="font-semibold">{supplierIntel.competitiveLandscape.marketPosition}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Financial Trend</span>
              <span className="font-semibold text-green-600 capitalize">{supplierIntel.financialHealth.trend}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Negotiation Pattern Analysis */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="mr-2 text-orange-600" size={24} />
          Negotiation Pattern Analysis
        </h3>
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="font-semibold text-orange-900 mb-2">Typical Approach</div>
            <p className="text-orange-800">{supplierIntel.concessionPattern.style}</p>
            <div className="mt-2 text-sm text-orange-700">
              ⏱ {supplierIntel.concessionPattern.timeline}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Price Flexibility</div>
              <div className="font-bold text-blue-900 text-lg">{supplierIntel.concessionPattern.priceFlexibility}</div>
              <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Terms Flexibility</div>
              <div className="font-bold text-green-900 text-lg">{supplierIntel.concessionPattern.termsFlexibility}</div>
              <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="text-purple-600" size={20} />
              <span className="font-semibold text-purple-900">Sweet Spot</span>
            </div>
            <p className="text-purple-800">{supplierIntel.concessionPattern.sweetSpot}</p>
          </div>
        </div>
      </div>

      {/* Key Contacts */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Target className="mr-2 text-indigo-600" size={24} />
          Key Decision Makers
        </h3>
        <div className="space-y-4">
          {supplierIntel.keyContacts.map((contact, idx) => (
            <div key={idx} className="p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border-2 border-indigo-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-lg text-gray-900">{contact.name}</div>
                  <div className="text-sm text-gray-600">{contact.title}</div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-bold">
                    {contact.decisionPower} Power
                  </span>
                  <span className="text-xs text-gray-600">{contact.responseTime}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded">
                  <div className="text-xs text-gray-500 mb-1">Negotiation Style</div>
                  <div className="font-semibold text-sm text-gray-900">{contact.style}</div>
                </div>
                <div className="bg-white p-3 rounded">
                  <div className="text-xs text-gray-500 mb-1">💡 Pro Tip</div>
                  <div className="font-semibold text-sm text-indigo-900">{contact.tips}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity & News */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <AlertCircle className="mr-2 text-yellow-600" size={24} />
          Recent Activity & Market Intel
        </h3>
        <div className="space-y-3">
          {supplierIntel.recentActivity.map((activity, idx) => (
            <div key={idx} className={`p-4 rounded-lg border-l-4 ${
              activity.type === 'positive' ? 'bg-green-50 border-green-500' :
              activity.type === 'concern' ? 'bg-red-50 border-red-500' :
              'bg-blue-50 border-blue-500'
            }`}>
              <div className="flex items-start justify-between mb-2">
                <div className="font-semibold text-gray-900">{activity.event}</div>
                <div className="text-sm text-gray-500">{activity.date}</div>
              </div>
              <div className={`text-sm ${
                activity.type === 'positive' ? 'text-green-700' :
                activity.type === 'concern' ? 'text-red-700' :
                'text-blue-700'
              }`}>
                📊 Impact: {activity.impact}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Landscape */}
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <BarChart3 className="mr-2 text-teal-600" size={24} />
          Competitive Landscape
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="p-3 bg-teal-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Alternative Suppliers</div>
              <div className="space-y-1">
                {supplierIntel.competitiveLandscape.competitors.map((comp, idx) => (
                  <div key={idx} className="text-sm font-semibold text-teal-900">• {comp}</div>
                ))}
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Market Trend</div>
              <div className="font-semibold text-gray-900">{supplierIntel.competitiveLandscape.marketTrend}</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Industry Growth</div>
              <div className="font-semibold text-yellow-900 text-lg">{supplierIntel.industryInsights.marketGrowth}</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Pricing Trend</div>
              <div className="font-semibold text-green-900">{supplierIntel.industryInsights.pricingTrend}</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Best Negotiation Time</div>
              <div className="font-semibold text-blue-900">{supplierIntel.industryInsights.seasonality}</div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Lightbulb className="mr-2" size={28} />
          AI-Recommended Approach
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
              <div className="text-blue-100 text-sm mb-1">Strategy</div>
              <div className="font-bold text-lg">{supplierIntel.aiRecommendation.approach}</div>
            </div>
            <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
              <div className="text-blue-100 text-sm mb-1">Your Leverage</div>
              <div className="font-bold text-lg">{supplierIntel.aiRecommendation.leverage}</div>
            </div>
            <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
              <div className="text-blue-100 text-sm mb-1">Their Urgency</div>
              <div className="font-bold text-lg">{supplierIntel.aiRecommendation.urgency}</div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
            <div className="font-semibold mb-2 flex items-center">
              <Target className="mr-2" size={20} />
              Key Tactic
            </div>
            <p className="text-blue-50">{supplierIntel.aiRecommendation.keyTactic}</p>
          </div>

          <div className="bg-red-500/30 backdrop-blur p-4 rounded-lg border-2 border-red-300">
            <div className="font-semibold mb-2 flex items-center">
              <XCircle className="mr-2" size={20} />
              Avoid This
            </div>
            <p className="text-red-50">{supplierIntel.aiRecommendation.avoidance}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(0)}
          className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <button
          onClick={() => setCurrentStep(2)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center space-x-2"
        >
          <span>Analyze Contract</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  const renderAnalysisStep = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">AI Analysis Complete</h2>
        <p className="text-blue-100">Analyzed {contractData.uploadedFile} • Identified 4 negotiation opportunities</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl border-2 border-red-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 font-medium">Critical Issues</span>
            <AlertCircle className="text-red-600" size={24} />
          </div>
          <div className="text-3xl font-bold text-red-600">1</div>
          <div className="text-sm text-gray-500 mt-1">Requires immediate attention</div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 font-medium">High Priority</span>
            <AlertCircle className="text-orange-600" size={24} />
          </div>
          <div className="text-3xl font-bold text-orange-600">1</div>
          <div className="text-sm text-gray-500 mt-1">Strong negotiation position</div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border-2 border-green-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 font-medium">Potential Savings</span>
            <DollarSign className="text-green-600" size={24} />
          </div>
          <div className="text-3xl font-bold text-green-600">$222K</div>
          <div className="text-sm text-gray-500 mt-1">Over contract lifetime</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Lightbulb className="mr-2 text-yellow-500" size={24} />
          Quick Insights
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
            <TrendingUp className="text-red-600 mt-1" size={20} />
            <div>
              <div className="font-semibold text-red-900">Price escalation is 4x market rate</div>
              <div className="text-sm text-red-700">20% annual increase vs. industry standard of 3-5%</div>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
            <Clock className="text-orange-600 mt-1" size={20} />
            <div>
              <div className="font-semibold text-orange-900">Payment terms favor supplier</div>
              <div className="text-sm text-orange-700">Net 15 creates cash flow pressure vs. standard Net 30-45</div>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
            <BarChart3 className="text-blue-600 mt-1" size={20} />
            <div>
              <div className="font-semibold text-blue-900">Benchmarked against 47 similar contracts</div>
              <div className="text-sm text-blue-700">Your position is strong based on market data</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(1)}
          className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <button
          onClick={() => setCurrentStep(3)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center space-x-2"
        >
          <span>View Risk Details</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  const renderRiskAssessment = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Risk Assessment & Market Benchmarking</h2>
        <p className="text-blue-100">AI-powered comparison with 47 similar software license agreements</p>
      </div>

      <div className="space-y-4">
        {risks.map((risk) => (
          <div
            key={risk.id}
            onClick={() => setSelectedClause(risk.id === selectedClause ? null : risk.id)}
            className={`bg-white rounded-xl border-2 ${selectedClause === risk.id ? 'border-blue-500 shadow-lg' : 'border-gray-200'} cursor-pointer transition-all hover:shadow-md`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getSeverityColor(risk.severity)}`}>
                      {risk.severity.toUpperCase()}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900">{risk.clause}</h3>
                  </div>
                  <p className="text-gray-600">{risk.issue}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-red-600">{risk.impact}</div>
                  <div className="text-sm text-gray-500">Financial Impact</div>
                </div>
              </div>

              {selectedClause === risk.id && (
                <div className="mt-4 pt-4 border-t-2 border-gray-100 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Current Terms</div>
                      <div className="font-semibold text-red-900">{risk.issue}</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Market Standard</div>
                      <div className="font-semibold text-green-900">{risk.marketStandard}</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-blue-900 mb-1">AI Recommendation</div>
                        <div className="text-blue-700">{risk.recommendation}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{risk.likelihood}</div>
                        <div className="text-sm text-blue-600">Success Rate</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <BarChart3 size={16} />
                    <span>Based on analysis of 47 similar contracts in your industry</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(2)}
          className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <button
          onClick={() => setCurrentStep(4)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center space-x-2"
        >
          <span>View Strategy</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  const renderStrategy = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">AI-Generated Negotiation Strategy</h2>
        <p className="text-blue-100">Optimized approach based on market data and predictive analytics</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl border-2 border-green-200">
          <DollarSign className="text-green-600 mb-2" size={32} />
          <div className="text-3xl font-bold text-green-600">{strategy.totalSavings}</div>
          <div className="text-sm text-gray-600 mt-1">Potential Savings</div>
        </div>
        <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
          <Target className="text-blue-600 mb-2" size={32} />
          <div className="text-3xl font-bold text-blue-600">{strategy.negotiationScore}</div>
          <div className="text-sm text-gray-600 mt-1">Negotiation Score</div>
        </div>
        <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
          <Clock className="text-purple-600 mb-2" size={32} />
          <div className="text-3xl font-bold text-purple-600">{strategy.timeline}</div>
          <div className="text-sm text-gray-600 mt-1">Expected Timeline</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Target className="mr-2 text-blue-600" size={24} />
          Prioritized Negotiation Points
        </h3>
        <div className="space-y-3">
          {strategy.keyPriorities.map((priority, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                  priority.priority === 'CRITICAL' ? 'bg-red-600' :
                  priority.priority === 'HIGH' ? 'bg-orange-600' :
                  priority.priority === 'MEDIUM' ? 'bg-yellow-600' : 'bg-green-600'
                }`}>
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{priority.item}</div>
                  <div className="text-sm text-gray-600">{priority.action}</div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                priority.priority === 'CRITICAL' ? 'bg-red-100 text-red-800' :
                priority.priority === 'HIGH' ? 'bg-orange-100 text-orange-800' :
                priority.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
              }`}>
                {priority.priority}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Lightbulb className="mr-2 text-yellow-500" size={24} />
          Recommended Tactics
        </h3>
        <div className="space-y-3">
          {strategy.tactics.map((tactic, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                {idx + 1}
              </div>
              <div className="text-gray-700">{tactic}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(3)}
          className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <button
          onClick={() => setCurrentStep(5)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center space-x-2"
        >
          <span>Negotiation Guide</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  const renderNegotiationGuide = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Live Negotiation Guidance</h2>
        <p className="text-blue-100">Real-time AI coaching for your supplier conversation</p>
      </div>

      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Opening Position</h3>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <div className="font-semibold text-blue-900 mb-2">Suggested Opening Statement:</div>
          <p className="text-blue-800 italic">"We've reviewed your proposal and are interested in moving forward. However, we've identified some terms that don't align with industry standards. Based on our analysis of 47 similar agreements, we'd like to discuss the pricing escalation clause and payment terms."</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">What to Emphasize</div>
            <ul className="text-sm text-green-900 space-y-1">
              <li>• Long-term partnership value</li>
              <li>• Market benchmark data</li>
              <li>• Volume commitments</li>
            </ul>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">What to Avoid</div>
            <ul className="text-sm text-red-900 space-y-1">
              <li>• Accepting first offer</li>
              <li>• Negotiating multiple items at once</li>
              <li>• Showing urgency</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Clause-by-Clause Guide</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-red-600 pl-4 py-3 bg-red-50 rounded-r-lg">
            <div className="font-bold text-red-900 mb-2">🎯 Priority #1: Auto-Renewal Pricing</div>
            <div className="text-sm text-gray-700 mb-2">
              <span className="font-semibold">Their Position:</span> 20% annual increase
            </div>
            <div className="text-sm text-gray-700 mb-2">
              <span className="font-semibold">Your Counter:</span> "Industry standard is 3-5%. We propose capping increases at 5% or CPI, whichever is lower."
            </div>
            <div className="text-sm text-green-700 mb-2">
              <span className="font-semibold">If They Resist:</span> "We're willing to commit to a 3-year term if you can agree to 5% annual cap."
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">70% Success Rate</div>
              <div className="text-xs text-gray-600">$180K savings potential</div>
            </div>
          </div>

          <div className="border-l-4 border-orange-600 pl-4 py-3 bg-orange-50 rounded-r-lg">
            <div className="font-bold text-orange-900 mb-2">🎯 Priority #2: Payment Terms</div>
            <div className="text-sm text-gray-700 mb-2">
              <span className="font-semibold">Their Position:</span> Net 15
            </div>
            <div className="text-sm text-gray-700 mb-2">
              <span className="font-semibold">Your Counter:</span> "Net 30 is standard in our industry and improves our working relationship."
            </div>
            <div className="text-sm text-green-700 mb-2">
              <span className="font-semibold">Fallback:</span> Accept Net 20 if needed
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">85% Success Rate</div>
              <div className="text-xs text-gray-600">$42K cash flow impact</div>
            </div>
          </div>

          <div className="border-l-4 border-yellow-600 pl-4 py-3 bg-yellow-50 rounded-r-lg">
            <div className="font-bold text-yellow-900 mb-2">🎯 Priority #3: Liability Cap</div>
            <div className="text-sm text-gray-700 mb-2">
              <span className="font-semibold">Their Position:</span> 1x annual fees
            </div>
            <div className="text-sm text-gray-700 mb-2">
              <span className="font-semibold">Your Counter:</span> "2x annual fees is more appropriate given the risk profile."
            </div>
            <div className="text-sm text-green-700 mb-2">
              <span className="font-semibold">Note:</span> This is negotiable but not critical
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">60% Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
        <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center">
          <CheckCircle className="mr-2" size={24} />
          Predicted Outcome
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-gray-600 mb-2">Most Likely Scenario (75% probability)</div>
            <ul className="text-sm text-green-900 space-y-1">
              <li>✓ 5-7% annual price cap (vs 20%)</li>
              <li>✓ Net 30 payment terms (vs Net 15)</li>
              <li>✓ Total savings: $180K-$200K</li>
            </ul>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-2">Best Case (25% probability)</div>
            <ul className="text-sm text-green-900 space-y-1">
              <li>✓ 5% annual cap + 2x liability</li>
              <li>✓ Net 30 payment terms</li>
              <li>✓ Total savings: $222K+</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(4)}
          className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <button
          onClick={() => setCurrentStep(6)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center space-x-2"
        >
          <span>View Summary</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  const renderSummary = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-6 text-center">
        <CheckCircle className="mx-auto mb-4" size={64} />
        <h2 className="text-3xl font-bold mb-2">Ready to Negotiate</h2>
        <p className="text-green-100 text-lg">Your AI-powered negotiation strategy is complete</p>
      </div>

      <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Negotiation Summary</h3>
        
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <DollarSign className="mx-auto mb-3 text-green-600" size={48} />
            <div className="text-4xl font-bold text-green-600 mb-2">$222K</div>
            <div className="text-gray-600">Potential Savings</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <Target className="mx-auto mb-3 text-blue-600" size={48} />
            <div className="text-4xl font-bold text-blue-600 mb-2">78%</div>
            <div className="text-gray-600">Success Probability</div>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <Clock className="mx-auto mb-3 text-purple-600" size={48} />
            <div className="text-4xl font-bold text-purple-600 mb-2">2-3</div>
            <div className="text-gray-600">Weeks to Close</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3">Key Talking Points</h4>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Lead with 20% price increase being 4x market standard (backed by 47 contract analysis)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Bundle payment term improvements with multi-year commitment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Reference competitor offerings for liability terms</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-bold text-green-900 mb-3">Your Strongest Positions</h4>
            <ul className="space-y-2 text-green-800">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span>Auto-renewal pricing (85% acceptance rate for 5% cap)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span>Payment terms (industry standard supports Net 30)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span>Long-term partnership value as leverage</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="font-bold text-yellow-900 mb-3">Fallback Positions</h4>
            <ul className="space-y-2 text-yellow-800">
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>If 5% cap rejected: Accept 7% with performance review clause</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>If Net 30 rejected: Accept Net 20 as compromise</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>Consider extending term to 4 years for better pricing</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
          <div className="flex items-start space-x-4">
            <Lightbulb className="flex-shrink-0 mt-1" size={32} />
            <div>
              <h4 className="font-bold text-lg mb-2">AI Recommendation</h4>
              <p className="text-blue-100">
                Based on our analysis, we recommend starting negotiations within the next 3-5 business days while market conditions favor your position. Your strongest leverage point is the pricing escalation clause - lead with this to establish strong negotiating position.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center space-x-2">
            <FileText size={20} />
            <span>Download Negotiation Brief</span>
          </button>
          <button className="flex-1 px-6 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 flex items-center justify-center space-x-2">
            <span>Share with Team</span>
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(5)}
          className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <button
          onClick={() => setCurrentStep(0)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 flex items-center space-x-2"
        >
          <CheckCircle size={20} />
          <span>Start New Analysis</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Sirion</h1>
          </div>
          <p className="text-gray-600 text-lg">AI-Native Contract Lifecycle Management</p>
        </div>

        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {currentStep === 0 && renderUploadStep()}
          {currentStep === 1 && renderSupplierIntel()}
          {currentStep === 2 && renderAnalysisStep()}
          {currentStep === 3 && renderRiskAssessment()}
          {currentStep === 4 && renderStrategy()}
          {currentStep === 5 && renderNegotiationGuide()}
          {currentStep === 6 && renderSummary()}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Powered by Sirion AI Agents • Enterprise-Grade Intelligence</p>
        </div>
      </div>
    </div>
  );
}