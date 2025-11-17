import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, Search, Calendar, TrendingUp, Link2, Eye, Download, Filter, AlertCircle, DollarSign, Users, FileCheck, Shield, Clock, Zap, BarChart3, ArrowRight, ArrowLeft, Lightbulb, MapPin, Tag, GitBranch, Layout, List, Grid } from 'lucide-react';

export default function MetadataNavigator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [extracting, setExtracting] = useState(false);
  const [extractionProgress, setExtractionProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMetadata, setSelectedMetadata] = useState(null);
  const [viewMode, setViewMode] = useState('visual'); // 'visual' or 'list'
  const [filterRisk, setFilterRisk] = useState('all');

  const steps = [
    "Upload Contract",
    "AI Extraction",
    "Metadata Dashboard",
    "Timeline View",
    "Relationship Map",
    "Comparison",
    "Export"
  ];

  const contractData = {
    fileName: "Software_License_Agreement_GlobalTech.pdf",
    pages: 24,
    supplier: "Global Tech Supplies Inc.",
    value: "$500,000",
    uploadDate: "Nov 16, 2025"
  };

  // Metadata categories with extracted items
  const metadataCategories = [
    { 
      id: 'critical', 
      name: 'Critical Terms', 
      icon: AlertCircle, 
      count: 12, 
      color: 'red',
      items: [
        { field: 'Auto-Renewal', value: '20% annual increase', risk: 'critical', page: 18, impact: '$180,000' },
        { field: 'Termination Notice', value: '90 days required', risk: 'high', page: 21, impact: 'High' },
        { field: 'Data Breach Notification', value: 'Not specified', risk: 'critical', page: null, impact: 'Legal Risk' }
      ]
    },
    { 
      id: 'financial', 
      name: 'Financial', 
      icon: DollarSign, 
      count: 18, 
      color: 'green',
      items: [
        { field: 'Contract Value', value: '$500,000', risk: 'low', page: 1, impact: null },
        { field: 'Payment Terms', value: 'Net 15', risk: 'high', page: 12, impact: '$42,000 cash flow' },
        { field: 'Late Payment Fee', value: '2% per month', risk: 'medium', page: 12, impact: 'Moderate' },
        { field: 'Currency', value: 'USD', risk: 'low', page: 1, impact: null }
      ]
    },
    { 
      id: 'dates', 
      name: 'Dates & Deadlines', 
      icon: Calendar, 
      count: 24, 
      color: 'blue',
      items: [
        { field: 'Start Date', value: 'Jan 15, 2025', risk: 'low', page: 1, impact: null },
        { field: 'End Date', value: 'Jan 14, 2028', risk: 'low', page: 1, impact: null },
        { field: 'First Payment Due', value: 'Feb 1, 2025', risk: 'medium', page: 12, impact: null },
        { field: 'Renewal Date', value: 'Dec 15, 2027', risk: 'high', page: 18, impact: 'Must notify 60 days prior' }
      ]
    },
    { 
      id: 'parties', 
      name: 'Parties', 
      icon: Users, 
      count: 8, 
      color: 'purple',
      items: [
        { field: 'Supplier Name', value: 'Global Tech Supplies Inc.', risk: 'low', page: 1, impact: null },
        { field: 'Client Name', value: 'Your Company LLC', risk: 'low', page: 1, impact: null },
        { field: 'Authorized Signatories', value: '2 required', risk: 'medium', page: 22, impact: null }
      ]
    },
    { 
      id: 'obligations', 
      name: 'Obligations', 
      icon: FileCheck, 
      count: 31, 
      color: 'orange',
      items: [
        { field: 'Quarterly Reports', value: 'Due within 15 days of quarter end', risk: 'medium', page: 15, impact: null },
        { field: 'Software Updates', value: 'Monthly security patches', risk: 'high', page: 8, impact: 'Compliance requirement' },
        { field: 'Data Backup', value: 'Daily backups required', risk: 'high', page: 11, impact: 'Critical' }
      ]
    },
    { 
      id: 'legal', 
      name: 'Legal Terms', 
      icon: Shield, 
      count: 45, 
      color: 'indigo',
      items: [
        { field: 'Liability Cap', value: '$500,000 (1x annual fees)', risk: 'medium', page: 19, impact: null },
        { field: 'Governing Law', value: 'Delaware', risk: 'low', page: 23, impact: null },
        { field: 'Dispute Resolution', value: 'Binding arbitration', risk: 'medium', page: 23, impact: null }
      ]
    }
  ];

  // Timeline data
  const timelineEvents = [
    { date: '2025-01-15', label: 'Contract Start', type: 'start', page: 1 },
    { date: '2025-02-01', label: 'First Payment Due', type: 'payment', page: 12, amount: '$125,000' },
    { date: '2025-04-15', label: 'Q1 Report Due', type: 'obligation', page: 15 },
    { date: '2025-07-15', label: 'Q2 Report Due', type: 'obligation', page: 15 },
    { date: '2026-01-15', label: 'Annual Review', type: 'milestone', page: 18 },
    { date: '2027-10-15', label: 'Renewal Notice Deadline', type: 'critical', page: 18 },
    { date: '2027-12-15', label: 'Auto-Renewal Date', type: 'critical', page: 18 },
    { date: '2028-01-14', label: 'Contract End', type: 'end', page: 1 }
  ];

  // Comparison data
  const comparisonContracts = [
    {
      name: 'Current Contract',
      supplier: 'Global Tech Supplies',
      value: '$500,000',
      paymentTerms: 'Net 15',
      priceIncrease: '20%',
      liabilityCap: '$500K',
      term: '3 years',
      autoRenewal: 'Yes',
      scores: { payment: 40, pricing: 20, liability: 50, overall: 37 }
    },
    {
      name: 'Contract B',
      supplier: 'TechVendor Pro',
      value: '$480,000',
      paymentTerms: 'Net 30',
      priceIncrease: '5%',
      liabilityCap: '$1M',
      term: '3 years',
      autoRenewal: 'No',
      scores: { payment: 80, pricing: 90, liability: 85, overall: 85 }
    },
    {
      name: 'Contract C',
      supplier: 'DataSupply Corp',
      value: '$520,000',
      paymentTerms: 'Net 45',
      priceIncrease: '3%',
      liabilityCap: '$2M',
      term: '2 years',
      autoRenewal: 'No',
      scores: { payment: 95, pricing: 95, liability: 95, overall: 95 }
    }
  ];

  const handleExtract = () => {
    setExtracting(true);
    setExtractionProgress(0);
    
    const interval = setInterval(() => {
      setExtractionProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setExtracting(false);
            setCurrentStep(2);
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  const getCategoryColor = (color) => {
    const colors = {
      red: 'bg-red-100 text-red-800 border-red-300',
      green: 'bg-green-100 text-green-800 border-green-300',
      blue: 'bg-blue-100 text-blue-800 border-blue-300',
      purple: 'bg-purple-100 text-purple-800 border-purple-300',
      orange: 'bg-orange-100 text-orange-800 border-orange-300',
      indigo: 'bg-indigo-100 text-indigo-800 border-indigo-300'
    };
    return colors[color] || colors.blue;
  };

  const getRiskColor = (risk) => {
    switch(risk) {
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
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {index < currentStep ? <CheckCircle size={20} /> : index + 1}
              </div>
              <div className={`text-xs mt-2 font-medium text-center ${
                index <= currentStep ? 'text-teal-600' : 'text-gray-500'
              }`}>
                {step}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 flex items-center" style={{ marginTop: '20px', minWidth: '40px' }}>
                <div className={`h-1 w-full ${
                  index < currentStep ? 'bg-teal-600' : 'bg-gray-200'
                }`} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderUpload = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Metadata Extraction & Navigation</h2>
        <p className="text-gray-600 text-lg">Powered by Sirion AI</p>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 border-2 border-teal-200">
        <div className="text-center mb-6">
          <Upload className="mx-auto mb-4 text-teal-600" size={48} />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Contract for Analysis</h3>
          <p className="text-gray-600">AI will extract and organize all metadata for easy navigation</p>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-dashed border-teal-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <FileText className="text-teal-600" size={40} />
              <div>
                <div className="font-semibold text-gray-900">{contractData.fileName}</div>
                <div className="text-sm text-gray-500">{contractData.pages} pages • {contractData.uploadDate}</div>
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
          </div>
        </div>

        <button
          onClick={() => {
            setCurrentStep(1);
            setTimeout(handleExtract, 500);
          }}
          className="w-full mt-6 bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Zap size={20} />
          <span>Extract Metadata</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-teal-50 p-4 rounded-lg">
          <Tag className="mx-auto mb-2 text-teal-600" size={24} />
          <div className="font-semibold text-sm">1,200+ Fields</div>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg">
          <Eye className="mx-auto mb-2 text-teal-600" size={24} />
          <div className="font-semibold text-sm">Visual Navigation</div>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg">
          <GitBranch className="mx-auto mb-2 text-teal-600" size={24} />
          <div className="font-semibold text-sm">Relationships</div>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg">
          <BarChart3 className="mx-auto mb-2 text-teal-600" size={24} />
          <div className="font-semibold text-sm">Comparisons</div>
        </div>
      </div>
    </div>
  );

  const renderExtraction = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-6 text-center">
        <Zap className="mx-auto mb-4 animate-pulse" size={64} />
        <h2 className="text-3xl font-bold mb-2">AI Extracting Metadata</h2>
        <p className="text-teal-100 text-lg">Analyzing {contractData.fileName}</p>
      </div>

      <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-semibold text-gray-900">Extraction Progress</span>
            <span className="font-bold text-teal-600">{extractionProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-teal-600 h-4 rounded-full transition-all duration-300"
              style={{ width: `${extractionProgress}%` }}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className={`flex items-center space-x-3 p-4 rounded-lg ${extractionProgress >= 20 ? 'bg-green-50' : 'bg-gray-50'}`}>
            {extractionProgress >= 20 ? <CheckCircle className="text-green-600" size={24} /> : <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />}
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Document Structure Analysis</div>
              <div className="text-sm text-gray-600">Identifying sections, clauses, and hierarchy</div>
            </div>
          </div>

          <div className={`flex items-center space-x-3 p-4 rounded-lg ${extractionProgress >= 40 ? 'bg-green-50' : 'bg-gray-50'}`}>
            {extractionProgress >= 40 ? <CheckCircle className="text-green-600" size={24} /> : <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />}
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Parties & Entities Extraction</div>
              <div className="text-sm text-gray-600">Found 2 parties, 3 authorized signatories</div>
            </div>
          </div>

          <div className={`flex items-center space-x-3 p-4 rounded-lg ${extractionProgress >= 60 ? 'bg-green-50' : 'bg-gray-50'}`}>
            {extractionProgress >= 60 ? <CheckCircle className="text-green-600" size={24} /> : <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />}
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Financial Terms & Dates</div>
              <div className="text-sm text-gray-600">Extracted 18 financial terms, 24 dates</div>
            </div>
          </div>

          <div className={`flex items-center space-x-3 p-4 rounded-lg ${extractionProgress >= 80 ? 'bg-green-50' : 'bg-gray-50'}`}>
            {extractionProgress >= 80 ? <CheckCircle className="text-green-600" size={24} /> : <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />}
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Obligations & Risks</div>
              <div className="text-sm text-gray-600">Identified 31 obligations, flagged 12 critical terms</div>
            </div>
          </div>

          <div className={`flex items-center space-x-3 p-4 rounded-lg ${extractionProgress >= 100 ? 'bg-green-50' : 'bg-gray-50'}`}>
            {extractionProgress >= 100 ? <CheckCircle className="text-green-600" size={24} /> : <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />}
            <div className="flex-1">
              <div className="font-semibold text-gray-900">Relationship Mapping</div>
              <div className="text-sm text-gray-600">Building metadata connections and dependencies</div>
            </div>
          </div>
        </div>

        {extractionProgress === 100 && (
          <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-600" size={32} />
              <div>
                <div className="font-bold text-green-900 text-lg">Extraction Complete!</div>
                <div className="text-green-700">Successfully extracted 247 metadata points from your contract</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderDashboard = () => {
    const filteredCategories = selectedCategory === 'all' 
      ? metadataCategories 
      : metadataCategories.filter(cat => cat.id === selectedCategory);

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">Interactive Metadata Dashboard</h2>
          <p className="text-teal-100">247 metadata points extracted • Navigate with ease</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-white p-4 rounded-xl border-2 border-red-200">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="text-red-600" size={24} />
              <span className="text-2xl font-bold text-red-600">12</span>
            </div>
            <div className="text-sm font-medium text-gray-600">Critical Items</div>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="text-blue-600" size={24} />
              <span className="text-2xl font-bold text-blue-600">24</span>
            </div>
            <div className="text-sm font-medium text-gray-600">Dates Tracked</div>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-green-200">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="text-green-600" size={24} />
              <span className="text-2xl font-bold text-green-600">18</span>
            </div>
            <div className="text-sm font-medium text-gray-600">Financial Terms</div>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <FileCheck className="text-orange-600" size={24} />
              <span className="text-2xl font-bold text-orange-600">31</span>
            </div>
            <div className="text-sm font-medium text-gray-600">Obligations</div>
          </div>
          <div className="bg-white p-4 rounded-xl border-2 border-teal-200">
            <div className="flex items-center justify-between mb-2">
              <Tag className="text-teal-600" size={24} />
              <span className="text-2xl font-bold text-teal-600">247</span>
            </div>
            <div className="text-sm font-medium text-gray-600">Total Metadata</div>
          </div>
        </div>

        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Panel - Categories */}
          <div className="col-span-3 space-y-4">
            <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Layout className="mr-2 text-teal-600" size={20} />
                Categories
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedCategory === 'all' 
                      ? 'bg-teal-100 border-2 border-teal-500' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="font-semibold text-gray-900">All Metadata</div>
                  <div className="text-sm text-gray-600">247 items</div>
                </button>
                {metadataCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.id 
                          ? `bg-${category.color}-100 border-2 border-${category.color}-500` 
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <Icon size={18} className={`text-${category.color}-600`} />
                          <span className="font-semibold text-gray-900">{category.name}</span>
                        </div>
                        <span className="text-sm font-bold text-gray-600">{category.count}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Filter className="mr-2 text-teal-600" size={20} />
                Filters
              </h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="risk" 
                    value="all"
                    checked={filterRisk === 'all'}
                    onChange={(e) => setFilterRisk(e.target.value)}
                    className="text-teal-600"
                  />
                  <span className="text-sm">All Items</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="risk" 
                    value="critical"
                    checked={filterRisk === 'critical'}
                    onChange={(e) => setFilterRisk(e.target.value)}
                    className="text-red-600"
                  />
                  <span className="text-sm">Critical Only</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="risk" 
                    value="high"
                    checked={filterRisk === 'high'}
                    onChange={(e) => setFilterRisk(e.target.value)}
                    className="text-orange-600"
                  />
                  <span className="text-sm">High Risk</span>
                </label>
              </div>
            </div>
          </div>

          {/* Center Panel - Metadata List */}
          <div className="col-span-6 bg-white rounded-xl p-6 border-2 border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">
                {selectedCategory === 'all' ? 'All Metadata' : metadataCategories.find(c => c.id === selectedCategory)?.name}
              </h3>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-teal-100 text-teal-600' : 'text-gray-400'}`}
                >
                  <List size={20} />
                </button>
                <button 
                  onClick={() => setViewMode('visual')}
                  className={`p-2 rounded ${viewMode === 'visual' ? 'bg-teal-100 text-teal-600' : 'text-gray-400'}`}
                >
                  <Grid size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredCategories.map((category) => (
                <div key={category.id}>
                  {category.items
                    .filter(item => filterRisk === 'all' || item.risk === filterRisk)
                    .map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedMetadata(item)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all mb-2 ${
                        selectedMetadata?.field === item.field
                          ? 'border-teal-500 bg-teal-50'
                          : 'border-gray-200 hover:border-teal-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${getRiskColor(item.risk)}`}>
                              {item.risk.toUpperCase()}
                            </span>
                            <span className="font-semibold text-gray-900">{item.field}</span>
                          </div>
                          <div className="text-gray-700 mb-1">{item.value}</div>
                          {item.page && (
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <MapPin size={14} />
                              <span>Page {item.page}</span>
                            </div>
                          )}
                          {item.impact && (
                            <div className="mt-2 text-sm font-semibold text-orange-600">
                              Impact: {item.impact}
                            </div>
                          )}
                        </div>
                        <ArrowRight className="text-gray-400" size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Details */}
          <div className="col-span-3 bg-white rounded-xl p-4 border-2 border-gray-200">
            {selectedMetadata ? (
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 flex items-center">
                  <Eye className="mr-2 text-teal-600" size={20} />
                  Details
                </h3>
                <div className="p-4 bg-teal-50 rounded-lg border-2 border-teal-200">
                  <div className="font-bold text-teal-900 mb-2">{selectedMetadata.field}</div>
                  <div className="text-sm text-teal-800 mb-3">{selectedMetadata.value}</div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getRiskColor(selectedMetadata.risk)}`}>
                    {selectedMetadata.risk.toUpperCase()} RISK
                  </div>
                </div>

                {selectedMetadata.page && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Document Location</div>
                    <div className="font-semibold text-gray-900 flex items-center">
                      <MapPin className="mr-2 text-gray-600" size={16} />
                      Page {selectedMetadata.page}
                    </div>
                  </div>
                )}

                {selectedMetadata.impact && (
                  <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                    <div className="text-sm text-gray-600 mb-1">Impact Analysis</div>
                    <div className="font-semibold text-orange-900">{selectedMetadata.impact}</div>
                  </div>
                )}

                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 flex items-center justify-center space-x-2">
                    <Eye size={18} />
                    <span>View in Document</span>
                  </button>
                  <button className="w-full px-4 py-2 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 flex items-center justify-center space-x-2">
                    <Link2 size={18} />
                    <span>See Related</span>
                  </button>
                  <button className="w-full px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 flex items-center justify-center space-x-2">
                    <AlertCircle size={18} />
                    <span>Flag for Review</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <Eye className="mx-auto mb-2 opacity-50" size={48} />
                <p>Select a metadata item to view details</p>
              </div>
            )}
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
            className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 flex items-center space-x-2"
          >
            <span>View Timeline</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  };

  const renderTimeline = () => {
    const getEventColor = (type) => {
      switch(type) {
        case 'start': return 'bg-green-500';
        case 'end': return 'bg-red-500';
        case 'critical': return 'bg-red-500';
        case 'payment': return 'bg-blue-500';
        case 'obligation': return 'bg-orange-500';
        case 'milestone': return 'bg-purple-500';
        default: return 'bg-gray-500';
      }
    };

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2">Contract Timeline</h2>
          <p className="text-teal-100">Visual timeline of all dates and deadlines</p>
        </div>

        <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">3-Year Contract Timeline</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Critical</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span>Obligation</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 h-1 bg-gray-300 top-6"></div>

            {/* Events */}
            <div className="space-y-8">
              {timelineEvents.map((event, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-full ${getEventColor(event.type)} flex items-center justify-center text-white font-bold z-10 border-4 border-white shadow-lg`}>
                      {idx + 1}
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200 hover:border-teal-500 cursor-pointer transition-all">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-bold text-gray-900">{event.label}</div>
                            <div className="text-sm text-gray-600 mt-1">{event.date}</div>
                            {event.amount && (
                              <div className="text-sm font-semibold text-green-600 mt-1">{event.amount}</div>
                            )}
                            <div className="text-xs text-gray-500 mt-2 flex items-center">
                              <MapPin size={12} className="mr-1" />
                              Page {event.page}
                            </div>
                          </div>
                          <button className="px-3 py-1 bg-teal-600 text-white rounded text-sm font-semibold hover:bg-teal-700">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <div className="text-sm text-gray-600 mb-1">Contract Duration</div>
              <div className="text-2xl font-bold text-green-600">3 Years</div>
              <div className="text-xs text-gray-500 mt-1">Jan 2025 - Jan 2028</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
              <div className="text-sm text-gray-600 mb-1">Upcoming Deadlines</div>
              <div className="text-2xl font-bold text-orange-600">3</div>
              <div className="text-xs text-gray-500 mt-1">Next 90 days</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
              <div className="text-sm text-gray-600 mb-1">Critical Dates</div>
              <div className="text-2xl font-bold text-red-600">2</div>
              <div className="text-xs text-gray-500 mt-1">Renewal & Termination</div>
            </div>
          </div>
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
            className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 flex items-center space-x-2"
          >
            <span>View Relationships</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  };

  const renderRelationshipMap = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Metadata Relationship Map</h2>
        <p className="text-teal-100">Visual connections between contract clauses</p>
      </div>

      <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">How Contract Terms Connect</h3>
          <p className="text-gray-600">Click any node to see related metadata</p>
        </div>

        {/* Simplified Relationship Graph Visualization */}
        <div className="relative h-96 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 border-2 border-teal-200">
          {/* SVG for connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {/* Lines from center to each node */}
            <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#64748b" strokeWidth="3" />
            <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#64748b" strokeWidth="3" />
            <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#64748b" strokeWidth="3" />
            <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#64748b" strokeWidth="3" />
            <line x1="50%" y1="50%" x2="75%" y2="28%" stroke="#64748b" strokeWidth="3" />
            <line x1="50%" y1="50%" x2="30%" y2="72%" stroke="#64748b" strokeWidth="3" />
          </svg>

          {/* Center Node */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 10 }}>
            <div className="w-32 h-32 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white cursor-pointer hover:scale-110 transition-transform">
              <div className="text-center">
                <div className="font-bold text-lg">Contract</div>
                <div className="text-xs">$500,000</div>
              </div>
            </div>
          </div>

          {/* Connected Nodes */}
          {/* Payment - Top */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2" style={{ zIndex: 10 }}>
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white cursor-pointer hover:scale-110 transition-transform">
              <div className="text-center">
                <div className="font-bold text-sm">Payment</div>
                <div className="text-xs">Net 15</div>
              </div>
            </div>
          </div>

          {/* Parties - Left */}
          <div className="absolute top-1/2 left-12 transform -translate-y-1/2" style={{ zIndex: 10 }}>
            <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white cursor-pointer hover:scale-110 transition-transform">
              <div className="text-center">
                <div className="font-bold text-sm">Parties</div>
                <div className="text-xs">2 entities</div>
              </div>
            </div>
          </div>

          {/* Renewal - Bottom */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2" style={{ zIndex: 10 }}>
            <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white cursor-pointer hover:scale-110 transition-transform">
              <div className="text-center">
                <div className="font-bold text-sm">Renewal</div>
                <div className="text-xs">Auto 20%</div>
              </div>
            </div>
          </div>

          {/* Liability - Right */}
          <div className="absolute top-1/2 right-12 transform -translate-y-1/2" style={{ zIndex: 10 }}>
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white cursor-pointer hover:scale-110 transition-transform">
              <div className="text-center">
                <div className="font-bold text-sm">Liability</div>
                <div className="text-xs">$500K cap</div>
              </div>
            </div>
          </div>

          {/* Term - Top Right */}
          <div className="absolute top-1/4 right-1/4" style={{ zIndex: 10 }}>
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white cursor-pointer hover:scale-110 transition-transform">
              <div className="text-center">
                <div className="font-bold text-xs">Term</div>
                <div className="text-xs">3 years</div>
              </div>
            </div>
          </div>

          {/* SLAs - Bottom Left */}
          <div className="absolute bottom-1/4 left-1/4" style={{ zIndex: 10 }}>
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white cursor-pointer hover:scale-110 transition-transform">
              <div className="text-center">
                <div className="font-bold text-xs">SLAs</div>
                <div className="text-xs">15 items</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-teal-50 p-4 rounded-lg border-2 border-teal-200">
            <div className="font-bold text-teal-900 mb-2">Key Relationships Detected</div>
            <ul className="text-sm text-teal-800 space-y-1">
              <li>• Payment Terms → Renewal Clause</li>
              <li>• Liability Cap → Termination Rights</li>
              <li>• SLA Metrics → Performance Obligations</li>
              <li>• Auto-Renewal → Price Escalation</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
            <div className="font-bold text-orange-900 mb-2">Impact Analysis</div>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>• Changing payment terms affects 3 clauses</li>
              <li>• Renewal terms connected to pricing</li>
              <li>• Liability impacts termination rights</li>
              <li>• Term length affects all obligations</li>
            </ul>
          </div>
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
          className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 flex items-center space-x-2"
        >
          <span>Compare Contracts</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  const renderComparison = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-2">Cross-Contract Comparison</h2>
        <p className="text-teal-100">Compare metadata across multiple contracts</p>
      </div>

      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Compare 3 Supplier Contracts</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left p-3 font-bold text-gray-700">Metric</th>
                {comparisonContracts.map((contract, idx) => (
                  <th key={idx} className="text-center p-3 font-bold text-gray-700">
                    {contract.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-semibold">Supplier</td>
                {comparisonContracts.map((contract, idx) => (
                  <td key={idx} className="p-3 text-center text-sm">{contract.supplier}</td>
                ))}
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3 font-semibold">Contract Value</td>
                {comparisonContracts.map((contract, idx) => (
                  <td key={idx} className="p-3 text-center text-sm font-semibold">{contract.value}</td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-semibold">Payment Terms</td>
                {comparisonContracts.map((contract, idx) => (
                  <td key={idx} className={`p-3 text-center text-sm font-semibold ${
                    idx === 0 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {contract.paymentTerms}
                    {idx > 0 && ' ✓'}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3 font-semibold">Price Increase</td>
                {comparisonContracts.map((contract, idx) => (
                  <td key={idx} className={`p-3 text-center text-sm font-bold ${
                    idx === 0 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {contract.priceIncrease}
                    {idx === 0 ? ' ⚠️' : ' ✓✓'}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-semibold">Liability Cap</td>
                {comparisonContracts.map((contract, idx) => (
                  <td key={idx} className={`p-3 text-center text-sm font-semibold ${
                    idx === 0 ? 'text-orange-600' : 'text-green-600'
                  }`}>
                    {contract.liabilityCap}
                    {idx > 0 && ' ✓'}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-3 font-semibold">Term Length</td>
                {comparisonContracts.map((contract, idx) => (
                  <td key={idx} className="p-3 text-center text-sm">{contract.term}</td>
                ))}
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-semibold">Auto-Renewal</td>
                {comparisonContracts.map((contract, idx) => (
                  <td key={idx} className={`p-3 text-center text-sm font-bold ${
                    contract.autoRenewal === 'Yes' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {contract.autoRenewal}
                    {contract.autoRenewal === 'No' && ' ✓'}
                    {contract.autoRenewal === 'Yes' && ' ⚠️'}
                  </td>
                ))}
              </tr>
              <tr className="bg-teal-50 border-t-2 border-teal-300">
                <td className="p-3 font-bold text-teal-900">Overall Score</td>
                {comparisonContracts.map((contract, idx) => (
                  <td key={idx} className="p-3 text-center">
                    <div className="text-2xl font-bold text-teal-600">{contract.scores.overall}</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-teal-600 h-2 rounded-full"
                        style={{ width: `${contract.scores.overall}%` }}
                      />
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <CheckCircle className="text-green-600" size={32} />
            <div>
              <div className="font-bold text-green-900 text-lg">Recommendation</div>
              <div className="text-green-700">Contract C offers the best overall terms with highest flexibility and lowest risk</div>
            </div>
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
          className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 flex items-center space-x-2"
        >
          <span>Export & Actions</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );

  const renderExport = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-6 text-center">
        <CheckCircle className="mx-auto mb-4" size={64} />
        <h2 className="text-3xl font-bold mb-2">Metadata Analysis Complete</h2>
        <p className="text-green-100 text-lg">247 metadata points extracted and organized</p>
      </div>

      <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Export Options</h3>

        <div className="grid grid-cols-2 gap-6">
          <button className="p-6 border-2 border-teal-300 rounded-xl hover:border-teal-500 hover:shadow-lg transition-all">
            <Download className="mx-auto mb-3 text-teal-600" size={48} />
            <div className="font-bold text-gray-900 mb-2">Excel Export</div>
            <div className="text-sm text-gray-600">All 247 metadata points in spreadsheet format</div>
          </button>

          <button className="p-6 border-2 border-blue-300 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all">
            <FileText className="mx-auto mb-3 text-blue-600" size={48} />
            <div className="font-bold text-gray-900 mb-2">PDF Report</div>
            <div className="text-sm text-gray-600">Executive summary with key insights</div>
          </button>

          <button className="p-6 border-2 border-purple-300 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all">
            <BarChart3 className="mx-auto mb-3 text-purple-600" size={48} />
            <div className="font-bold text-gray-900 mb-2">Comparison Sheet</div>
            <div className="text-sm text-gray-600">Multi-contract comparison analysis</div>
          </button>

          <button className="p-6 border-2 border-orange-300 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all">
            <Calendar className="mx-auto mb-3 text-orange-600" size={48} />
            <div className="font-bold text-gray-900 mb-2">Timeline View</div>
            <div className="text-sm text-gray-600">Visual timeline of all dates and deadlines</div>
          </button>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl text-white">
          <h4 className="font-bold text-xl mb-4">Quick Actions</h4>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-white/20 backdrop-blur p-4 rounded-lg hover:bg-white/30 transition-colors">
              <AlertCircle className="mx-auto mb-2" size={24} />
              <div className="text-sm font-semibold">Flag 12 Critical Items</div>
            </button>
            <button className="bg-white/20 backdrop-blur p-4 rounded-lg hover:bg-white/30 transition-colors">
              <Calendar className="mx-auto mb-2" size={24} />
              <div className="text-sm font-semibold">Add Dates to Calendar</div>
            </button>
            <button className="bg-white/20 backdrop-blur p-4 rounded-lg hover:bg-white/30 transition-colors">
              <Users className="mx-auto mb-2" size={24} />
              <div className="text-sm font-semibold">Share with Team</div>
            </button>
            <button className="bg-white/20 backdrop-blur p-4 rounded-lg hover:bg-white/30 transition-colors">
              <Shield className="mx-auto mb-2" size={24} />
              <div className="text-sm font-semibold">Request Legal Review</div>
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-teal-50 rounded-lg">
            <div className="text-3xl font-bold text-teal-600 mb-1">247</div>
            <div className="text-sm text-gray-600">Metadata Extracted</div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="text-3xl font-bold text-orange-600 mb-1">12</div>
            <div className="text-sm text-gray-600">Critical Items Flagged</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-1">90%</div>
            <div className="text-sm text-gray-600">Time Saved vs Manual</div>
          </div>
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
          <span>Analyze New Contract</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
              <Tag className="text-white" size={28} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Sirion</h1>
          </div>
          <p className="text-gray-600 text-lg">AI-Native Contract Lifecycle Management</p>
        </div>

        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {currentStep === 0 && renderUpload()}
          {currentStep === 1 && renderExtraction()}
          {currentStep === 2 && renderDashboard()}
          {currentStep === 3 && renderTimeline()}
          {currentStep === 4 && renderRelationshipMap()}
          {currentStep === 5 && renderComparison()}
          {currentStep === 6 && renderExport()}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Powered by Sirion AI • Intelligent Metadata Extraction</p>
        </div>
      </div>
    </div>
  );
}