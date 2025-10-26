import React, { useState } from "react";

const OrganizationDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedFileFilter, setSelectedFileFilter] = useState("all");
  const [selectedTransactionFilter, setSelectedTransactionFilter] = useState("all");
  const [showLoanModal, setShowLoanModal] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);

  // Mock data for organization dashboard
  const orgData = {
    name: "Yobe State Ministry of Agriculture",
    orgId: "ORG001",
    walletId: "0x1a2b3c4d5e6f7890",
    role: "Admin",
    complianceLevel: 96,
    notifications: 8
  };

  // Dashboard overview stats
  const overviewStats = [
    {
      title: "Secure Files Received",
      value: "980",
      icon: "📁",
      color: "border-blue-500",
      trend: "+15%",
      description: "Encrypted documents"
    },
    {
      title: "Registered Farmers",
      value: "1,247",
      icon: "👨‍🌾",
      color: "border-green-500",
      trend: "+8%",
      description: "Verified accounts"
    },
    {
      title: "Transactions Processed",
      value: "2,350",
      icon: "💰",
      color: "border-purple-500",
      trend: "+22%",
      description: "All activities"
    },
    {
      title: "Pending Approvals",
      value: "23",
      icon: "⏳",
      color: "border-orange-500",
      description: "Require attention"
    },
    {
      title: "Compliance Level",
      value: `${orgData.complianceLevel}%`,
      icon: "🔐",
      color: "border-cyan-500",
      description: "ISO/NIST Standards"
    },
    {
      title: "Active Contracts",
      value: "156",
      icon: "📝",
      color: "border-pink-500",
      trend: "+5%",
      description: "Smart contracts"
    }
  ];

  // Files data
  const filesData = [
    {
      id: 1,
      fileName: "land_ownership_certificate.pdf",
      sender: "Sagir Muhammad Kabir",
      farmerId: "FARM-001",
      fileType: "Land Document",
      uploadDate: "2025-01-15",
      fileHash: "0xa1b2c3d4e5f67890",
      verificationStatus: "verified",
      accessCount: 3,
      size: "2.4 MB",
      encrypted: true
    },
    {
      id: 2,
      fileName: "loan_application_form.docx",
      sender: "Amina Bello",
      farmerId: "FARM-002",
      fileType: "Loan Application",
      uploadDate: "2025-01-14",
      fileHash: "0xb2c3d4e5f67890a1",
      verificationStatus: "pending",
      accessCount: 1,
      size: "1.2 MB",
      encrypted: true
    },
    {
      id: 3,
      fileName: "crop_yield_report.xlsx",
      sender: "Yobe Farmers Co-op",
      farmerId: "COOP-001",
      fileType: "Research Data",
      uploadDate: "2025-01-13",
      fileHash: "0xc3d4e5f67890a1b2",
      verificationStatus: "verified",
      accessCount: 5,
      size: "4.7 MB",
      encrypted: true
    },
    {
      id: 4,
      fileName: "subsidy_application.pdf",
      sender: "Ibrahim Sani",
      farmerId: "FARM-003",
      fileType: "Subsidy Form",
      uploadDate: "2025-01-12",
      fileHash: "0xd4e5f67890a1b2c3",
      verificationStatus: "tampered",
      accessCount: 2,
      size: "1.8 MB",
      encrypted: true
    }
  ];

  // Loan requests data
  const loanRequests = [
    {
      id: 1,
      farmerName: "Sagir Muhammad Kabir",
      farmerId: "FARM-001",
      amount: 500000,
      purpose: "Fertilizer and equipment purchase",
      status: "pending",
      submittedDate: "2025-01-15",
      documents: ["land_cert.pdf", "income_statement.pdf"],
      riskScore: "Low",
      complianceCheck: "passed"
    },
    {
      id: 2,
      farmerName: "Amina Bello",
      farmerId: "FARM-002",
      amount: 300000,
      purpose: "Irrigation system installation",
      status: "pending",
      submittedDate: "2025-01-14",
      documents: ["land_lease.pdf"],
      riskScore: "Medium",
      complianceCheck: "passed"
    },
    {
      id: 3,
      farmerName: "Ibrahim Sani",
      farmerId: "FARM-003",
      amount: 750000,
      purpose: "Greenhouse construction",
      status: "approved",
      submittedDate: "2025-01-10",
      documents: ["land_cert.pdf", "business_plan.pdf"],
      riskScore: "Low",
      complianceCheck: "passed"
    }
  ];

  // Farmers data
  const farmersData = [
    {
      id: 1,
      name: "Sagir Muhammad Kabir",
      farmerId: "FARM-001",
      walletAddress: "0x1a2b3c4d5e6f7890",
      verificationStatus: "verified",
      registrationDate: "2024-01-15",
      landSize: "5 acres",
      totalTransactions: 45,
      complianceScore: 92,
      lastActive: "2025-01-15"
    },
    {
      id: 2,
      name: "Amina Bello",
      farmerId: "FARM-002",
      walletAddress: "0x2b3c4d5e6f7890a1",
      verificationStatus: "verified",
      registrationDate: "2024-02-20",
      landSize: "3 acres",
      totalTransactions: 28,
      complianceScore: 88,
      lastActive: "2025-01-14"
    },
    {
      id: 3,
      name: "Ibrahim Sani",
      farmerId: "FARM-003",
      walletAddress: "0x3c4d5e6f7890a1b2",
      verificationStatus: "pending",
      registrationDate: "2024-03-10",
      landSize: "8 acres",
      totalTransactions: 15,
      complianceScore: 76,
      lastActive: "2025-01-13"
    },
    {
      id: 4,
      name: "Fatima Usman",
      farmerId: "FARM-004",
      walletAddress: "0x4d5e6f7890a1b2c3",
      verificationStatus: "suspended",
      registrationDate: "2024-01-25",
      landSize: "2 acres",
      totalTransactions: 8,
      complianceScore: 65,
      lastActive: "2025-01-10"
    }
  ];

  // Analytics data
  const analyticsData = {
    filesPerMonth: [45, 67, 89, 78, 92, 112, 98, 87, 105, 120, 134, 145],
    transactionTypes: {
      loans: 35,
      land: 25,
      hires: 20,
      purchases: 15,
      others: 5
    },
    farmerRegistrations: [23, 45, 34, 56, 67, 78, 89, 102, 95, 110, 124, 145],
    regionalDistribution: {
      "Damaturu": 45,
      "Potiskum": 32,
      "Gashua": 28,
      "Nguru": 22,
      "Others": 21
    }
  };

  // Audit logs
  const auditLogs = [
    {
      id: 1,
      action: "File Decrypted",
      user: "Admin User",
      timestamp: "2025-01-15 14:30:25",
      details: "land_ownership_certificate.pdf",
      status: "success",
      ipAddress: "192.168.1.100"
    },
    {
      id: 2,
      action: "Loan Approved",
      user: "Loan Officer",
      timestamp: "2025-01-15 13:15:10",
      details: "Loan #LN-001 - ₦500,000",
      status: "success",
      ipAddress: "192.168.1.101"
    },
    {
      id: 3,
      action: "Farmer Verified",
      user: "KYC Manager",
      timestamp: "2025-01-15 11:45:30",
      details: "Farmer ID: FARM-002",
      status: "success",
      ipAddress: "192.168.1.102"
    },
    {
      id: 4,
      action: "Failed Login Attempt",
      user: "Unknown",
      timestamp: "2025-01-15 10:20:15",
      details: "Invalid credentials",
      status: "failed",
      ipAddress: "192.168.1.105"
    }
  ];

  // Filter files based on selection
  const filteredFiles = selectedFileFilter === "all" 
    ? filesData 
    : filesData.filter(file => file.verificationStatus === selectedFileFilter);

  // Filter transactions based on selection
  const filteredLoans = selectedTransactionFilter === "all"
    ? loanRequests
    : loanRequests.filter(loan => loan.status === selectedTransactionFilter);

  const handleFileAction = (fileId, action) => {
    console.log(`Action: ${action} on file: ${fileId}`);
    // Implement file actions
  };

  const handleLoanAction = (loanId, action) => {
    const loan = loanRequests.find(l => l.id === loanId);
    setSelectedLoan(loan);
    if (action === 'review') {
      setShowLoanModal(true);
    }
    console.log(`Action: ${action} on loan: ${loanId}`);
  };

  const handleFarmerAction = (farmerId, action) => {
    console.log(`Action: ${action} on farmer: ${farmerId}`);
  };

  const renderDashboard = () => (
    <div className="p-4 space-y-6">
      {/* Enhanced Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl font-bold">{orgData.name}</h1>
          <p className="text-blue-100 mt-2">Organization Control Center - Secure Agricultural Data Management</p>
          <div className="flex items-center space-x-4 mt-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">ID: {orgData.orgId}</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Role: {orgData.role}</span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
              Compliance: {orgData.complianceLevel}% ISO/NIST
            </span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      </div>

      {/* Overview Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {overviewStats.map((stat, index) => (
          <div key={index} className={`bg-transparent border ${stat.color} rounded-xl p-4 hover:scale-105 transition-transform duration-200`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300 font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
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

      {/* Charts and Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Files Per Month Chart */}
        <div className="border border-gray-500 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Files Shared Per Month</h3>
          <div className="flex items-end space-x-2 h-32">
            {analyticsData.filesPerMonth.map((count, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-600 rounded-t hover:from-blue-400 hover:to-blue-500 transition-colors"
                  style={{ height: `${(count / 150) * 100}%` }}
                ></div>
                <span className="text-xs text-gray-400 mt-1">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction Types Pie Chart */}
        <div className="border border-gray-500 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Transaction Types Distribution</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(analyticsData.transactionTypes).map(([type, percentage]) => (
              <div key={type} className="flex items-center justify-between">
                <span className="text-sm text-gray-300 capitalize">{type}</span>
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
                  <span className="text-sm text-white w-8">{percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Actions */}
        <div className="border border-gray-500 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Pending Actions</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div>
                <p className="font-medium text-white">Loan Approvals</p>
                <p className="text-sm text-gray-400">23 pending requests</p>
              </div>
              <button 
                onClick={() => setActiveTab("transactions")}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Review
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div>
                <p className="font-medium text-white">Farmer Verifications</p>
                <p className="text-sm text-gray-400">15 pending KYC</p>
              </div>
              <button 
                onClick={() => setActiveTab("farmers")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Verify
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
              <div>
                <p className="font-medium text-white">File Validations</p>
                <p className="text-sm text-gray-400">8 files need review</p>
              </div>
              <button 
                onClick={() => setActiveTab("files")}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Check
              </button>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="border border-gray-500 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-white mb-4">System Health</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>BlockDAG Node Status</span>
                <span className="text-green-400">Online</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>API Response Time</span>
                <span className="text-green-400">128ms</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Data Encryption</span>
                <span className="text-green-400">AES-256 Active</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFiles = () => (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Secure File Management</h2>
        <select 
          value={selectedFileFilter}
          onChange={(e) => setSelectedFileFilter(e.target.value)}
          className="bg-transparent border border-gray-500 text-white rounded-lg px-3 py-2 text-sm"
        >
          <option value="all" className="bg-gray-800">All Files</option>
          <option value="verified" className="bg-gray-800">Verified</option>
          <option value="pending" className="bg-gray-800">Pending</option>
          <option value="tampered" className="bg-gray-800">Tampered</option>
        </select>
      </div>

      <div className="border border-gray-500 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">File Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Sender</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Type</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredFiles.map(file => (
                <tr key={file.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">{file.fileName}</p>
                      <p className="text-xs text-gray-400">Hash: {file.fileHash}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm text-white">{file.sender}</p>
                    <p className="text-xs text-gray-400">{file.farmerId}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-300">{file.fileType}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      file.verificationStatus === 'verified' ? 'bg-green-500/20 text-green-400' :
                      file.verificationStatus === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {file.verificationStatus === 'verified' ? '✅ Verified' :
                       file.verificationStatus === 'pending' ? '⏳ Pending' : '❌ Tampered'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm text-gray-300">{file.uploadDate}</p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleFileAction(file.id, 'decrypt')}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        🔓 Decrypt
                      </button>
                      <button 
                        onClick={() => handleFileAction(file.id, 'verify')}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        ✅ Verify
                      </button>
                      <button 
                        onClick={() => handleFileAction(file.id, 'audit')}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        📜 Audit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTransactions = () => (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Transaction Management</h2>
        <select 
          value={selectedTransactionFilter}
          onChange={(e) => setSelectedTransactionFilter(e.target.value)}
          className="bg-transparent border border-gray-500 text-white rounded-lg px-3 py-2 text-sm"
        >
          <option value="all" className="bg-gray-800">All Transactions</option>
          <option value="pending" className="bg-gray-800">Pending</option>
          <option value="approved" className="bg-gray-800">Approved</option>
          <option value="rejected" className="bg-gray-800">Rejected</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Loan Management */}
        <div className="lg:col-span-2 border border-gray-500 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Loan Requests</h3>
          <div className="space-y-4">
            {filteredLoans.map(loan => (
              <div key={loan.id} className="border border-gray-600 rounded-lg p-4 hover:border-gray-500 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">{loan.farmerName}</p>
                    <p className="text-sm text-gray-400">{loan.farmerId}</p>
                    <p className="text-sm text-gray-500 mt-1">{loan.purpose}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-400">₦{loan.amount.toLocaleString()}</p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      loan.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                      loan.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {loan.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{loan.submittedDate}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex space-x-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      loan.riskScore === 'Low' ? 'bg-green-500/20 text-green-400' :
                      loan.riskScore === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      Risk: {loan.riskScore}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      loan.complianceCheck === 'passed' ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      Compliance: {loan.complianceCheck}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleLoanAction(loan.id, 'review')}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Review
                    </button>
                    <button 
                      onClick={() => handleLoanAction(loan.id, 'approve')}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleLoanAction(loan.id, 'reject')}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction Analytics */}
        <div className="space-y-6">
          <div className="border border-gray-500 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Total Loan Value</span>
                <span className="text-green-400 font-semibold">₦1.5M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Avg. Processing Time</span>
                <span className="text-blue-400 font-semibold">2.3 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Approval Rate</span>
                <span className="text-green-400 font-semibold">78%</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-500 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Approvals</h3>
            <div className="space-y-2">
              {loanRequests.filter(l => l.status === 'approved').slice(0, 3).map(loan => (
                <div key={loan.id} className="flex justify-between items-center p-2 hover:bg-gray-800/30 rounded">
                  <div>
                    <p className="text-sm text-white">{loan.farmerName}</p>
                    <p className="text-xs text-gray-400">₦{loan.amount.toLocaleString()}</p>
                  </div>
                  <span className="text-xs text-green-400">Approved</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFarmers = () => (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold text-white">Farmer Management System</h2>

      <div className="border border-gray-500 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Farmer</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Wallet</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Land Size</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Compliance</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {farmersData.map(farmer => (
                <tr key={farmer.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">{farmer.name}</p>
                      <p className="text-xs text-gray-400">{farmer.farmerId}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm text-gray-300 font-mono">{farmer.walletAddress.slice(0, 12)}...</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      farmer.verificationStatus === 'verified' ? 'bg-green-500/20 text-green-400' :
                      farmer.verificationStatus === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {farmer.verificationStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-300">{farmer.landSize}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            farmer.complianceScore >= 80 ? 'bg-green-500' :
                            farmer.complianceScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${farmer.complianceScore}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-white w-8">{farmer.complianceScore}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleFarmerAction(farmer.id, 'verify')}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Verify
                      </button>
                      <button 
                        onClick={() => handleFarmerAction(farmer.id, 'view')}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Profile
                      </button>
                      <button 
                        onClick={() => handleFarmerAction(farmer.id, 'suspend')}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Suspend
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAudit = () => (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold text-white">Audit & Compliance Center</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 border border-gray-500 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Audit Logs</h3>
          <div className="space-y-3">
            {auditLogs.map(log => (
              <div key={log.id} className="border border-gray-600 rounded-lg p-3 hover:border-gray-500 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">{log.action}</p>
                    <p className="text-sm text-gray-400">{log.details}</p>
                    <p className="text-xs text-gray-500 mt-1">{log.timestamp} • {log.ipAddress}</p>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    log.status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {log.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-gray-500 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Compliance Tools</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
                Run Compliance Check
              </button>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-colors">
                Download Audit Report
              </button>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors">
                Flag Non-Compliant Data
              </button>
            </div>
          </div>

          <div className="border border-gray-500 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-white mb-4">System Compliance</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>ISO 27001 Compliance</span>
                  <span className="text-green-400">96%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>NIST Framework</span>
                  <span className="text-green-400">94%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>Data Integrity</span>
                  <span className="text-green-400">98%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold text-white">System Administration</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Management */}
        <div className="border border-gray-500 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Key & Wallet Management</h3>
          <div className="space-y-4">
            <div className="p-3 bg-gray-800/50 rounded-lg">
              <p className="text-sm text-gray-300">Organization Public Key</p>
              <p className="text-white font-mono text-sm mt-1">{orgData.walletId}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
                Generate New Key Pair
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-colors">
                Backup Keys
              </button>
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="border border-gray-500 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-white mb-4">User Management</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
              <div>
                <p className="text-white">Admin Users</p>
                <p className="text-sm text-gray-400">Full system access</p>
              </div>
              <span className="text-green-400">3 users</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
              <div>
                <p className="text-white">Reviewers</p>
                <p className="text-sm text-gray-400">Approval permissions</p>
              </div>
              <span className="text-blue-400">8 users</span>
            </div>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors">
              Manage Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A144A] to-[#000000] pb-20">
      {/* Header */}
      <div className="bg-transparent p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">ASDTS-BDAG</h1>
            <p className="text-sm text-gray-400">Organization Dashboard - {orgData.name}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-white">{orgData.role} User</p>
              <p className="text-xs text-gray-400">ID: {orgData.orgId}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative">
              <span className="text-white font-semibold">O</span>
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
        {activeTab === "farmers" && renderFarmers()}
        {activeTab === "audit" && renderAudit()}
        {activeTab === "settings" && renderSettings()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0A144A] border-t border-gray-700 px-4 py-3 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          {[
            { id: "dashboard", icon: "📊", label: "Overview" },
            { id: "files", icon: "📁", label: "Files" },
            { id: "transactions", icon: "💰", label: "Transactions" },
            { id: "farmers", icon: "👨‍🌾", label: "Farmers" },
            { id: "audit", icon: "🔍", label: "Audit" },
            { id: "settings", icon: "⚙️", label: "Settings" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-xl transition-all duration-200 ${
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

export default OrganizationDashboard;