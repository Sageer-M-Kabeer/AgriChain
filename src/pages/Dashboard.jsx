import React, { useState } from "react";

const FarmerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedTransactionType, setSelectedTransactionType] = useState("all");
  const [showLoanModal, setShowLoanModal] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);

  // Enhanced mock data
  const dashboardData = {
    totalFilesShared: 24,
    totalTransactions: 156,
    walletBalance: "2,450.75",
    complianceScore: 88,
    notifications: 3,
    farmerName: "Sagir Muhammad Kabir",
    farmerId: "FARM-001",
    walletId: "0x1a2b3c4d5e6f7890",
    totalEarnings: "1,245,000",
    pendingActions: 2,
    verificationStatus: "verified"
  };

  // Enhanced stats with more metrics
  const stats = [
    {
      title: "Files Shared",
      value: dashboardData.totalFilesShared,
      icon: "✅",
      color: "border-green-500",
      trend: "+12%",
      description: "Encrypted documents"
    },
    {
      title: "Transactions",
      value: dashboardData.totalTransactions,
      icon: "💰",
      color: "border-blue-500",
      trend: "+8%",
      description: "All activities"
    },
    {
      title: "Wallet Balance",
      value: `₦${dashboardData.walletBalance}`,
      icon: "💳",
      color: "border-purple-500",
      subtitle: "BlockDAG Wallet",
      description: "Available funds"
    },
    {
      title: "Compliance Score",
      value: `${dashboardData.complianceScore}%`,
      icon: "📊",
      color: "border-orange-500",
      trend: "+5%",
      description: "Trust rating"
    }
  ];

  // Enhanced transaction data
  const transactions = [
    {
      id: 1,
      type: "loan",
      title: "Crop Production Loan",
      amount: 500000,
      counterparty: "AgroBank NG",
      status: "approved",
      date: "2025-01-15",
      txHash: "0x98ab1234...",
      details: "For fertilizer and equipment purchase",
      category: "agriculture",
      progress: 100
    },
    {
      id: 2,
      type: "land",
      title: "Land Lease - 5 Acres",
      amount: 150000,
      counterparty: "Alhaji Bello",
      status: "completed",
      date: "2025-01-10",
      txHash: "0x77df5678...",
      details: "2-year lease agreement",
      category: "real_estate",
      progress: 100
    },
    {
      id: 3,
      type: "hire",
      title: "Tractor Rental",
      amount: -25000,
      counterparty: "Equipment Hub Ltd",
      status: "completed",
      date: "2025-01-08",
      txHash: "0x45cd9012...",
      details: "3 days rental for plowing",
      category: "equipment",
      progress: 100
    },
    {
      id: 4,
      type: "purchase",
      title: "NPK Fertilizer",
      amount: -45000,
      counterparty: "AgroSupply Co.",
      status: "pending",
      date: "2025-01-05",
      txHash: "0x23ef3456...",
      details: "50kg bags - Delivery pending",
      category: "inputs",
      progress: 60
    },
    {
      id: 5,
      type: "loan",
      title: "Emergency Loan",
      amount: 100000,
      counterparty: "MicroFinance Co.",
      status: "pending",
      date: "2025-01-03",
      txHash: "0x89ab7890...",
      details: "For irrigation system repair",
      category: "emergency",
      progress: 30
    }
  ];

  // Enhanced analytics data
  const analytics = {
    monthlyEarnings: [65000, 89000, 120000, 95000, 110000, 145000],
    expenseBreakdown: {
      labor: 45,
      equipment: 25,
      fertilizers: 20,
      other: 10
    },
    transactionTypes: {
      loans: 35,
      land: 20,
      hires: 25,
      purchases: 20
    },
    performanceMetrics: {
      yield: 85,
      efficiency: 78,
      sustainability: 92
    }
  };

  // Recent activities for activity feed
  const recentActivities = [
    {
      id: 1,
      type: "file_upload",
      description: "Uploaded soil analysis report",
      time: "2 hours ago",
      icon: "📄"
    },
    {
      id: 2,
      type: "transaction",
      description: "Loan application approved",
      time: "5 hours ago",
      icon: "✅"
    },
    {
      id: 3,
      type: "verification",
      description: "Land documents verified",
      time: "1 day ago",
      icon: "🔒"
    },
    {
      id: 4,
      type: "payment",
      description: "Received payment for maize supply",
      time: "2 days ago",
      icon: "💰"
    }
  ];

  // Filter transactions based on selection
  const filteredTransactions = selectedTransactionType === "all" 
    ? transactions 
    : transactions.filter(tx => tx.type === selectedTransactionType);

  // Quick action handlers
  const handleQuickAction = (action) => {
    switch(action) {
      case 'share_file':
        setShowFileUpload(true);
        break;
      case 'apply_loan':
        setShowLoanModal(true);
        break;
      case 'land_transaction':
        setActiveTab("transactions");
        setSelectedTransactionType("land");
        break;
      case 'hire_worker':
        setActiveTab("transactions");
        setSelectedTransactionType("hire");
        break;
      default:
        break;
    }
  };

  const renderDashboard = () => (
    <div className="p-4 space-y-6">
      {/* Enhanced Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl font-bold">Welcome back, {dashboardData.farmerName}! 👋</h1>
          <p className="text-blue-100 mt-2">Your agricultural data and transactions at a glance</p>
          <div className="flex items-center space-x-4 mt-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">ID: {dashboardData.farmerId}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Wallet: {dashboardData.walletId}</span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
              Total Earnings: ₦{dashboardData.totalEarnings}
            </span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`bg-transparent border ${stat.color} rounded-xl p-4 hover:scale-105 transition-transform duration-200 cursor-pointer`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300 font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                {stat.subtitle && (
                  <p className="text-xs text-gray-400 mt-1">{stat.subtitle}</p>
                )}
                {stat.trend && (
                  <p className="text-xs text-green-400 mt-1">{stat.trend}</p>
                )}
                <p className="text-xs text-gray-500 mt-2">{stat.description}</p>
              </div>
              <div className="text-2xl">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Quick Actions */}
      <div className="border border-gray-500 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
          <span className="bg-yellow-500 text-black text-xs rounded-full px-2 py-1">
            {dashboardData.pendingActions} Pending
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => handleQuickAction('share_file')}
            className="bg-transparent border border-gray-500 hover:border-blue-400 text-white py-3 rounded-lg transition-all duration-200 hover:bg-blue-500/10"
          >
            📁 Share File
          </button>
          <button 
            onClick={() => handleQuickAction('apply_loan')}
            className="bg-transparent border border-gray-500 hover:border-green-400 text-white py-3 rounded-lg transition-all duration-200 hover:bg-green-500/10"
          >
            💰 Apply Loan
          </button>
          <button 
            onClick={() => handleQuickAction('land_transaction')}
            className="bg-transparent border border-gray-500 hover:border-purple-400 text-white py-3 rounded-lg transition-all duration-200 hover:bg-purple-500/10"
          >
            🏠 Land Transaction
          </button>
          <button 
            onClick={() => handleQuickAction('hire_worker')}
            className="bg-transparent border border-gray-500 hover:border-orange-400 text-white py-3 rounded-lg transition-all duration-200 hover:bg-orange-500/10"
          >
            👥 Hire Worker
          </button>
        </div>
      </div>

      {/* Two Column Layout for Transactions and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="border border-gray-500 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
            <select 
              value={selectedTransactionType}
              onChange={(e) => setSelectedTransactionType(e.target.value)}
              className="bg-transparent border border-gray-500 text-white rounded-lg px-3 py-1 text-sm"
            >
              <option value="all" className="bg-gray-800">All Types</option>
              <option value="loan" className="bg-gray-800">Loans</option>
              <option value="land" className="bg-gray-800">Land</option>
              <option value="hire" className="bg-gray-800">Hires</option>
              <option value="purchase" className="bg-gray-800">Purchases</option>
            </select>
          </div>
          
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredTransactions.map(transaction => (
              <div key={transaction.id} className="border border-gray-600 rounded-lg p-3 hover:border-gray-500 transition-all duration-200 hover:bg-gray-800/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'loan' ? 'bg-green-500/20' :
                      transaction.type === 'land' ? 'bg-blue-500/20' :
                      transaction.type === 'hire' ? 'bg-purple-500/20' : 'bg-orange-500/20'
                    }`}>
                      <span className={`text-sm ${
                        transaction.type === 'loan' ? 'text-green-400' :
                        transaction.type === 'land' ? 'text-blue-400' :
                        transaction.type === 'hire' ? 'text-purple-400' : 'text-orange-400'
                      }`}>
                        {transaction.type === 'loan' ? '🏦' :
                         transaction.type === 'land' ? '🏠' :
                         transaction.type === 'hire' ? '👥' : '🛒'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-white">{transaction.title}</p>
                      <p className="text-xs text-gray-400">{transaction.counterparty}</p>
                      <p className="text-xs text-gray-500">{transaction.details}</p>
                      {/* Progress bar for pending transactions */}
                      {transaction.status === 'pending' && (
                        <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                          <div 
                            className="bg-yellow-500 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${transaction.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}₦{Math.abs(transaction.amount).toLocaleString()}
                    </p>
                    <p className={`text-xs px-2 py-1 rounded-full ${
                      transaction.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      transaction.status === 'approved' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {transaction.status}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{transaction.date}</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                  <span>Tx: {transaction.txHash}</span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities & Performance */}
        <div className="space-y-6">
          {/* Recent Activities */}
          <div className="border border-gray-500 rounded-xl p-4">
            <h2 className="text-lg font-semibold text-white mb-4">Recent Activities</h2>
            <div className="space-y-3">
              {recentActivities.map(activity => (
                <div key={activity.id} className="flex items-center space-x-3 p-2 hover:bg-gray-800/30 rounded-lg transition-colors">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-sm">{activity.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="border border-gray-500 rounded-xl p-4">
            <h2 className="text-lg font-semibold text-white mb-4">Farm Performance</h2>
            <div className="space-y-3">
              {Object.entries(analytics.performanceMetrics).map(([metric, value]) => (
                <div key={metric} className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 capitalize">{metric}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          value >= 80 ? 'bg-green-500' :
                          value >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium ${
                      value >= 80 ? 'text-green-400' :
                      value >= 60 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Analytics Overview */}
      <div className="border border-gray-500 rounded-xl p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Financial Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-sm text-gray-300 mb-2">Monthly Earnings Trend</h3>
            <div className="flex items-end space-x-1 h-16">
              {analytics.monthlyEarnings.map((amount, index) => (
                <div 
                  key={index}
                  className="flex-1 bg-gradient-to-t from-green-500 to-green-600 rounded-t flex items-end justify-center hover:from-green-400 hover:to-green-500 transition-colors"
                  style={{ height: `${(amount / 150000) * 100}%` }}
                >
                  <span className="text-xs text-white -mb-5 hidden group-hover:block">₦{(amount / 1000).toFixed(0)}k</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>Jan</span>
              <span>Jun</span>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-sm text-gray-300 mb-2">Expense Breakdown</h3>
            <div className="space-y-2">
              {Object.entries(analytics.expenseBreakdown).map(([category, percentage]) => (
                <div key={category} className="flex items-center justify-between group">
                  <span className="text-xs text-gray-400 capitalize">{category}</span>
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        category === 'labor' ? 'bg-blue-500 group-hover:bg-blue-400' :
                        category === 'equipment' ? 'bg-purple-500 group-hover:bg-purple-400' :
                        category === 'fertilizers' ? 'bg-green-500 group-hover:bg-green-400' : 'bg-orange-500 group-hover:bg-orange-400'
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-white">{percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-sm text-gray-300 mb-2">Transaction Types</h3>
            <div className="space-y-2">
              {Object.entries(analytics.transactionTypes).map(([type, percentage]) => (
                <div key={type} className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 capitalize">{type}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          type === 'loans' ? 'bg-green-500' :
                          type === 'land' ? 'bg-blue-500' :
                          type === 'hires' ? 'bg-purple-500' : 'bg-orange-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-white">{percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Files Section
  const renderFiles = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold text-white mb-4">Secure File Management</h2>
      <div className="border border-gray-500 rounded-xl p-6 text-center">
        <div className="text-6xl mb-4">📁</div>
        <p className="text-gray-400 mb-4">Encrypted file storage and sharing with BlockDAG verification</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-transparent border border-blue-500 hover:border-blue-400 text-blue-400 px-6 py-3 rounded-lg transition-all duration-200 hover:bg-blue-500/10">
            📤 Upload New File
          </button>
          <button className="bg-transparent border border-green-500 hover:border-green-400 text-green-400 px-6 py-3 rounded-lg transition-all duration-200 hover:bg-green-500/10">
            🔍 View All Files
          </button>
        </div>
      </div>
    </div>
  );

  // Enhanced Transactions Section
  const renderTransactions = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold text-white mb-4">Transaction History & Analytics</h2>
      <div className="border border-gray-500 rounded-xl p-6">
        <div className="text-center">
          <div className="text-4xl mb-4">💼</div>
          <p className="text-gray-400 mb-4">Complete transaction ledger with BlockDAG verification and advanced analytics</p>
          <button className="bg-transparent border border-purple-500 hover:border-purple-400 text-purple-400 px-6 py-3 rounded-lg transition-all duration-200 hover:bg-purple-500/10">
            📊 View Detailed Analytics
          </button>
        </div>
      </div>
    </div>
  );

  // Enhanced Notifications Section
  const renderNotifications = () => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Notifications & Alerts</h2>
        <div className="flex items-center space-x-2">
          <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {dashboardData.notifications}
          </span>
          <button className="text-xs text-gray-400 hover:text-white transition-colors">
            Mark all as read
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <div className="border border-gray-500 rounded-xl p-4 hover:border-blue-400 transition-colors">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
              <span className="text-blue-400">🔔</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-medium text-white">Loan Application Approved</p>
                <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">New</span>
              </div>
              <p className="text-sm text-gray-400">Your crop production loan of ₦500,000 has been approved and funds are available</p>
              <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-500 rounded-xl p-4 hover:border-green-400 transition-colors">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <span className="text-green-400">💰</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-white">Payment Received</p>
              <p className="text-sm text-gray-400">You received ₦75,000 for maize supply to AgroMart - Transaction verified on BlockDAG</p>
              <p className="text-xs text-gray-500 mt-1">1 day ago</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-500 rounded-xl p-4 hover:border-orange-400 transition-colors">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
              <span className="text-orange-400">📊</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-white">Compliance Update</p>
              <p className="text-sm text-gray-400">Your compliance score increased by 5% - Excellent farm management practices!</p>
              <p className="text-xs text-gray-500 mt-1">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Profile Section
  const renderProfile = () => (
    <div className="p-4">
      <h2 className="text-xl font-bold text-white mb-4">Profile & Verification</h2>
      <div className="border border-gray-500 rounded-xl p-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
            <span className="text-white text-3xl">👨‍🌾</span>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#0A144A]"></div>
          </div>
          <h3 className="text-lg font-semibold text-white">{dashboardData.farmerName}</h3>
          <p className="text-gray-400">{dashboardData.farmerId}</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">✅ Verified Farmer</span>
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">KYC Complete</span>
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
            <span className="text-gray-400">Wallet ID:</span>
            <span className="text-white text-sm font-mono">{dashboardData.walletId}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
            <span className="text-gray-400">Compliance Score:</span>
            <span className="text-green-400 font-semibold">{dashboardData.complianceScore}%</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
            <span className="text-gray-400">Total Earnings:</span>
            <span className="text-green-400 font-semibold">₦{dashboardData.totalEarnings}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
            <span className="text-gray-400">Member Since:</span>
            <span className="text-white">January 2024</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="bg-transparent border border-gray-500 hover:border-blue-400 text-white py-3 rounded-lg transition-all duration-200 hover:bg-blue-500/10">
            Edit Profile
          </button>
          <button className="bg-transparent border border-gray-500 hover:border-green-400 text-white py-3 rounded-lg transition-all duration-200 hover:bg-green-500/10">
            Security Settings
          </button>
          <button className="bg-transparent border border-gray-500 hover:border-purple-400 text-white py-3 rounded-lg transition-all duration-200 hover:bg-purple-500/10">
            Documents
          </button>
          <button className="bg-transparent border border-red-500 hover:border-red-400 text-red-400 py-3 rounded-lg transition-all duration-200 hover:bg-red-500/10">
            Logout
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A144A] to-[#000000] pb-20">
      {/* Enhanced Header */}
      <div className="bg-transparent p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">ASDTS-BDAG</h1>
            <p className="text-sm text-gray-400">Agricultural Data & Transactions Platform</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-white">{dashboardData.farmerName}</p>
              <p className="text-xs text-gray-400">Farmer</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative">
              <span className="text-white font-semibold">F</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0A144A]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen">
        {activeTab === "dashboard" && renderDashboard()}
        {activeTab === "files" && renderFiles()}
        {activeTab === "transactions" && renderTransactions()}
        {activeTab === "notifications" && renderNotifications()}
        {activeTab === "profile" && renderProfile()}
      </div>

      {/* Enhanced Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0A144A] border-t border-gray-700 px-4 py-3 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          {[
            { id: "dashboard", icon: "📊", label: "Dashboard" },
            { id: "files", icon: "📁", label: "Files" },
            { id: "transactions", icon: "💰", label: "Transactions" },
            { id: "notifications", icon: "🔔", label: "Alerts" },
            { id: "profile", icon: "👤", label: "Profile" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                activeTab === tab.id 
                  ? "text-blue-400 bg-blue-500/20 border border-blue-500/50" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;