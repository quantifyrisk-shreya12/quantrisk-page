export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  category: string;
  codeUrl: string;
  createdDate: string;
  youtubeVideoId?: string;
  codeSnippets?: {
    language: string;
    code: string;
  }[];
}

export const projectsData: Project[] = [
  {
  id: 1,
  title: 'Energy Asset Valuation Dashboard',
  description: 'A comprehensive Streamlit dashboard for energy asset strategy and valuation, featuring real-time market analysis, DCF modeling, Monte Carlo simulations, and portfolio optimization for power generation assets.',
  longDescription: `This project demonstrates end-to-end capabilities for Asset Strategy & Valuation roles in the energy sector. Built as a comprehensive Streamlit dashboard, it provides real-time analysis of European power generation portfolios.

KEY FEATURES:

Real-time Market Analysis
- Live electricity price monitoring via ENTSO-E Transparency Platform API
- Gas and carbon price tracking with volatility analysis
- Spark spread analysis for gas plant economics
- Price forecasting with trend and seasonal pattern detection

Asset Performance Analytics
- Portfolio overview with technology mix and capacity analysis
- Power plant efficiency, availability, and generation metrics
- Merit order positioning and dispatch economics
- Cross-asset benchmarking against portfolio and industry standards

Financial Modeling
- DCF valuation with NPV and IRR calculations
- Monte Carlo simulation for risk assessment
- Sensitivity analysis on key parameters
- LCOE (Levelized Cost of Energy) calculations
- Aggregated portfolio valuation metrics

Strategic Planning
- Market scenario analysis (base case, high/low price, green transition)
- 7-90 day price predictions
- Portfolio optimization recommendations
- Hedging strategy and risk management tools

TECHNICAL ARCHITECTURE:
The dashboard follows a functional programming approach with modular design. The data layer integrates real-time APIs with synthetic fallback data. Financial models use NumPy/SciPy for calculations, while Plotly powers interactive visualizations. Streamlit provides the responsive frontend with multi-column layouts.

SAMPLE PORTFOLIO INCLUDES:
- Maasvlakte 3 (1,070 MW Gas) - Netherlands
- Scholven B/C (760 MW Gas) - Germany
- Grain Power (1,275 MW Gas) - UK
- Nord Stream Wind (385 MW Wind) - Germany
- Provence Solar (150 MW Solar) - France`,
  image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
  techStack: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy', 'SciPy'],
  category: 'Data Science',
  codeUrl: 'https://github.com/quantifyrisk-shreya12/Energy-Asset-Valuation-Dashboard',
  createdDate: 'August 2025',
  codeSnippets: [
    {
      language: 'python',
      code: `import streamlit as st
import pandas as pd
import numpy as np
from scipy import stats

# DCF Valuation Model
def calculate_dcf_valuation(cash_flows, discount_rate, terminal_growth):
    npv = 0
    for year, cf in enumerate(cash_flows, 1):
        npv += cf / ((1 + discount_rate) ** year)
    
    # Terminal value (Gordon Growth Model)
    terminal_value = cash_flows[-1] * (1 + terminal_growth) / (discount_rate - terminal_growth)
    npv += terminal_value / ((1 + discount_rate) ** len(cash_flows))
    
    return npv

# Monte Carlo Simulation for Risk Assessment
def monte_carlo_valuation(base_cf, volatility, iterations=10000):
    results = []
    for _ in range(iterations):
        shocked_cf = base_cf * np.random.normal(1, volatility)
        npv = calculate_dcf_valuation(shocked_cf, 0.07, 0.02)
        results.append(npv)
    
    return {
        'mean': np.mean(results),
        'std': np.std(results),
        'var_95': np.percentile(results, 5),
        'var_99': np.percentile(results, 1)
    }`
    }
  ]
},
{
  id: 2,
  title: 'Option Pricing - Greek Risk Analyzer',
  description: 'A comprehensive quantitative finance dashboard for option pricing model validation, implementing Black-Scholes and Heston stochastic volatility models with FFT-based pricing, model calibration, and regulatory-compliant validation frameworks.',
  longDescription: `This advanced quantitative finance platform demonstrates professional-grade option pricing model validation capabilities essential for Model Risk Management roles in investment banking. Built with Streamlit, it implements and validates two fundamental option pricing models used in derivatives trading desks.

HOW THE PROJECT WORKS:

1. Live Market Data Integration
The platform fetches real-time financial data from multiple sources:
- FRED API: Retrieves the current 10-Year Treasury rate as the risk-free rate
- Yahoo Finance API: Gets live stock prices for underlying assets (AAPL, MSFT, GOOGL, TSLA, CBK.DE)
- Synthetic Option Data Generation: Creates realistic option price data with volatility smile patterns for validation purposes

2. Black-Scholes Model Implementation
The classic Black-Scholes formula prices European options using geometric Brownian motion assumptions:
- Assumes constant volatility and risk-free rate
- Uses the closed-form solution for European call/put options
- Calculates complete Greeks (Delta, Gamma, Theta, Vega, Rho) for risk management

Mathematical Foundation:
d1 = [ln(S/K) + (r + sigma^2/2)T] / (sigma*sqrt(T))
d2 = d1 - sigma*sqrt(T)
Call Price = S*N(d1) - K*e^(-rT)*N(d2)
Put Price = K*e^(-rT)*N(-d2) - S*N(-d1)

3. Heston Stochastic Volatility Model
A more advanced model that addresses Black-Scholes' limitation of constant volatility:
- Models volatility itself as a random process (mean-reverting CIR process)
- Captures the volatility smile/skew observed in real markets
- Uses Fast Fourier Transform (FFT) for efficient pricing across multiple strikes

The Heston Dynamics:
dS(t) = r*S(t)*dt + sqrt(v(t))*S(t)*dW1(t)
dv(t) = kappa*(theta - v(t))*dt + sigma*sqrt(v(t))*dW2(t)

Where:
- v(t) = variance (volatility squared)
- kappa = mean reversion speed
- theta = long-term variance
- sigma = volatility of volatility
- rho = correlation between price and variance shocks

FFT-Based Pricing (Carr-Madan Method):
Instead of computing each option price individually (which is computationally expensive), the FFT method:
1. Transforms the pricing problem into frequency domain
2. Evaluates the characteristic function at N points simultaneously
3. Applies inverse FFT to get prices for all strikes in O(N log N) time
4. Uses linear interpolation to find prices for specific strikes

4. Model Calibration Framework
The platform uses a hybrid MLE (Maximum Likelihood Estimation) + MSE (Mean Squared Error) approach:
- Takes market-observed option prices as input
- Defines the negative log-likelihood function comparing model prices to market prices
- Uses L-BFGS-B optimization to find Heston parameters that minimize the error
- Applies parameter bounds to ensure physical validity (e.g., variance must be positive)

Calibrated Parameters:
- v0 (gam0): Initial variance
- kappa: Mean reversion speed
- lambda (lamb): Risk premium parameter
- sigma_v (sig_tilde): Volatility of volatility
- rho: Correlation between price and variance

5. Comprehensive Validation Framework
Industry-standard model validation techniques are implemented:

Cross-Validation Analysis:
- 5-fold cross-validation to assess model generalization
- Out-of-sample testing on unseen data
- Moneyness-based analysis (ITM/ATM/OTM performance)

Performance Metrics:
- RMSE (Root Mean Squared Error): Overall prediction accuracy
- MAE (Mean Absolute Error): Average absolute deviation
- R^2 (Coefficient of Determination): Variance explained by model
- MAPE (Mean Absolute Percentage Error): Percentage-based error

Residual Analysis:
- Examines pricing errors across strike prices
- Identifies systematic biases in model predictions
- Validates model assumptions through diagnostic plots

6. Risk Management Integration
The platform calculates essential risk metrics:

Greeks Calculation:
- Delta: Price sensitivity to underlying movement
- Gamma: Rate of change of Delta
- Theta: Time decay
- Vega: Volatility sensitivity
- Rho: Interest rate sensitivity

VaR and Expected Shortfall:
- Historical simulation-based Value at Risk
- Expected Shortfall (CVaR) for tail risk assessment
- Portfolio-level risk aggregation

7. Interactive 3D Visualization
The dashboard renders dynamic volatility surfaces with strike prices on X-axis, time to maturity on Y-axis, and implied volatility on Z-axis.

TECHNICAL ARCHITECTURE:

Performance Optimizations:
- Numba JIT Compilation: Accelerates numerical computations by compiling Python to machine code
- Vectorized Operations: Uses NumPy for array-based calculations instead of loops
- Caching: Streamlit's @st.cache_data decorator caches API calls and computations

Data Flow:
1. User selects underlying asset -> Fetches live stock price
2. System retrieves risk-free rate -> FRED API call
3. Synthetic option chain generated -> With volatility smile
4. Models price options -> Black-Scholes & Heston(FFT)
5. Calibration optimizes Heston parameters -> MLE+MSE hybrid
6. Validation metrics computed -> Cross-validation & residuals
7. Results visualized -> Interactive Plotly charts

BUSINESS APPLICATIONS:

For Trading Desks:
- Real-time option pricing and Greeks calculation
- Volatility surface analysis for exotic derivatives
- Model-based pricing vs. market price comparison

For Risk Management:
- Model validation following Basel III/FRTB standards
- VaR and Expected Shortfall calculations
- Stress testing with scenario analysis

For Model Validation Teams:
- Comprehensive backtesting framework
- Statistical performance metrics
- Documentation for regulatory compliance`,
  image: "https://raw.githubusercontent.com/quantifyrisk-shreya12/quantrisk-page/main/assets/option_pricing_model_validation.png", 
  techStack: ['Python', 'Streamlit', 'NumPy', 'SciPy', 'Plotly', 'Numba', 'yfinance'],
  category: 'Time series analysis',
  codeUrl: 'https://github.com/quantifyrisk-shreya12/Option-Calibration-validation',
  createdDate: 'September 2025',
  codeSnippets: [
    {
      language: 'python',
      code: `# Heston Characteristic Function (Numba JIT-compiled)
def heston_char(u, S0, T, r, gam0, kappa, lamb, sig_tilde, rho):
    i = 1j
    xi = kappa - lamb * rho * sig_tilde * i * u
    d = np.sqrt(xi**2 - sig_tilde**2 * (u**2 + i * u))
    g = (xi - d) / (xi + d)
    C = r * i * u * T + (gam0 / sig_tilde**2) * ((xi - d) * T - 2 * np.log((1 - g * np.exp(-d * T)) / (1 - g)))
    D = ((xi - d) / sig_tilde**2) * ((1 - np.exp(-d * T)) / (1 - g * np.exp(-d * T)))
    return np.exp(C + D * gam0 + i * u * np.log(S0))

# FFT-Based Heston Option Pricing (Carr-Madan Method)
def european_Heston_FFT_fast(S0, K_array, T, r, gam0, kappa, lamb, sig_tilde, rho, alpha=1.5, N=2**12, dk=0.01):
    K_array = np.asarray(K_array)
    log_S0 = np.log(S0)
    log_K = np.log(K_array)
    
    # Frequency grid
    k = np.arange(N) * dk
    v = k - (alpha + 1) * 1j
    
    # Characteristic function evaluation (vectorized)
    phi = heston_char(v, S0, T, r, gam0, kappa, lamb, sig_tilde, rho)
    
    # Pricing transform
    psi = phi * np.exp(-r * T) / ((alpha + 1j * k) * (alpha + 1j * k + 1))
    
    # FFT calculation
    fft_y = np.fft.fft(psi * np.exp(1j * k * log_S0))
    
    # Interpolate to get prices for specific strikes
    C = np.exp(-alpha * log_K) / np.pi * np.interp(log_K, log_S0 + 2*np.pi*np.arange(N)/(N*dk), np.real(fft_y))
    
    return C

# Model Calibration - Hybrid MLE + MSE
def calibrate_heston(market_prices, strikes, S0, T, r):
    def heston_log_likelihood(params, market_prices, strikes, S0, T, r):
        gam0, kappa, lamb, sig_tilde, rho = params
        model_prices = european_Heston_FFT_fast(S0, strikes, T, r, gam0, kappa, lamb, sig_tilde, rho)
        error_sigma = 0.01 * market_prices
        return 0.5 * np.sum(((market_prices - model_prices) / error_sigma)**2 + np.log(2 * np.pi * error_sigma**2))
    
    x0 = [0.05, 2.0, 0.5, 0.3, -0.5]  # Initial guess
    bounds = [(1e-4, 0.5), (1e-3, 10), (1e-3, 5), (1e-3, 5), (-0.99, 0.99)]
    res = minimize(heston_log_likelihood, x0, method='L-BFGS-B', bounds=bounds, 
                   args=(market_prices, strikes, S0, T, r))
    return res.x, res.fun  # Returns [v0, kappa, lambda, sigma_v, rho]`
    }
  ]
},
{
  id: 3,
  title: 'IFRS 9 Credit Risk Reserve Analysis',
  description: 'Comprehensive credit risk analysis for Retail and Corporate portfolios under IFRS 9 standards, analyzing PD/EAD aggregation, provisioning ratios, and reserve fluctuation drivers using Excel and VBA automation.',
  longDescription: `This project involved leading a comprehensive IFRS 9 credit risk analysis for both Retail and Corporate banking portfolios over a 12-month period. IFRS 9 (International Financial Reporting Standard 9) is the accounting standard that governs how financial institutions recognize and measure expected credit losses.

HOW THE PROJECT WORKS:

1. IFRS 9 Expected Credit Loss (ECL) Framework
IFRS 9 requires banks to calculate expected credit losses based on three key components:
- PD (Probability of Default): The likelihood that a borrower will default on their obligations
- EAD (Exposure at Default): The expected outstanding balance at the time of default
- LGD (Loss Given Default): The percentage of exposure that will be lost if default occurs

The ECL formula is: ECL = PD x EAD x LGD

2. Portfolio Segmentation Analysis
The analysis covered two major portfolio segments:
- Retail Portfolio: Individual consumers, small loans, credit cards, mortgages
- Corporate Portfolio: Business loans, commercial credit facilities, corporate bonds

Each segment required different modeling approaches due to varying risk characteristics and data availability.

3. Key Analysis Components

PD/EAD Aggregation:
- Collected historical default data across 12 months
- Calculated point-in-time PD estimates for each risk grade
- Aggregated EAD by exposure type and time bucket
- Applied macroeconomic overlays to adjust PD estimates

Provisioning Ratio Analysis:
- Calculated provision coverage ratios (Total Provisions / Total EAD)
- Analyzed trends over the 12-month period
- Compared ratios against regulatory benchmarks and peer institutions
- Identified seasonal patterns and cyclical effects

Reserve Fluctuation Drivers:
- Performed attribution analysis to identify causes of reserve changes
- Key drivers analyzed: portfolio growth, credit migration, macroeconomic changes, model updates
- Used variance analysis to quantify each driver's contribution

4. Top-3 Customer Segmentation
Identified the highest-risk customer segments driving volatility:
- Analyzed concentration risk by customer type, industry, and geography
- Ranked segments by their contribution to overall portfolio risk
- Developed risk-adjusted pricing recommendations

5. Forward-Looking Expected Credit Loss (FE) Analysis
The analysis revealed that Forward-Looking Expected Credit Loss (FE) was the primary driver of volatility:
- PVI (Provision Volatility Index) scores: 10.00 for Corporate, 9.99 for Retail
- FE incorporates macroeconomic forecasts into ECL calculations
- Higher volatility due to sensitivity to economic scenarios (GDP growth, unemployment, interest rates)

6. VBA Automation
Developed Excel VBA macros to automate:
- Data extraction from multiple source systems
- PD/EAD/LGD calculations across portfolios
- Report generation and formatting
- Sensitivity analysis and scenario testing

TECHNICAL IMPLEMENTATION:

Data Processing:
- Imported raw credit data from core banking systems
- Applied data quality checks and outlier treatment
- Mapped internal risk grades to PD estimates

Excel Modeling:
- Built waterfall charts showing ECL build-up
- Created pivot tables for multi-dimensional analysis
- Developed scenario comparison matrices

VBA Macros:
- Automated monthly data refresh processes
- Generated standardized regulatory reports
- Created audit trails for model changes

REGULATORY CONTEXT:

IFRS 9 Requirements:
- Requires 12-month ECL for Stage 1 assets (no significant credit deterioration)
- Requires lifetime ECL for Stage 2 and 3 assets
- Mandates forward-looking macroeconomic information
- Requires robust governance and model validation

Business Impact:
- Enabled accurate financial reporting under IFRS 9
- Supported regulatory submissions to central banks
- Informed strategic decisions on capital allocation
- Helped identify portfolio concentrations requiring management action

KEY INSIGHTS:

- FE (Forward-Looking Expected Credit Loss) emerged as the dominant volatility driver
- Corporate portfolio showed slightly higher volatility (PVI: 10.00) than Retail (PVI: 9.99)
- Macroeconomic scenario selection critically impacts reported provisions
- Top customer segments required enhanced monitoring and risk controls`,
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
  techStack: ['MS Excel', 'VBA', 'Financial Modeling', 'Risk Analysis'],
  category: 'Data Science',
  codeUrl: '#',
  createdDate: 'May 2025'
},
{
  id: 4,
  title: 'Portfolio Management and Asset Allocation Strategies',
  description: 'Machine learning-based investor risk tolerance prediction system with hierarchical clustering allocation, Markowitz optimization, and interactive Plotly Dash dashboard deployed on Azure App Services.',
  longDescription: `This comprehensive machine learning solution predicts investor risk tolerance and automates portfolio allocation decisions. The system helps portfolio managers understand investor behavior, standardize allocation processes, and maximize risk-adjusted returns through advanced quantitative techniques.

HOW THE PROJECT WORKS:

1. Investor Risk Tolerance Prediction
The system uses machine learning to classify investors based on their risk appetite:

Data Collection:
- Demographic factors: Age, income, education, employment status
- Financial factors: Net worth, investment experience, time horizon
- Behavioral factors: Risk preference questionnaires, past investment behavior
- Market factors: Current economic conditions, market volatility

K-Means Clustering for Investor Segmentation:
- Applied unsupervised learning to group investors into distinct risk profiles
- Determined optimal number of clusters using elbow method and silhouette analysis
- Created profiles: Conservative, Moderate, Balanced, Growth, Aggressive
- Each cluster has predefined asset allocation guidelines

2. Feature Selection with Principal Component Analysis (PCA)
Before building allocation models, dimensionality reduction was performed:

PCA Implementation:
- Standardized input features to zero mean and unit variance
- Calculated covariance matrix of features
- Computed eigenvalues and eigenvectors
- Selected principal components explaining 95% of variance
- Reduced feature space while preserving information

Benefits:
- Eliminated multicollinearity between correlated features
- Improved model stability and interpretability
- Reduced computational complexity
- Prevented overfitting in subsequent models

3. Eigen-Portfolio Construction
Created optimal portfolios using PCA-derived factors:

Process:
- Applied PCA to historical asset returns
- Extracted eigenvectors representing independent risk factors
- Each eigenvector represents a portfolio (eigen-portfolio)
- Sorted by explained variance (largest eigenvalues first)

Backtesting with Sharpe Ratio:
- Calculated historical returns for each eigen-portfolio
- Computed Sharpe Ratio = (Portfolio Return - Risk-Free Rate) / Portfolio Volatility
- Selected top-performing eigen-portfolios for allocation
- Achieved maximum risk-adjusted returns

4. Hierarchical Clustering-Based Asset Allocation
An alternative to traditional mean-variance optimization:

Algorithm Steps:
1. Calculate asset return correlations
2. Convert correlations to distances: Distance = sqrt(2 * (1 - Correlation))
3. Perform hierarchical clustering using linkage methods (Ward, Average, Complete)
4. Build dendrogram showing asset relationships
5. Apply recursive bisection to allocate capital

Advantages over Markowitz:
- More stable out-of-sample performance
- Better handling of estimation errors in covariance matrix
- Intuitive grouping of similar assets
- Lower turnover and transaction costs

5. Markowitz Mean-Variance Optimization
The classical modern portfolio theory approach:

Mathematical Formulation:
- Objective: Minimize portfolio variance for target return
- Constraints: Sum of weights = 1, individual weight bounds
- Inputs: Expected returns vector, covariance matrix

Implementation:
- Estimated expected returns from historical data
- Calculated sample covariance matrix
- Used quadratic programming solver for optimization
- Generated efficient frontier curve

Out-of-Sample Performance Comparison:
- Split data into training (80%) and testing (20%) periods
- Optimized portfolios on training data
- Evaluated performance on unseen test data
- Compared Sharpe ratios of hierarchical vs Markowitz approaches

6. Interactive Dashboard with Plotly Dash
Built a professional web application for portfolio visualization:

Dashboard Features:
- Asset allocation pie charts by investor risk profile
- Efficient frontier plots with user portfolios
- Performance metrics: Returns, Volatility, Sharpe Ratio, Max Drawdown
- Historical backtesting charts
- Interactive sliders for risk tolerance adjustment
- Real-time portfolio rebalancing recommendations

Azure App Services Deployment:
- Containerized the Dash application
- Deployed to Microsoft Azure cloud platform
- Configured auto-scaling based on user demand
- Implemented authentication for secure access
- Set up CI/CD pipeline for automated updates

TECHNICAL ARCHITECTURE:

Data Pipeline:
- Data cleaning: Handled missing values, outliers, inconsistent formats
- Feature engineering: Created ratios, normalized values, encoded categoricals
- EDA: Visualized distributions, correlations, trends using Matplotlib and Seaborn

Machine Learning Stack:
- Scikit-Learn: PCA, K-Means, hierarchical clustering
- SciPy: Optimization algorithms, statistical functions
- Pandas: Data manipulation and analysis
- NumPy: Numerical computations

Visualization:
- Plotly: Interactive charts and 3D visualizations
- Dash: Web application framework
- HTML/CSS: Custom styling and layout

Cloud Infrastructure:
- Azure App Services: Managed platform for web apps
- Azure Container Registry: Docker image storage
- GitHub Actions: CI/CD automation

BUSINESS VALUE:

For Portfolio Managers:
- Standardized allocation process reduces decision time by 70%
- Data-driven recommendations improve client outcomes
- Automated reporting saves 10+ hours per week

For Investors:
- Personalized portfolios aligned with risk tolerance
- Transparent risk-return tradeoffs
- Regular rebalancing alerts

For Institutions:
- Consistent investment philosophy across advisors
- Regulatory compliance documentation
- Scalable infrastructure supporting thousands of clients

KEY RESULTS:

- Hierarchical clustering showed superior out-of-sample Sharpe ratios compared to Markowitz
- PCA reduced feature dimensionality by 60% while retaining 95% of information
- K-Means identified 5 distinct investor personas with clear allocation guidelines
- Dashboard achieved 99.9% uptime on Azure with sub-second response times`,
  image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop',
  techStack: ['Python', 'Plotly', 'Dash', 'Scikit-Learn', 'Pandas', 'NumPy', 'Azure'],
  category: 'Data Science',
  codeUrl: '#',
  createdDate: 'February 2025'
},
{
  id: 5,
  title: 'Salary Prediction using Multivariate Linear Regression',
  description: 'Statistical analysis and predictive modeling to forecast student salaries based on educational performance and work experience, featuring hypothesis testing with t-tests and ANOVA for feature significance validation.',
  longDescription: `This project builds a multivariate linear regression model to predict student salaries based on their educational background and previous work experience. The analysis incorporates rigorous statistical hypothesis testing to validate model assumptions and identify significant predictors.

HOW THE PROJECT WORKS:

1. Problem Definition and Data Collection
The goal is to predict salary outcomes for graduating students to:
- Help career services advise students on expected compensation
- Enable recruiters to benchmark offers against market rates
- Identify which factors most strongly influence starting salaries

Data Variables Collected:
- Dependent Variable: Salary (continuous, in currency units)
- Independent Variables:
  - Educational Performance: GPA, standardized test scores, academic honors
  - Previous Work Experience: Internship duration, part-time job hours, relevant experience years
  - Demographics: Gender, age, location
  - Educational Background: Undergraduate specialization, MBA institution ranking

2. Data Preprocessing
Before modeling, the data was prepared through several steps:

Data Cleaning:
- Handled missing values using mean imputation for numerical variables
- Removed outliers beyond 3 standard deviations from mean salary
- Standardized currency units across different regions
- Validated data types and ranges

Feature Engineering:
- Created composite scores for academic performance
- Binned continuous variables where appropriate (e.g., experience: 0-1yr, 1-3yr, 3+yr)
- Encoded categorical variables (specialization, institution tier)

Exploratory Data Analysis:
- Generated correlation matrix to identify multicollinearity
- Created scatter plots of salary vs each predictor
- Examined distribution of salary (checked for normality)
- Identified potential interaction effects between variables

3. Multivariate Linear Regression Model
The core predictive model takes the form:

Salary = Beta0 + Beta1*(GPA) + Beta2*(Test Score) + Beta3*(Experience) + Beta4*(Gender) + ... + Error

Where:
- Beta0 is the intercept (base salary when all predictors are zero)
- Beta1, Beta2, etc. are coefficients representing each variable's impact
- Error term captures unexplained variance

Model Training:
- Split data into training (80%) and testing (20%) sets
- Fitted ordinary least squares (OLS) regression on training data
- Used testing set for unbiased performance evaluation

4. Statistical Significance Testing with P-Values
To determine which features truly impact salary, p-values were calculated for each coefficient:

Interpretation:
- p-value < 0.05: Statistically significant predictor (reject null hypothesis)
- p-value >= 0.05: Not statistically significant (fail to reject null hypothesis)

Feature Selection Process:
1. Started with all potential predictors
2. Calculated p-value for each coefficient
3. Removed variables with p-value > 0.05 (backward elimination)
4. Refit model with significant features only
5. Validated model performance did not degrade

Key Findings from P-Value Analysis:
- GPA: p = 0.003 (significant)
- Work Experience: p = 0.001 (significant)
- Test Scores: p = 0.045 (significant)
- Gender: p = 0.234 (not significant in final model)

5. Unpaired T-Test: Gender Salary Comparison
Research Question: Does average salary differ significantly between male and female students?

Hypothesis Setup:
- Null Hypothesis (H0): Mean salary (male) = Mean salary (female)
- Alternative Hypothesis (H1): Mean salary (male) != Mean salary (female)

Test Procedure:
1. Calculated sample means for both groups
2. Computed pooled standard deviation
3. Calculated t-statistic: t = (Mean1 - Mean2) / Standard_Error
4. Determined degrees of freedom: df = n1 + n2 - 2
5. Found critical t-value from t-distribution table at alpha = 0.05
6. Compared calculated t to critical t

Results Interpretation:
- If |t_calculated| > t_critical: Reject H0 (significant difference exists)
- If |t_calculated| <= t_critical: Fail to reject H0 (no significant difference)

6. ANOVA Test: Specialization and MBA Impact
Research Question: Do average salaries differ significantly across undergraduate specializations and MBA programs?

ANOVA (Analysis of Variance) tests whether means of three or more groups are equal:

Factors Tested:
- Factor A: Undergraduate Specialization (3 levels: Engineering, Business, Science)
- Factor B: MBA Program (2 levels: Top-tier, Other)

Hypothesis Setup:
- Null Hypothesis (H0): All group means are equal
- Alternative Hypothesis (H1): At least one group mean differs

ANOVA Procedure:
1. Calculate total variance in salary (SST - Sum of Squares Total)
2. Partition variance into:
   - SSB (Sum of Squares Between groups): Variance due to factor effects
   - SSW (Sum of Squares Within groups): Variance due to random error
3. Compute Mean Squares: MSB = SSB/dfB, MSW = SSW/dfW
4. Calculate F-statistic: F = MSB / MSW
5. Compare F to critical value from F-distribution

Results Interpretation:
- If F_calculated > F_critical: Reject H0 (significant effect exists)
- If F_calculated <= F_critical: Fail to reject H0 (no significant effect)

Post-Hoc Analysis:
- If ANOVA shows significance, conducted Tukey HSD tests
- Identified which specific group pairs differ
- Ranked specializations by average salary

7. Model Evaluation and Validation
Performance Metrics:

R-Squared (Coefficient of Determination):
- Measures proportion of salary variance explained by model
- Ranges from 0 to 1 (higher is better)
- Formula: R² = 1 - (SS_residual / SS_total)

Adjusted R-Squared:
- Penalizes for adding unnecessary predictors
- More reliable for model comparison

Residual Analysis:
- Plotted residuals vs fitted values (checked for patterns)
- Normal Q-Q plot (verified normality assumption)
- Histogram of residuals (checked distribution shape)

Cross-Validation:
- Used 5-fold cross-validation for robust performance estimate
- Calculated average R² across folds
- Ensured model generalizes to unseen data

8. Business Applications

For Students:
- Input their profile to get salary expectation
- Identify which factors to improve for better outcomes
- Compare their expected salary to peers

For Career Services:
- Advise students on realistic salary expectations
- Identify underperforming programs needing curriculum updates
- Benchmark against competitor institutions

For Recruiters:
- Set competitive salary offers based on candidate profiles
- Understand market rate for different skill combinations
- Reduce offer rejection rates

KEY INSIGHTS FROM ANALYSIS:

- Work experience was the strongest predictor (highest coefficient, lowest p-value)
- GPA had diminishing returns above 3.5
- Top-tier MBA added 25-30% salary premium on average
- Engineering specialization outperformed others by 15%
- Gender was not a statistically significant predictor when controlling for other factors
- Model achieved R² of 0.72, explaining 72% of salary variance`,
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  techStack: ['Python', 'Pandas', 'NumPy', 'Statsmodels', 'Scikit-Learn', 'Matplotlib'],
  category: 'Data Science',
  codeUrl: '#',
  createdDate: 'May 2021'
},
{
  id: 6,
  title: 'IPL Cricket Analytics Dashboard',
  description: 'Interactive Tableau dashboard analyzing Indian Premier League cricket data to identify most successful teams, consistently best players, and key performance factors driving team success.',
  longDescription: `This project involves creating comprehensive Tableau dashboards to analyze Indian Premier League (IPL) cricket data. The dashboards provide actionable insights into team performance, player consistency, and factors that contribute to success in the tournament.

HOW THE PROJECT WORKS:

1. Data Collection and Preparation
The analysis is based on historical IPL match data spanning multiple seasons:

Data Sources:
- Official IPL match records (ball-by-ball data)
- Player statistics from cricket databases
- Team performance metrics across seasons
- Match outcomes and tournament standings

Key Data Points:
- Match results (win/loss, margin, venue)
- Batting statistics (runs, balls faced, strike rate, boundaries)
- Bowling statistics (wickets, runs conceded, economy rate, dot balls)
- Fielding statistics (catches, run-outs, stumpings)
- Player demographics (age, nationality, experience)

Data Cleaning in Tableau:
- Handled missing values and inconsistent entries
- Standardized player and team names across seasons
- Created calculated fields for derived metrics
- Established relationships between multiple data tables

2. Dashboard Design Philosophy
The dashboards were designed to answer key business questions:

Primary Objectives:
- Identify the most successful IPL teams historically
- Find consistently performing players across seasons
- Understand factors that differentiate winning teams
- Provide insights for team selection and strategy

User Experience:
- Interactive filters for season, team, and player selection
- Drill-down capabilities from summary to detailed views
- Visual hierarchy guiding users to key insights
- Mobile-responsive design for on-the-go access

3. Key Dashboard Components

TEAM PERFORMANCE ANALYSIS:
- Win percentage by team across all seasons
- Tournament titles and final appearances
- Performance trends over time (line charts)
- Head-to-head records between teams
- Home vs away performance comparison

Key Metrics Calculated:
- Win Rate = (Matches Won / Total Matches) * 100
- Consistency Score = Standard deviation of season rankings
- Clutch Performance = Win percentage in knockout matches

PLAYER CONSISTENCY ANALYSIS:
- Top run-scorers with season-by-season breakdown
- Leading wicket-takers with economy rates
- Most valuable players (MVP) by season
- Consistency ratings for batsmen and bowlers

Consistency Metrics:
- Coefficient of Variation (CV) = Standard Deviation / Mean
- Lower CV indicates more consistent performance
- Calculated separately for runs scored and wickets taken

4. Success Factor Analysis
The dashboards identify factors that correlate with team success:

TOSS IMPACT:
- Win percentage when winning the toss
- Decision patterns (bat first vs field first)
- Toss advantage by venue and conditions

VENUE ANALYSIS:
- Home ground advantage quantification
- Pitch characteristics and scoring patterns
- Venue-specific winning strategies

CHASE VS DEFEND:
- Success rates batting first vs chasing
- Target score analysis for successful chases
- Required run rate progression in chases

PLAYER COMPOSITION:
- Impact of overseas vs domestic player ratio
- Age distribution of successful teams
- Experience level correlation with performance

5. Interactive Features
The Tableau dashboards include several interactive elements:

FILTERS AND PARAMETERS:
- Season selector (single or multiple seasons)
- Team filter for focused analysis
- Player search functionality
- Match type filter (league, playoff, final)

ACTIONS AND DRILL-DOWNS:
- Click on team logo to see detailed team page
- Hover over charts for detailed tooltips
- Select player to view career statistics
- Navigate from summary to match-level details

DYNAMIC CALCULATIONS:
- Rankings update based on selected filters
- Percentiles recalculate for filtered subsets
- Comparisons adjust to selected time periods

6. Key Insights Delivered

MOST SUCCESSFUL TEAMS:
- Overall win percentages across all seasons
- Playoff qualification rates
- Championship titles and final appearances
- Consistency in reaching knockout stages

CONSISTENTLY BEST PLAYERS:
- Batsmen with highest career averages
- Bowlers with best economy and strike rates
- All-rounders contributing with both bat and ball
- Players performing under pressure (knockout matches)

CRITICAL SUCCESS FACTORS:
- Teams with balanced batting and bowling perform better
- Home advantage is significant (60%+ win rate)
- Toss decision matters more at certain venues
- Experienced players add value in playoffs
- Team depth (quality bench) correlates with success

7. Technical Implementation

Tableau Features Used:
- Calculated fields for custom metrics
- Table calculations for rankings and running totals
- Parameters for user-driven analysis
- Sets for creating custom player/team groups
- LOD (Level of Detail) expressions for complex aggregations

Visualization Types:
- Bar charts for comparisons
- Line charts for trends over time
- Heat maps for performance matrices
- Tree maps for hierarchical data
- Scatter plots for correlation analysis
- Geographic maps for venue analysis

Dashboard Layout:
- Landing page with executive summary
- Dedicated tabs for Teams, Players, Matches, and Insights
- Consistent color scheme (team colors)
- Responsive design for different screen sizes

8. Business Value

For Team Management:
- Data-driven player auction strategies
- Identify gaps in team composition
- Benchmark against successful teams
- Venue-specific tactical planning

For Broadcasters and Media:
- Pre-match analysis content
- Player statistics for commentary
- Historical context for narratives
- Fan engagement through data stories

For Fans and Analysts:
- Self-service exploration of IPL history
- Evidence-based debates on team/player performance
- Fantasy league selection insights
- Understanding of cricket analytics

ACCESS THE DASHBOARD:
The interactive dashboard is hosted on Tableau Public and can be accessed at:
https://tabsoft.co/3rPDlrC

KEY FINDINGS FROM THE ANALYSIS:

- Mumbai Indians and Chennai Super Kings emerged as most successful teams
- Virat Kohli and Rohit Sharma showed highest batting consistency
- Jasprit Bumrah and Lasith Malinga were most economical bowlers
- Teams winning the toss had 54% win rate (slight advantage)
- Chasing teams won 55% of matches overall
- Teams with 3+ quality overseas players reached playoffs 70% of the time`,
  image: "https://raw.githubusercontent.com/quantifyrisk-shreya12/quantrisk-page/main/assets/ipl_tableau.png" ,
  techStack: ['Tableau', 'Data Visualization', 'Sports Analytics'],
  category: 'Data Science',
  codeUrl: 'https://tabsoft.co/3rPDlrC',
  createdDate: 'June 2020'
}
];