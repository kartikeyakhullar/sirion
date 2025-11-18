import React, { useState, Suspense, lazy } from 'react';
import { Zap, Tag, ArrowRight, Home, TrendingUp, Eye, BarChart3, Target, Lightbulb, Shield, DollarSign, Calendar, GitBranch, Users, AlertCircle } from 'lucide-react';

// Lazy load the feature components for better performance
const AINavigationCopilot = lazy(() => import('./sirion-negotiation-copilot'));
const MetadataNavigator = lazy(() => import('./metadata-navigator'));

export default function SirionAISuite() {
  const [selectedFeature, setSelectedFeature] = useState(null); // null, 'copilot', or 'navigator'

  const renderLandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-xl">
              <Zap className="text-white" size={36} />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Sirion AI Suite
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-2">Next-Generation Contract Intelligence Platform</p>
          <p className="text-gray-500">Powered by Advanced AI • Built for Enterprise</p>
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border-2 border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform How You Work with Contracts</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose your AI-powered workflow to unlock unprecedented insights, 
              accelerate negotiations, and make data-driven decisions with confidence.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">$222K</div>
              <div className="text-sm text-gray-600">Average Savings</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">90%</div>
              <div className="text-sm text-gray-600">Time Saved</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">247</div>
              <div className="text-sm text-gray-600">Metadata Points</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Feature Selection Cards */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* AI Negotiation Copilot Card */}
          <div 
            onClick={() => setSelectedFeature('copilot')}
            className="group bg-white rounded-2xl shadow-xl border-2 border-transparent hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 duration-300 flex flex-col"
          >
            <div className="p-8 flex-1 flex flex-col">
              {/* Icon & Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Negotiation Copilot</h3>
                    <p className="text-sm text-gray-500">Strategic Intelligence</p>
                  </div>
                </div>
                <ArrowRight className="text-blue-600 group-hover:translate-x-2 transition-transform" size={32} />
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 text-lg">
                Real-time AI coaching for contract negotiations. Get supplier intelligence, 
                market benchmarks, and strategic recommendations that predict outcomes with 85% accuracy.
              </p>

              {/* NEW Badge */}
              <div className="mb-4 inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                ✨ ADDRESSES KEY GAPS IN CURRENT CLM
              </div>

              {/* Key Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <Shield className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Supplier Intelligence Profile <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full ml-2">NEW</span></div>
                    <div className="text-sm text-gray-600">Financial health (72/100), negotiation history, key contacts, risk indicators</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Competitor Intelligence <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full ml-2">NEW</span></div>
                    <div className="text-sm text-gray-600">How competitors negotiate with this supplier, pricing benchmarks, leverage points</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Negotiation Tactics Playbook <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full ml-2">NEW</span></div>
                    <div className="text-sm text-gray-600">Proven strategies, opening positions, fallback options, timing recommendations</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Market Benchmarking</div>
                    <div className="text-sm text-gray-600">47 similar contracts analyzed, industry pricing trends, terms comparison</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Predictive Success Analytics</div>
                    <div className="text-sm text-gray-600">85% accuracy on acceptance probability, optimal concession paths</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Live Negotiation Coaching</div>
                    <div className="text-sm text-gray-600">Real-time "what to say next," risk alerts, alternative approaches</div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                {/* Gap Addressed */}
                <div className="mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border-2 border-blue-200">
                  <div className="font-bold text-sm text-blue-900 mb-2">🎯 Addresses Critical Gap:</div>
                  <div className="text-xs text-gray-700">
                    Current CLM systems provide <span className="font-semibold">extraction</span> but lack <span className="font-semibold text-blue-600">strategic negotiation intelligence</span>. 
                    This copilot adds competitor insights, proven tactics, and predictive analytics to drive better outcomes.
                  </div>
                </div>

                {/* Value Props */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">$222K</div>
                    <div className="text-xs text-gray-600">Avg. Savings</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">60%</div>
                    <div className="text-xs text-gray-600">Faster Close</div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                  <span>Launch Negotiation Copilot</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500">Best for: </span>
                  <span className="text-sm font-semibold text-gray-700">Procurement, Contract Negotiators</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metadata Navigator Card */}
          <div 
            onClick={() => setSelectedFeature('navigator')}
            className="group bg-white rounded-2xl shadow-xl border-2 border-transparent hover:border-teal-500 hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 duration-300 flex flex-col"
          >
            <div className="p-8 flex-1 flex flex-col">
              {/* Icon & Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Tag className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Metadata Navigator</h3>
                    <p className="text-sm text-gray-500">Intelligent Extraction</p>
                  </div>
                </div>
                <ArrowRight className="text-teal-600 group-hover:translate-x-2 transition-transform" size={32} />
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 text-lg">
                Interactive navigation of contract metadata. Extract 247+ data points, 
                visualize timelines, map relationships, and compare contracts with AI-powered intelligence.
              </p>

              {/* NEW Badge */}
              <div className="mb-4 inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
                ✨ NEXT-GEN METADATA INTELLIGENCE
              </div>

              {/* Key Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <Eye className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Visual Click-to-Clause Navigation <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full ml-2">NEW</span></div>
                    <div className="text-sm text-gray-600">Interactive dashboard - click any metadata to jump directly to source clause</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Automated Risk Flagging <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full ml-2">NEW</span></div>
                    <div className="text-sm text-gray-600">AI detects unusual terms, missing clauses, compliance gaps automatically</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Smart Timeline Visualization</div>
                    <div className="text-sm text-gray-600">24 critical dates on interactive timeline with deadline tracking & alerts</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <GitBranch className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Relationship Mapping <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full ml-2">NEW</span></div>
                    <div className="text-sm text-gray-600">Visual graph showing how clauses connect and affect each other</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Cross-Contract Anomaly Detection</div>
                    <div className="text-sm text-gray-600">Compare 3+ contracts instantly, spot inconsistencies, identify outliers</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Portfolio-Wide Insights</div>
                    <div className="text-sm text-gray-600">Aggregate analytics across all contracts, trend analysis, risk exposure</div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                {/* Gap Addressed */}
                <div className="mb-6 bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-lg border-2 border-teal-200">
                  <div className="font-bold text-sm text-teal-900 mb-2">🎯 Addresses Critical Gap:</div>
                  <div className="text-xs text-gray-700">
                    Traditional extraction creates <span className="font-semibold">data silos</span> without context. 
                    This navigator adds <span className="font-semibold text-teal-600">visual intelligence, relationship mapping, and anomaly detection</span> to transform data into actionable insights.
                  </div>
                </div>

                {/* Value Props */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                    <div className="text-2xl font-bold text-teal-600 mb-1">247</div>
                    <div className="text-xs text-gray-600">Metadata Points</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <div className="text-2xl font-bold text-orange-600 mb-1">90%</div>
                    <div className="text-xs text-gray-600">Time Saved</div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                  <span>Launch Metadata Navigator</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500">Best for: </span>
                  <span className="text-sm font-semibold text-gray-700">Legal Ops, Compliance, Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl shadow-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">Why Sirion AI Suite?</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">AI-First Platform</h4>
              <p className="text-blue-100 text-sm">
                Built from the ground up with AI at the core, not bolted on
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">Enterprise-Grade</h4>
              <p className="text-blue-100 text-sm">
                SOC 2, GDPR, ISO 27001 compliant with bank-level security
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-white" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">Measurable ROI</h4>
              <p className="text-blue-100 text-sm">
                Average $222K savings per contract, 90% faster reviews
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p className="text-sm">Sirion AI Suite • Redefining Contract Lifecycle Management</p>
          <p className="text-xs mt-2">Trusted by Fortune 500 Companies • Managing $800B in Contract Value</p>
        </div>
      </div>
    </div>
  );

  // Loading component
  const LoadingScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg font-semibold">Loading AI Suite...</p>
      </div>
    </div>
  );

  // Wrapper components with "Back to Home" button
  const CopilotWithHome = () => (
    <div className="relative">
      <button
        onClick={() => setSelectedFeature(null)}
        className="fixed top-8 left-8 z-50 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 shadow-lg flex items-center space-x-2 transition-all hover:scale-105"
      >
        <Home size={20} />
        <span>Back to Home</span>
      </button>
      <Suspense fallback={<LoadingScreen />}>
        <AINavigationCopilot />
      </Suspense>
    </div>
  );

  const NavigatorWithHome = () => (
    <div className="relative">
      <button
        onClick={() => setSelectedFeature(null)}
        className="fixed top-8 left-8 z-50 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 shadow-lg flex items-center space-x-2 transition-all hover:scale-105"
      >
        <Home size={20} />
        <span>Back to Home</span>
      </button>
      <Suspense fallback={<LoadingScreen />}>
        <MetadataNavigator />
      </Suspense>
    </div>
  );

  // Main render logic
  if (selectedFeature === 'copilot') {
    return <CopilotWithHome />;
  } else if (selectedFeature === 'navigator') {
    return <NavigatorWithHome />;
  } else {
    return renderLandingPage();
  }
}