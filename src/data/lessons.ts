import { Course } from '@/types/lesson';

export const courses: Course[] = [
  {
    id: 'budgeting-basics',
    title: 'Budgeting Fundamentals',
    description: 'Master the art of budgeting with practical strategies tailored for Indian households. Learn to track expenses, set realistic goals, and build a sustainable financial plan.',
    color: '#3B82F6',
    icon: 'trending-up',
    difficulty: 'Beginner',
    rating: 4.8,
    totalDuration: 90,
    lessons: [
      {
        id: 'budget-1',
        title: 'Understanding Your Money Flow',
        description: 'Learn to track your income and expenses effectively using Indian banking tools and apps.',
        content: `# Understanding Your Money Flow

Money management starts with understanding where your money comes from and where it goes. In India, with the rise of digital payments through UPI, credit cards, and various payment apps, tracking expenses has become both easier and more complex.

## Why Track Your Money Flow?

Your money flow is like the pulse of your financial health. Just as a doctor checks your pulse to understand your physical health, tracking your money flow helps you understand your financial health.

### Income Sources in India
- **Salary**: Most common source for salaried employees
- **Business Income**: For entrepreneurs and business owners  
- **Rental Income**: From property investments
- **Investment Returns**: From FDs, mutual funds, stocks
- **Freelancing**: Growing source in the digital economy

### Common Expense Categories
- **Fixed Expenses**: Rent, EMIs, insurance premiums
- **Variable Expenses**: Groceries, utilities, fuel
- **Discretionary Spending**: Entertainment, dining out, shopping
- **Savings & Investments**: SIP, FD, PPF contributions

## Digital Tools for Indians

### Banking Apps
Most Indian banks now offer expense categorization:
- SBI YONO
- HDFC Bank MobileBanking
- ICICI iMobile Pay
- Axis Mobile

### Popular Expense Tracking Apps
- **Walnut**: Automatically tracks expenses from SMS
- **Money View**: Comprehensive financial tracking
- **ET Money**: Investment and expense tracking
- **Paisa Vasool**: Simple expense tracker

## The 50-30-20 Rule (Indian Context)

Adapt this popular rule to Indian lifestyle:
- **50% Needs**: Rent, groceries, utilities, EMIs
- **30% Wants**: Entertainment, dining, shopping
- **20% Savings**: SIP, FD, PPF, emergency fund

### Example for ₹50,000 monthly income:
- Needs: ₹25,000
- Wants: ₹15,000  
- Savings: ₹10,000

## Getting Started

1. **Choose Your Method**: App, spreadsheet, or notebook
2. **Track for 30 Days**: Don't judge, just observe
3. **Categorize Expenses**: Use categories that make sense for you
4. **Review Weekly**: Look for patterns and surprises
5. **Adjust Gradually**: Make small, sustainable changes`,
        category: 'budgeting',
        duration: 15,
        order: 1,
        keyTakeaways: [
          'Track all income sources including salary, business income, and investment returns',
          'Use digital tools like banking apps and expense trackers for automatic categorization',
          'Follow the 50-30-20 rule adapted for Indian lifestyle and expenses',
          'Review your money flow weekly to identify patterns and areas for improvement'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg'
      },
      {
        id: 'budget-2',
        title: 'Creating Your First Budget',
        description: 'Step-by-step guide to creating a realistic budget that works for Indian families.',
        content: `# Creating Your First Budget

Creating a budget is like creating a roadmap for your money. It tells your money where to go instead of wondering where it went. Let's create a budget that works for Indian households.

## Step 1: Calculate Your Net Income

Your net income is what you actually receive after all deductions:

### For Salaried Employees:
- Gross Salary: ₹60,000
- Less: PF (₹1,800), ESI (₹180), TDS (₹2,000)
- **Net Income: ₹56,020**

### For Business Owners:
- Total Revenue: ₹1,00,000
- Less: Business Expenses (₹40,000), Taxes (₹8,000)
- **Net Income: ₹52,000**

## Step 2: List Your Fixed Expenses

These are expenses that remain the same every month:

### Essential Fixed Expenses:
- House Rent: ₹15,000
- Home Loan EMI: ₹12,000
- Car Loan EMI: ₹8,000
- Insurance Premiums: ₹2,000
- Mobile/Internet: ₹1,500
- **Total Fixed: ₹38,500**

## Step 3: Estimate Variable Expenses

These expenses change month to month:

### Essential Variables:
- Groceries: ₹8,000
- Utilities (Electricity, Gas): ₹3,000
- Fuel/Transportation: ₹4,000
- Medical: ₹2,000
- **Total Variables: ₹17,000**

## Step 4: Plan for Savings & Investments

### Recommended Indian Investment Mix:
- **Emergency Fund**: ₹3,000 (in savings account)
- **SIP in Mutual Funds**: ₹5,000
- **PPF**: ₹1,500 (for tax saving)
- **FD/RD**: ₹2,000 (for short-term goals)
- **Total Savings: ₹11,500**

## Step 5: Allocate Discretionary Spending

What's left after essentials and savings:
- Income: ₹56,020
- Fixed: ₹38,500
- Variables: ₹17,000
- Savings: ₹11,500
- **Remaining: ₹-10,980**

*This shows we need to adjust our budget!*

## Budget Adjustment Strategies

### Reduce Fixed Expenses:
- Consider house sharing to reduce rent
- Refinance loans for better rates
- Review insurance policies

### Optimize Variable Expenses:
- Cook more meals at home
- Use public transport occasionally
- Buy groceries in bulk during sales

### Increase Income:
- Take up freelancing
- Start a side business
- Invest in skill development

## The Zero-Based Budget

Every rupee should have a purpose:
- Income: ₹50,000
- Expenses: ₹35,000
- Savings: ₹10,000
- Fun Money: ₹5,000
- **Balance: ₹0**

## Budget Review Schedule

- **Weekly**: Check if you're on track
- **Monthly**: Adjust categories as needed
- **Quarterly**: Review and optimize
- **Yearly**: Major budget overhaul`,
        category: 'budgeting',
        duration: 20,
        order: 2,
        keyTakeaways: [
          'Calculate net income after all deductions like PF, ESI, and TDS',
          'List fixed expenses including EMIs, rent, and insurance premiums',
          'Allocate money for Indian investment options like SIP, PPF, and FDs',
          'Use zero-based budgeting to ensure every rupee has a purpose'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg'
      },
      {
        id: 'budget-3',
        title: 'Emergency Fund Essentials',
        description: 'Build a robust emergency fund to protect your family from unexpected financial shocks.',
        content: `# Emergency Fund Essentials

An emergency fund is your financial safety net. In India, where job security can be uncertain and medical emergencies expensive, having an emergency fund is crucial for financial stability.

## What is an Emergency Fund?

An emergency fund is money set aside specifically for unexpected expenses or financial emergencies. It's not for planned expenses like vacations or shopping - it's for true emergencies.

## Why Indians Need Emergency Funds

### Common Emergencies in India:
- **Medical Emergencies**: Hospital bills, surgeries, treatments
- **Job Loss**: Sudden unemployment or business downturns
- **Family Emergencies**: Supporting parents or relatives
- **Home Repairs**: Monsoon damage, appliance breakdowns
- **Vehicle Repairs**: Unexpected car or bike repairs

### Real Cost Examples:
- Heart surgery: ₹2-5 lakhs
- Job loss: 3-6 months of expenses
- Major home repair: ₹50,000-2 lakhs
- Vehicle accident: ₹20,000-1 lakh

## How Much Should You Save?

### Standard Recommendation:
**3-6 months of living expenses**

### For Indian Context:
- **Salaried Employees**: 6 months of expenses
- **Business Owners**: 9-12 months of expenses
- **Single Income Families**: 9 months of expenses
- **Dual Income Families**: 3-6 months of expenses

### Calculation Example:
Monthly expenses: ₹40,000
Emergency fund needed: ₹2,40,000 (6 months)

## Where to Keep Your Emergency Fund

### Best Options in India:

#### 1. Savings Bank Account
- **Pros**: Instant access, safe
- **Cons**: Low returns (3-4%)
- **Best for**: Immediate access portion

#### 2. Liquid Mutual Funds
- **Pros**: Better returns (6-7%), quick redemption
- **Cons**: Not guaranteed, T+1 settlement
- **Best for**: Major portion of emergency fund

#### 3. Fixed Deposits (Sweep-in)
- **Pros**: Higher returns, automatic sweep facility
- **Cons**: Penalty on premature withdrawal
- **Best for**: Conservative investors

#### 4. Debt Mutual Funds
- **Pros**: Tax efficient after 3 years, good returns
- **Cons**: Market risk, exit load
- **Best for**: Long-term emergency fund

## Building Your Emergency Fund

### Step 1: Start Small
- Begin with ₹1,000
- Increase by ₹500 every month
- Celebrate small milestones

### Step 2: Automate Savings
- Set up automatic transfer on salary day
- Use SIP in liquid funds
- Treat it like a non-negotiable expense

### Step 3: Use Windfalls
- Bonus payments
- Tax refunds
- Festival money
- Freelancing income

### Step 4: Gradual Build-up
**Month 1-3**: ₹10,000 (basic emergencies)
**Month 4-12**: ₹1,00,000 (major emergencies)
**Month 13-24**: ₹2,40,000 (full emergency fund)

## Emergency Fund Strategy

### 3-Tier Approach:
1. **Tier 1**: ₹25,000 in savings account (immediate access)
2. **Tier 2**: ₹1,00,000 in liquid funds (1-day access)
3. **Tier 3**: ₹1,15,000 in short-term FDs (7-day access)

## When to Use Your Emergency Fund

### Use For:
- Medical emergencies
- Job loss
- Major home repairs
- Family emergencies
- Vehicle accidents

### Don't Use For:
- Vacations
- Shopping
- Planned expenses
- Investment opportunities
- EMI payments (unless job loss)

## Replenishing Your Emergency Fund

After using your emergency fund:
1. **Immediate**: Stop all non-essential spending
2. **Short-term**: Increase savings rate temporarily
3. **Medium-term**: Look for additional income sources
4. **Long-term**: Rebuild to original amount

Remember: An emergency fund is insurance, not an investment. Its job is to be there when you need it, not to make you rich.`,
        category: 'budgeting',
        duration: 18,
        order: 3,
        keyTakeaways: [
          'Build 6 months of expenses for salaried employees, 9-12 months for business owners',
          'Keep emergency funds in liquid investments like savings accounts and liquid mutual funds',
          'Use a 3-tier approach: immediate access, 1-day access, and 7-day access funds',
          'Only use emergency funds for true emergencies, not planned expenses or opportunities'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg'
      }
    ]
  },
  {
    id: 'investment-fundamentals',
    title: 'Investment Fundamentals',
    description: 'Discover the world of investing with Indian financial instruments. Learn about mutual funds, SIPs, FDs, RDs, and build a diversified portfolio.',
    color: '#10B981',
    icon: 'trending-up',
    difficulty: 'Intermediate',
    rating: 4.9,
    totalDuration: 120,
    lessons: [
      {
        id: 'invest-1',
        title: 'Investment Basics for Indians',
        description: 'Understanding risk, return, and the Indian investment landscape.',
        content: `# Investment Basics for Indians

Investing is the process of putting your money to work to generate more money over time. In India, we have a rich variety of investment options, from traditional instruments like Fixed Deposits to modern options like mutual funds and stocks.

## Why Should Indians Invest?

### The Inflation Challenge
- Current inflation rate: 6-7% annually
- Savings account interest: 3-4%
- **Real return**: Negative 2-3%

This means your money loses purchasing power if kept only in savings accounts.

### Example of Inflation Impact:
- Today: ₹1,00,000 can buy a certain lifestyle
- After 10 years (7% inflation): You need ₹1,96,715 for the same lifestyle
- If money grows at only 4%: Your ₹1,00,000 becomes ₹1,48,024
- **Shortfall**: ₹48,691

## Risk vs Return Spectrum

### Low Risk, Low Return:
- **Savings Account**: 3-4% return
- **Fixed Deposits**: 5-7% return
- **PPF**: 7.1% return (tax-free)
- **NSC**: 6.8% return

### Medium Risk, Medium Return:
- **Debt Mutual Funds**: 7-9% return
- **Hybrid Funds**: 8-12% return
- **Gold**: 8-10% return (long-term)

### High Risk, High Return:
- **Equity Mutual Funds**: 12-15% return (long-term)
- **Direct Stocks**: 15%+ return (with high risk)
- **ELSS**: 12-15% return (tax-saving)

## Key Investment Principles

### 1. Start Early
**Power of Compounding Example:**
- Person A: Invests ₹5,000/month from age 25-35 (10 years)
- Person B: Invests ₹5,000/month from age 35-60 (25 years)
- At 12% return:
  - Person A: ₹2.3 crores at 60
  - Person B: ₹1.9 crores at 60

*Person A invested for fewer years but started earlier!*

### 2. Diversification
Don't put all eggs in one basket:
- **Asset Classes**: Equity, Debt, Gold, Real Estate
- **Sectors**: IT, Banking, Pharma, FMCG
- **Geography**: Indian and International funds
- **Time**: SIP spreads investment over time

### 3. Regular Investment (SIP)
- Reduces timing risk
- Builds discipline
- Benefits from rupee cost averaging
- Makes investing affordable

### 4. Long-term Perspective
- Equity investments need 5+ years
- Short-term volatility is normal
- Time in market > Timing the market

## Indian Investment Ecosystem

### Regulators:
- **SEBI**: Securities and Exchange Board of India
- **RBI**: Reserve Bank of India
- **IRDAI**: Insurance Regulatory Authority

### Key Documents:
- **PAN Card**: Mandatory for investments
- **Aadhaar**: For KYC verification
- **Bank Account**: For transactions
- **Demat Account**: For stocks and mutual funds

### Tax Implications:
- **LTCG**: Long-term capital gains (>1 year for equity)
- **STCG**: Short-term capital gains (<1 year)
- **TDS**: Tax deducted at source
- **80C**: Tax-saving investments up to ₹1.5 lakhs

## Common Investment Mistakes

### 1. Waiting for the "Right Time"
- Market timing is nearly impossible
- Start with small amounts
- Increase gradually

### 2. Following Tips and Rumors
- Do your own research
- Understand what you're investing in
- Avoid hot tips from friends/social media

### 3. Panic Selling
- Market volatility is normal
- Stick to your investment plan
- Review periodically, don't react daily

### 4. Not Having Goals
- Define why you're investing
- Set target amounts and timelines
- Choose investments accordingly

## Getting Started Checklist

### Documents Required:
- [ ] PAN Card
- [ ] Aadhaar Card
- [ ] Bank Account
- [ ] Passport-size photos
- [ ] Address proof

### Accounts to Open:
- [ ] Demat Account (for stocks/MFs)
- [ ] Trading Account (if trading stocks)
- [ ] SIP registrations

### First Investments:
1. **Emergency Fund**: 6 months expenses in liquid funds
2. **SIP in Large Cap Fund**: ₹2,000/month
3. **PPF Account**: ₹1,500/month (tax saving)
4. **Term Insurance**: Adequate life cover

Remember: Investing is a marathon, not a sprint. Start small, stay consistent, and let compounding work its magic over time.`,
        category: 'investment',
        duration: 25,
        order: 1,
        keyTakeaways: [
          'Inflation erodes purchasing power - invest to beat inflation and grow wealth',
          'Follow the risk-return spectrum: higher returns require accepting higher risks',
          'Start early to benefit from compounding - time is your biggest advantage',
          'Diversify across asset classes, sectors, and time through SIPs for better risk management'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg'
      },
      {
        id: 'invest-2',
        title: 'Fixed Deposits & Recurring Deposits',
        description: 'Master traditional Indian investment options - FDs and RDs for safe, guaranteed returns.',
        content: `# Fixed Deposits & Recurring Deposits

Fixed Deposits (FDs) and Recurring Deposits (RDs) are the most popular investment options in India. They offer guaranteed returns and capital protection, making them ideal for conservative investors and specific financial goals.

## Fixed Deposits (FDs)

### What is a Fixed Deposit?
A Fixed Deposit is a financial instrument where you deposit a lump sum amount for a fixed period at a predetermined interest rate. The principal and interest are guaranteed by the bank.

### Types of Fixed Deposits

#### 1. Regular Fixed Deposits
- **Minimum Amount**: ₹1,000 to ₹10,000 (varies by bank)
- **Tenure**: 7 days to 10 years
- **Interest Rate**: 5.5% to 7.5% (as of 2024)
- **Interest Payout**: Monthly, quarterly, half-yearly, or at maturity

#### 2. Tax Saver Fixed Deposits
- **Lock-in Period**: 5 years
- **Tax Benefit**: Up to ₹1.5 lakhs under Section 80C
- **Interest Rate**: Similar to regular FDs
- **Premature Withdrawal**: Not allowed

#### 3. Senior Citizen FDs
- **Additional Interest**: 0.25% to 0.75% extra
- **Age Requirement**: 60+ years
- **Special Schemes**: Some banks offer higher rates

#### 4. Flexi Fixed Deposits
- **Auto-sweep Facility**: Excess amount automatically moves to FD
- **Liquidity**: Partial withdrawal allowed
- **Interest**: Earn FD rates on excess amount

### FD Interest Rates (2024)
| Bank | 1 Year | 2 Years | 3 Years | 5 Years |
|------|--------|---------|---------|---------|
| SBI | 6.80% | 7.00% | 6.75% | 6.50% |
| HDFC | 7.00% | 7.25% | 7.00% | 6.75% |
| ICICI | 7.00% | 7.25% | 7.00% | 6.75% |
| Axis | 7.25% | 7.50% | 7.25% | 7.00% |

### FD Calculation Example
**Investment**: ₹1,00,000 for 3 years at 7% annual interest

**Simple Interest**: 
₹1,00,000 × 7% × 3 = ₹21,000
**Maturity Amount**: ₹1,21,000

**Compound Interest** (quarterly compounding):
**Maturity Amount**: ₹1,22,926

## Recurring Deposits (RDs)

### What is a Recurring Deposit?
An RD allows you to deposit a fixed amount every month for a predetermined period. It combines the benefits of regular savings with the higher interest rates of fixed deposits.

### RD Features
- **Monthly Investment**: ₹100 to ₹1,00,000+ per month
- **Tenure**: 6 months to 10 years
- **Interest Rate**: Same as FD rates
- **Flexibility**: Can be linked to salary account for auto-debit

### RD Calculation Example
**Monthly Investment**: ₹5,000 for 5 years at 7% annual interest

**Total Investment**: ₹5,000 × 60 months = ₹3,00,000
**Maturity Amount**: ₹4,28,469
**Interest Earned**: ₹1,28,469

### RD vs SIP Comparison
| Feature | RD | SIP |
|---------|----|----|
| Returns | Fixed (6-7%) | Variable (8-15%) |
| Risk | Zero | Market risk |
| Liquidity | Limited | High |
| Tax | Taxable | LTCG benefits |
| Inflation Protection | No | Yes |

## Advantages of FDs and RDs

### Fixed Deposits
✅ **Guaranteed Returns**: No market risk
✅ **Capital Protection**: Principal amount safe
✅ **Flexible Tenure**: Choose your investment period
✅ **Loan Against FD**: Up to 90% of FD value
✅ **Senior Citizen Benefits**: Higher interest rates

### Recurring Deposits
✅ **Disciplined Saving**: Forces regular investment
✅ **Affordable**: Start with as low as ₹100/month
✅ **Goal-based Saving**: Perfect for specific targets
✅ **Auto-debit Facility**: Convenient monthly deduction

## Disadvantages

### Fixed Deposits
❌ **Low Returns**: May not beat inflation
❌ **Tax Inefficient**: Interest fully taxable
❌ **Liquidity Issues**: Penalty on premature withdrawal
❌ **Opportunity Cost**: Missing higher returns from equity

### Recurring Deposits
❌ **Inflation Risk**: Fixed returns may lose purchasing power
❌ **Penalty for Missed Payments**: Charges for skipping months
❌ **Lower Liquidity**: Cannot withdraw partially
❌ **Tax on Interest**: Annual tax on accrued interest

## Tax Implications

### Interest Taxation
- **TDS**: 10% if interest > ₹40,000 per year (₹50,000 for senior citizens)
- **Tax Slab**: Interest added to total income
- **Form 15G/15H**: Submit if total income below taxable limit

### Tax Calculation Example
**FD Interest**: ₹60,000 per year
**Tax Slab**: 30%
**Tax Payable**: ₹18,000
**Post-tax Return**: ₹42,000 (5.25% if original rate was 7%)

## When to Choose FDs and RDs

### Choose FDs When:
- You have a lump sum to invest
- You need guaranteed returns
- Investment horizon is short (1-3 years)
- You're risk-averse
- You need emergency fund parking

### Choose RDs When:
- You want to build saving discipline
- You have specific goals (vacation, gadget purchase)
- You prefer monthly investments
- You're new to investing
- You want guaranteed growth

## Smart FD/RD Strategies

### 1. Laddering Strategy
Instead of one large FD, create multiple FDs:
- ₹1,00,000 in 4 FDs of ₹25,000 each
- Maturing every 6 months
- Provides regular liquidity and reinvestment opportunities

### 2. Step-up RDs
Increase RD amount annually:
- Year 1: ₹2,000/month
- Year 2: ₹2,500/month
- Year 3: ₹3,000/month

### 3. Sweep-in FDs
- Keep money in savings account
- Excess amount automatically moves to FD
- Earn higher interest on surplus funds

## Best Banks for FDs/RDs (2024)

### Highest Interest Rates:
1. **Small Finance Banks**: 8-9%
2. **Private Banks**: 7-7.5%
3. **Public Sector Banks**: 6.5-7%
4. **Post Office**: 6.9% (NSC, SCSS)

### Most Reliable:
1. **SBI**: Largest network, government backing
2. **HDFC Bank**: Excellent service, digital features
3. **ICICI Bank**: Good online platform
4. **Post Office**: Government guarantee

Remember: FDs and RDs are excellent for capital protection and guaranteed returns, but they may not be sufficient for long-term wealth creation due to inflation and tax implications.`,
        category: 'investment',
        duration: 22,
        order: 2,
        keyTakeaways: [
          'FDs offer guaranteed returns of 6-7% with complete capital protection',
          'RDs help build disciplined saving habits with monthly investments starting from ₹100',
          'Consider tax implications - FD/RD interest is fully taxable as per your income slab',
          'Use laddering strategy for FDs and step-up approach for RDs to optimize returns'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg'
      },
      {
        id: 'invest-3',
        title: 'SIP & Mutual Funds Mastery',
        description: 'Complete guide to Systematic Investment Plans and mutual funds for wealth creation.',
        content: `# SIP & Mutual Funds Mastery

Systematic Investment Plan (SIP) in mutual funds is one of the most powerful wealth creation tools available to Indian investors. It combines the benefits of professional fund management, diversification, and rupee cost averaging.

## What is SIP?

SIP is a method of investing in mutual funds where you invest a fixed amount regularly (monthly, quarterly) instead of investing a lump sum. It's like a recurring deposit but with the potential for much higher returns.

### How SIP Works
1. **Choose a mutual fund scheme**
2. **Decide investment amount** (minimum ₹500/month)
3. **Select frequency** (monthly/quarterly)
4. **Set up auto-debit** from bank account
5. **Units are purchased** at current NAV
6. **Continue for long term** (5+ years recommended)

## Types of Mutual Funds

### 1. Equity Funds
**Invest in stocks for long-term growth**

#### Large Cap Funds
- **Investment**: Top 100 companies by market cap
- **Risk**: Moderate
- **Returns**: 10-12% annually
- **Best for**: Beginners, stable growth
- **Examples**: SBI Bluechip, HDFC Top 100

#### Mid Cap Funds
- **Investment**: Companies ranked 101-250
- **Risk**: High
- **Returns**: 12-15% annually
- **Best for**: Experienced investors
- **Examples**: HDFC Mid-Cap Opportunities

#### Small Cap Funds
- **Investment**: Companies ranked 251+
- **Risk**: Very High
- **Returns**: 15%+ annually (volatile)
- **Best for**: Risk-tolerant investors
- **Examples**: SBI Small Cap Fund

#### Multi Cap Funds
- **Investment**: Mix of large, mid, small cap
- **Risk**: Moderate to High
- **Returns**: 11-14% annually
- **Best for**: Diversified equity exposure

### 2. Debt Funds
**Invest in bonds and fixed-income securities**

#### Liquid Funds
- **Investment**: Very short-term securities
- **Risk**: Very Low
- **Returns**: 4-6% annually
- **Best for**: Emergency funds, short-term parking

#### Short Duration Funds
- **Investment**: 1-3 year maturity securities
- **Risk**: Low
- **Returns**: 6-8% annually
- **Best for**: 1-3 year goals

#### Long Duration Funds
- **Investment**: Long-term bonds
- **Risk**: Moderate (interest rate risk)
- **Returns**: 7-9% annually
- **Best for**: Long-term debt allocation

### 3. Hybrid Funds
**Mix of equity and debt**

#### Conservative Hybrid
- **Allocation**: 75-90% debt, 10-25% equity
- **Risk**: Low to Moderate
- **Returns**: 8-10% annually
- **Best for**: Conservative investors wanting some equity exposure

#### Aggressive Hybrid
- **Allocation**: 65-80% equity, 20-35% debt
- **Risk**: Moderate to High
- **Returns**: 10-13% annually
- **Best for**: Moderate risk appetite

### 4. ELSS (Tax Saving Funds)
- **Tax Benefit**: Up to ₹1.5 lakhs under 80C
- **Lock-in**: 3 years minimum
- **Returns**: 12-15% annually
- **Best for**: Tax saving + wealth creation

## SIP Benefits

### 1. Rupee Cost Averaging
**Example over 6 months:**
| Month | Investment | NAV | Units Purchased |
|-------|------------|-----|-----------------|
| Jan | ₹5,000 | ₹50 | 100 |
| Feb | ₹5,000 | ₹40 | 125 |
| Mar | ₹5,000 | ₹60 | 83.33 |
| Apr | ₹5,000 | ₹45 | 111.11 |
| May | ₹5,000 | ₹55 | 90.91 |
| Jun | ₹5,000 | ₹50 | 100 |

**Total Investment**: ₹30,000
**Total Units**: 610.35
**Average Cost**: ₹49.15 (vs average NAV of ₹50)

### 2. Power of Compounding
**₹5,000 monthly SIP for 20 years at 12% return:**
- **Total Investment**: ₹12,00,000
- **Maturity Value**: ₹49,95,740
- **Wealth Created**: ₹37,95,740

### 3. Disciplined Investing
- Removes emotion from investing
- Builds long-term wealth systematically
- Makes investing a habit

## How to Start SIP

### Step 1: Complete KYC
- **PAN Card**: Mandatory
- **Aadhaar**: For address verification
- **Bank Account**: For auto-debit
- **Photo**: Passport size

### Step 2: Choose Platform
#### Direct Platforms:
- **Fund House Websites**: Lowest cost
- **Registrar Websites**: CAMS, Karvy

#### Distributor Platforms:
- **Banks**: Convenient but higher costs
- **Online Platforms**: Groww, Zerodha Coin, ET Money
- **Financial Advisors**: Personalized advice

### Step 3: Select Funds
**Beginner Portfolio:**
- **Large Cap Fund**: 40% (₹2,000/month)
- **Multi Cap Fund**: 30% (₹1,500/month)
- **ELSS Fund**: 20% (₹1,000/month)
- **Debt Fund**: 10% (₹500/month)

### Step 4: Set Up Auto-Debit
- Choose date (preferably after salary credit)
- Ensure sufficient balance
- Set up multiple SIPs if needed

## SIP Strategies

### 1. Step-Up SIP
Increase SIP amount annually:
- **Year 1**: ₹5,000/month
- **Year 2**: ₹6,000/month (20% increase)
- **Year 3**: ₹7,200/month (20% increase)

**Impact**: ₹5,000 step-up SIP vs regular SIP over 15 years
- **Regular SIP**: ₹30.67 lakhs
- **Step-up SIP**: ₹58.49 lakhs

### 2. Goal-Based SIP
**Child's Education (15 years, need ₹25 lakhs):**
- Required SIP: ₹6,800/month at 12% return
- Fund Choice: Aggressive hybrid or multi-cap

**Retirement (25 years, need ₹2 crores):**
- Required SIP: ₹8,500/month at 12% return
- Fund Choice: Equity-heavy portfolio

### 3. SIP Top-Up
Use bonuses and increments:
- **Annual Bonus**: Invest 50% in additional SIP
- **Salary Increment**: Increase SIP by increment amount
- **Windfall Gains**: Lump sum investment

## Tax Implications

### Equity Funds
- **STCG** (<1 year): 15% tax
- **LTCG** (>1 year): 10% tax on gains >₹1 lakh
- **Dividend**: Tax-free in hands of investor

### Debt Funds
- **STCG** (<3 years): As per tax slab
- **LTCG** (>3 years): 20% with indexation benefit
- **Dividend**: Tax-free in hands of investor

## Common SIP Mistakes

### 1. Starting and Stopping
- **Mistake**: Stopping SIP during market falls
- **Solution**: Continue SIP, buy more units at lower NAV

### 2. Choosing Wrong Funds
- **Mistake**: Selecting based on recent performance
- **Solution**: Look at 5-10 year track record

### 3. Too Many Funds
- **Mistake**: Investing in 10+ funds
- **Solution**: 4-6 funds are sufficient for diversification

### 4. Ignoring Review
- **Mistake**: Never reviewing portfolio
- **Solution**: Annual review and rebalancing

## Best SIP Funds (2024)

### Large Cap Funds:
1. **Axis Bluechip Fund**: 11.2% (10-year return)
2. **Mirae Asset Large Cap Fund**: 10.8%
3. **ICICI Pru Bluechip Fund**: 10.5%

### Multi Cap Funds:
1. **Parag Parikh Flexi Cap**: 15.2%
2. **Axis Growth Opportunities**: 13.8%
3. **HDFC Flexi Cap**: 12.9%

### ELSS Funds:
1. **Axis Long Term Equity**: 14.1%
2. **Mirae Asset Tax Saver**: 13.7%
3. **DSP Tax Saver**: 12.8%

## SIP Success Mantras

1. **Start Early**: Time is your biggest asset
2. **Stay Consistent**: Don't time the market
3. **Increase Gradually**: Step-up SIPs work wonders
4. **Stay Invested**: Long-term approach is key
5. **Review Annually**: But don't over-optimize

Remember: SIP is not about timing the market, it's about time in the market. Start today, even with a small amount!`,
        category: 'investment',
        duration: 28,
        order: 3,
        keyTakeaways: [
          'SIP provides rupee cost averaging and removes timing risk from investments',
          'Start with large cap and multi-cap funds for beginners, add mid/small cap gradually',
          'Use step-up SIPs to increase investment amount annually with salary increments',
          'Stay invested for 5+ years to benefit from compounding and ride out market volatility'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg'
      }
    ]
  },
  {
    id: 'fraud-awareness',
    title: 'Fraud Awareness & Protection',
    description: 'Protect yourself from financial frauds. Learn to identify, prevent, and respond to various types of financial scams targeting Indians.',
    color: '#EF4444',
    icon: 'target',
    difficulty: 'Beginner',
    rating: 4.9,
    totalDuration: 100,
    lessons: [
      {
        id: 'fraud-1',
        title: 'Types of Financial Frauds in India',
        description: 'Comprehensive guide to different types of financial frauds targeting Indian consumers.',
        content: `# Types of Financial Frauds in India

Financial fraud has evolved significantly in the digital age. With the rise of UPI, digital banking, and online transactions, fraudsters have found new ways to exploit unsuspecting victims. Understanding these frauds is the first step in protecting yourself.

## Digital Payment Frauds

### 1. UPI Frauds
**How it works:**
- Fraudsters send fake UPI payment requests
- Create fake QR codes for payments
- Use social engineering to get UPI PINs
- Send fake payment confirmation screenshots

**Real Example:**
A person receives a call claiming to be from their bank, asking them to "verify" their UPI PIN for a "security update." The caller then uses this PIN to make unauthorized transactions.

**Red Flags:**
- Requests for UPI PIN over phone/SMS
- Unsolicited payment requests
- QR codes from unknown sources
- Pressure to make immediate payments

### 2. Fake Payment Apps
**How it works:**
- Fraudsters create fake versions of popular payment apps
- These apps steal login credentials and banking details
- Money transferred through these apps goes to fraudsters

**Prevention:**
- Download apps only from official app stores
- Check app developer credentials
- Read user reviews carefully
- Verify app permissions

### 3. SIM Swap Fraud
**How it works:**
- Fraudsters get a duplicate SIM card of your number
- They receive OTPs meant for you
- Use OTPs to access your bank accounts and make transactions

**Warning Signs:**
- Sudden loss of mobile network
- Receiving SMS about SIM activation you didn't request
- Unauthorized transactions immediately after network loss

## Banking Frauds

### 1. Phishing Attacks
**Common Scenarios:**
- Fake emails from banks asking to "update KYC"
- SMS claiming account will be blocked unless you click a link
- Fake websites that look exactly like your bank's website

**Example Message:**
"Dear Customer, Your account will be blocked in 24 hours. Update your details immediately: [fake link]. - State Bank of India"

**How to Identify:**
- Banks never ask for passwords/PINs via email/SMS
- Check sender's email address carefully
- Look for spelling mistakes and poor grammar
- Verify by calling bank directly

### 2. ATM Skimming
**How it works:**
- Fraudsters install card readers on ATMs
- These devices copy your card information
- Hidden cameras record your PIN entry
- Cloned cards are used for unauthorized withdrawals

**Prevention Tips:**
- Cover your hand while entering PIN
- Check for loose or unusual attachments on ATM
- Use ATMs inside bank branches when possible
- Monitor bank statements regularly

### 3. Credit Card Frauds
**Types:**
- **Card Cloning**: Copying card data to create duplicate cards
- **Online Fraud**: Using stolen card details for online purchases
- **Card Not Present**: Fraudulent transactions without physical card

**Protection Measures:**
- Never share CVV, PIN, or OTP
- Use secure websites (https://) for online shopping
- Enable transaction alerts
- Report lost cards immediately

## Investment Frauds

### 1. Ponzi Schemes
**How they work:**
- Promise unrealistic returns (25-50% annually)
- Use money from new investors to pay existing ones
- Eventually collapse when new investments stop

**Famous Indian Examples:**
- Saradha Group Scam: ₹2,500 crores
- Rose Valley Scam: ₹15,000 crores
- Sahara Group: ₹24,000 crores

**Red Flags:**
- Guaranteed high returns with no risk
- Pressure to invest quickly
- Lack of proper documentation
- Unregistered investment schemes

### 2. Fake Mutual Fund Schemes
**How it works:**
- Fraudsters create fake mutual fund companies
- Promise guaranteed returns higher than market rates
- Collect money and disappear

**Prevention:**
- Verify fund house with SEBI website
- Check AMFI registration
- Invest only through registered distributors
- Get proper receipts and documentation

### 3. Stock Market Frauds
**Common Types:**
- **Pump and Dump**: Artificially inflating stock prices
- **Insider Trading**: Using non-public information
- **Fake Tips**: Paid recommendations for worthless stocks

**Example:**
WhatsApp groups promising "guaranteed profit" stocks, asking for upfront fees for "premium tips."

## Insurance Frauds

### 1. Fake Insurance Policies
**How it works:**
- Fraudsters sell fake insurance policies
- Collect premiums but provide no actual coverage
- Use names similar to legitimate insurers

**Prevention:**
- Buy insurance only from licensed agents
- Verify policy with insurance company
- Check IRDAI website for registered insurers

### 2. Claim Frauds
**Types:**
- Exaggerated medical claims
- Fake accident claims
- Multiple claims for same incident

**Impact:**
- Increases premium costs for everyone
- Can lead to policy cancellation
- Legal consequences for fraudsters

## Loan and Credit Frauds

### 1. Fake Loan Offers
**How it works:**
- Fraudsters offer instant loans with minimal documentation
- Ask for upfront fees for "processing"
- Disappear after collecting fees

**Red Flags:**
- Loans without credit checks
- Upfront fee demands
- Pressure to pay immediately
- No physical office address

### 2. Identity Theft for Loans
**How it works:**
- Fraudsters steal personal documents
- Apply for loans using victim's identity
- Victim discovers fraud when loan defaults appear on credit report

**Prevention:**
- Safeguard personal documents
- Monitor credit report regularly
- Report suspicious loan inquiries

## Cryptocurrency Frauds

### 1. Fake Crypto Exchanges
**How it works:**
- Create fake cryptocurrency trading platforms
- Attract investors with high returns
- Steal deposited funds

### 2. Crypto Ponzi Schemes
**Examples:**
- BitConnect: Promised 1% daily returns
- OneCoin: Claimed to be "Bitcoin killer"

**Warning Signs:**
- Guaranteed returns in volatile crypto market
- Referral bonuses for bringing new investors
- Lack of transparency about trading strategies

## Romance and Social Media Frauds

### 1. Dating App Frauds
**How it works:**
- Fraudsters create fake profiles on dating apps
- Build emotional relationships with victims
- Eventually ask for money for "emergencies"

### 2. Social Media Investment Frauds
**Common on:**
- Facebook groups promising quick money
- Instagram influencers promoting fake schemes
- YouTube channels with "get rich quick" content

## Government and Tax Frauds

### 1. Fake Income Tax Calls
**How it works:**
- Callers claim to be from Income Tax Department
- Threaten arrest for unpaid taxes
- Demand immediate payment via gift cards or UPI

**Fact Check:**
- IT Department never demands immediate payment over phone
- No arrests without proper legal notice
- Refunds are processed through banks, not gift cards

### 2. Fake Government Schemes
**Examples:**
- Fake PM-KISAN registrations
- Fraudulent Ayushman Bharat enrollments
- Fake subsidy schemes

## Regional and Language-Based Frauds

### 1. Vernacular Language Frauds
- Fraudsters target people comfortable only in regional languages
- Use local cultural references to build trust
- Often target elderly and less tech-savvy individuals

### 2. Festival Season Frauds
- Fake Diwali bonus schemes
- Fraudulent gold purchase offers
- Fake festival loan approvals

## Emerging Fraud Trends (2024)

### 1. AI-Generated Voice Frauds
- Using AI to clone voices of family members
- Fake emergency calls asking for money
- Difficult to distinguish from real voices

### 2. Deepfake Video Frauds
- Creating fake videos of celebrities endorsing schemes
- Fake video calls from "bank officials"
- Manipulated video evidence

### 3. Work-from-Home Frauds
- Fake job offers requiring upfront payments
- Fraudulent online survey schemes
- Fake freelancing platforms

## Fraud Statistics in India

### Annual Losses:
- **Digital Payment Frauds**: ₹1,200 crores annually
- **Banking Frauds**: ₹71,500 crores (2022-23)
- **Investment Frauds**: ₹25,000 crores annually

### Most Targeted Demographics:
- **Age Group**: 25-45 years (tech-savvy but trusting)
- **Income Level**: Middle class (₹3-10 lakhs annually)
- **Location**: Tier-2 and Tier-3 cities

Remember: Fraudsters are constantly evolving their methods. Stay informed, stay skeptical, and always verify before you trust.`,
        category: 'fraud-awareness',
        duration: 25,
        order: 1,
        keyTakeaways: [
          'UPI and digital payment frauds are the fastest growing fraud types in India',
          'Never share UPI PIN, CVV, OTP, or banking passwords with anyone over phone or SMS',
          'Investment frauds promise unrealistic returns - if it sounds too good to be true, it probably is',
          'Always verify schemes and offers through official channels before investing money'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386398/pexels-photo-4386398.jpeg'
      },
      {
        id: 'fraud-2',
        title: 'Fraud Prevention Strategies',
        description: 'Practical strategies and tools to protect yourself from financial frauds.',
        content: `# Fraud Prevention Strategies

Prevention is always better than cure, especially when it comes to financial frauds. By implementing the right strategies and maintaining vigilance, you can significantly reduce your risk of becoming a fraud victim.

## Digital Security Fundamentals

### 1. Strong Password Management
**Password Best Practices:**
- Use unique passwords for each account
- Minimum 12 characters with mix of letters, numbers, symbols
- Avoid personal information (birthdate, name, phone number)
- Change passwords every 6 months

**Password Examples:**
❌ **Weak**: Rahul@123, Mumbai2024
✅ **Strong**: K9$mP2#vL8@nQ5, Tr@il#45$Bk9

**Password Managers:**
- **Google Password Manager**: Free, syncs across devices
- **Bitwarden**: Free tier available, highly secure
- **1Password**: Premium option with family sharing

### 2. Two-Factor Authentication (2FA)
**Enable 2FA on:**
- All bank accounts and payment apps
- Email accounts
- Investment platforms
- Social media accounts

**2FA Methods:**
1. **SMS OTP**: Basic but better than nothing
2. **Authenticator Apps**: Google Authenticator, Microsoft Authenticator
3. **Hardware Keys**: Most secure but expensive

### 3. Secure Banking Practices
**Mobile Banking Security:**
- Download apps only from official app stores
- Enable app lock with PIN/biometric
- Log out after each session
- Never save banking passwords in browser

**Online Banking Tips:**
- Always type bank URL manually
- Look for 'https://' and padlock icon
- Never access banking from public WiFi
- Clear browser cache after banking

## Communication Security

### 1. Phone Call Verification
**Golden Rules:**
- Banks never ask for passwords/PINs over phone
- Government agencies don't demand immediate payments
- Legitimate callers will allow you to call back

**Verification Process:**
1. **Don't provide information immediately**
2. **Ask for caller's name and department**
3. **Hang up and call official number**
4. **Verify the request independently**

**Example Script:**
"Thank you for calling. I need to verify this request. Can you please provide your employee ID and department? I'll call back through the official customer service number to confirm."

### 2. SMS and Email Vigilance
**Red Flags in Messages:**
- Urgent action required
- Threats of account closure
- Requests for personal information
- Poor grammar and spelling
- Generic greetings ("Dear Customer")

**Verification Checklist:**
- [ ] Check sender's email/phone number
- [ ] Look for official logos and formatting
- [ ] Verify through official channels
- [ ] Don't click suspicious links

### 3. Social Media Safety
**Privacy Settings:**
- Limit personal information visibility
- Don't share financial details
- Be cautious about location sharing
- Review friend/follower requests carefully

**Information to Never Share:**
- Bank account numbers
- Credit card details
- Investment portfolio details
- Income information
- Travel plans (while traveling)

## Investment Protection Strategies

### 1. Due Diligence Framework
**Before Any Investment:**
1. **Verify Registration**: Check with SEBI, RBI, IRDAI
2. **Research Track Record**: Look for 5+ year history
3. **Understand the Product**: If you can't explain it, don't invest
4. **Check Reviews**: Look for independent reviews and complaints

**SEBI Verification Process:**
- Visit: www.sebi.gov.in
- Go to "Intermediaries" section
- Search for company/advisor name
- Verify registration status and validity

### 2. Red Flag Recognition
**Investment Red Flags:**
- Guaranteed returns above 15% annually
- Pressure to invest immediately
- Referral bonuses for bringing friends
- No written documentation
- Unregistered schemes

**Ponzi Scheme Indicators:**
- Returns too good to be true
- Vague investment strategy
- Difficulty withdrawing money
- Emphasis on recruiting others
- Lack of transparency

### 3. Safe Investment Practices
**Diversification Strategy:**
- Never put all money in one scheme
- Spread across asset classes
- Use only registered platforms
- Keep emergency fund separate

**Documentation:**
- Always get written agreements
- Keep all transaction receipts
- Maintain investment records
- Take screenshots of online transactions

## Banking and Payment Security

### 1. ATM Safety Protocols
**Before Using ATM:**
- Choose ATMs inside bank branches
- Check for unusual attachments or devices
- Ensure good lighting and security cameras
- Have someone accompany you at night

**During Transaction:**
- Cover PIN entry with your hand
- Don't accept help from strangers
- Check for shoulder surfing
- Take your receipt and card

**After Transaction:**
- Check account balance immediately
- Report any discrepancies within 24 hours
- Monitor statements regularly

### 2. UPI and Digital Payment Safety
**UPI Best Practices:**
- Set transaction limits (₹5,000-10,000 daily)
- Enable transaction notifications
- Use only official payment apps
- Never share UPI PIN with anyone

**QR Code Safety:**
- Scan QR codes only from trusted sources
- Verify merchant details before payment
- Check payment amount before confirming
- Avoid QR codes from unknown sources

**Digital Wallet Security:**
- Keep limited money in wallets
- Enable wallet lock features
- Regular balance monitoring
- Use strong wallet PINs

### 3. Credit Card Protection
**Usage Guidelines:**
- Never let card leave your sight
- Cover PIN while entering
- Check bills before signing
- Report lost cards immediately

**Online Shopping Safety:**
- Use secure websites (https://)
- Avoid saving card details
- Use virtual credit cards when available
- Monitor statements regularly

## Identity Protection

### 1. Document Security
**Physical Documents:**
- Store originals in bank locker
- Keep certified copies at home
- Never give originals to unknown parties
- Shred old financial documents

**Digital Documents:**
- Password-protect important files
- Use cloud storage with 2FA
- Regular backup of important data
- Avoid storing on public computers

### 2. Personal Information Management
**Information to Protect:**
- Aadhaar number
- PAN details
- Bank account numbers
- Credit card information
- Investment account details

**Sharing Guidelines:**
- Only share with verified entities
- Ask why information is needed
- Provide minimum required details
- Get written privacy policies

### 3. Credit Report Monitoring
**Free Credit Reports:**
- CIBIL: One free report annually
- Experian: Free monthly reports
- Equifax: Free annual report
- CRIF High Mark: Free annual report

**What to Check:**
- Unauthorized loan inquiries
- Unknown credit accounts
- Incorrect personal information
- Suspicious credit activities

## Technology-Based Protection

### 1. Mobile Security
**App Security:**
- Download from official stores only
- Read app permissions carefully
- Keep apps updated
- Use app locks for financial apps

**Device Security:**
- Enable screen lock
- Use biometric authentication
- Install security updates promptly
- Avoid rooting/jailbreaking

### 2. Internet Safety
**Safe Browsing:**
- Use updated browsers
- Enable pop-up blockers
- Avoid suspicious websites
- Use VPN on public WiFi

**Email Security:**
- Don't click suspicious links
- Verify sender identity
- Use spam filters
- Report phishing attempts

### 3. Backup and Recovery
**Data Backup:**
- Regular backup of important data
- Use multiple backup methods
- Test backup restoration
- Keep backups secure

**Account Recovery:**
- Set up account recovery options
- Keep recovery information updated
- Use multiple recovery methods
- Document recovery processes

## Family and Social Protection

### 1. Educating Family Members
**Elderly Protection:**
- Explain common fraud types
- Set up joint accounts for monitoring
- Establish verification procedures
- Regular communication about finances

**Children's Digital Safety:**
- Monitor online activities
- Teach about sharing personal information
- Set up parental controls
- Regular discussions about online safety

### 2. Community Awareness
**Sharing Information:**
- Report fraud attempts to others
- Share fraud alerts in community groups
- Participate in awareness programs
- Support fraud victims

## Emergency Preparedness

### 1. Fraud Response Plan
**Immediate Actions:**
1. Stop all transactions
2. Contact bank/financial institution
3. File police complaint
4. Document everything
5. Inform family members

**Contact Numbers to Keep Handy:**
- Bank customer service
- Credit card helplines
- Cyber crime helpline: 1930
- Local police station

### 2. Insurance and Protection
**Relevant Insurance:**
- Cyber insurance policies
- Credit card fraud protection
- Identity theft insurance
- Home insurance for document theft

## Regular Security Audits

### 1. Monthly Checks
- Review all bank statements
- Check credit card bills
- Monitor investment accounts
- Verify UPI transaction history

### 2. Quarterly Reviews
- Update passwords
- Review privacy settings
- Check credit reports
- Audit financial accounts

### 3. Annual Security Assessment
- Complete security review
- Update emergency contacts
- Review insurance coverage
- Assess fraud protection measures

Remember: Fraudsters are constantly evolving their tactics. Stay informed about new fraud types and continuously update your protection strategies.`,
        category: 'fraud-awareness',
        duration: 22,
        order: 2,
        keyTakeaways: [
          'Use strong, unique passwords and enable 2FA on all financial accounts',
          'Never share banking credentials over phone - banks never ask for this information',
          'Verify all investment schemes with SEBI/RBI before investing any money',
          'Monitor bank statements and credit reports regularly to catch fraud early'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg'
      },
      {
        id: 'fraud-3',
        title: 'What to Do When Fraud Occurs',
        description: 'Step-by-step action plan for responding to financial fraud incidents.',
        content: `# What to Do When Fraud Occurs

Despite all precautions, fraud can still happen. The key is to act quickly and systematically to minimize damage and increase chances of recovery. Time is critical in fraud cases - the faster you respond, the better your chances of limiting losses.

## Immediate Response (First 30 Minutes)

### 1. Stop the Bleeding
**If You Notice Unauthorized Transactions:**
1. **Immediately call your bank's fraud helpline**
2. **Block all affected cards/accounts**
3. **Change all banking passwords and PINs**
4. **Log out of all banking sessions**

**Emergency Helpline Numbers:**
- **SBI**: 1800 1234 (24x7)
- **HDFC Bank**: 1800 2600 4332
- **ICICI Bank**: 1800 200 3344
- **Axis Bank**: 1800 419 5959
- **General Banking Fraud**: 155260

### 2. Secure Your Accounts
**Immediate Security Steps:**
- Change passwords for all financial accounts
- Enable additional security alerts
- Review recent transactions on all accounts
- Check linked payment apps (PhonePe, Google Pay, Paytm)

**UPI Fraud Response:**
- Block UPI ID immediately
- Contact payment app customer service
- Check all linked bank accounts
- Report to NPCI if needed

### 3. Document Everything
**Create a Fraud File:**
- Screenshot of unauthorized transactions
- Note down exact time of discovery
- Record all phone calls made
- Save all communication with banks
- Write down sequence of events

**Information to Collect:**
- Transaction reference numbers
- Amounts involved
- Date and time of fraudulent transactions
- Method used (UPI, card, net banking)
- Any suspicious communications received

## First 24 Hours - Formal Reporting

### 1. File Police Complaint
**Where to File:**
- **Cyber Crime Police Station** (for online frauds)
- **Local Police Station** (for physical frauds)
- **Online**: www.cybercrime.gov.in

**Information Required:**
- Your personal details (name, address, phone)
- Details of fraud (amount, method, timeline)
- Bank account/card details involved
- Any evidence (screenshots, messages, emails)
- Suspect information (if available)

**FIR vs Complaint:**
- **FIR**: For serious frauds (>₹20,000)
- **Complaint**: For smaller amounts
- Always get acknowledgment receipt

### 2. Bank Formal Complaint
**Written Complaint to Bank:**
- Submit at nearest branch
- Include all transaction details
- Attach supporting documents
- Get acknowledgment with complaint number

**Bank's Obligations:**
- Acknowledge complaint within 7 days
- Investigate within 90 days
- Provide interim relief if applicable
- Keep you updated on progress

**Sample Bank Complaint Format:**
```
To: Branch Manager
[Bank Name and Address]

Subject: Unauthorized Transaction Complaint

Dear Sir/Madam,

I wish to report unauthorized transactions from my account:
- Account Number: XXXX-XXXX-XXXX
- Transaction Date: [Date]
- Amount: ₹[Amount]
- Transaction Reference: [Reference Number]

I did not authorize these transactions and suspect fraud.
Please investigate and reverse the transactions immediately.

Attached: Transaction screenshots, police complaint copy

Yours faithfully,
[Your Name and Signature]
```

### 3. Credit Card Fraud Reporting
**For Credit Card Frauds:**
- Call card issuer immediately
- Request new card with different number
- Dispute fraudulent charges
- Get temporary credit while investigating

**Zero Liability Protection:**
Most banks offer zero liability for:
- Unauthorized online transactions
- Card skimming frauds
- Phishing-related frauds

## Week 1 - Follow-up Actions

### 1. Banking Ombudsman Complaint
**If Bank Doesn't Respond:**
- File complaint with Banking Ombudsman
- Online: https://cms.rbi.org.in
- No fees for complaint
- Bank must respond within 30 days

**Ombudsman Jurisdiction:**
- Complaints up to ₹30 lakhs
- Free service
- Binding decisions on banks
- Appeals possible to appellate authority

### 2. Credit Report Monitoring
**Check All Credit Reports:**
- CIBIL: www.cibil.com
- Experian: www.experian.in
- Equifax: www.equifax.co.in
- CRIF High Mark: www.crifhighmark.com

**Look For:**
- Unauthorized loan applications
- New credit cards issued
- Changed personal information
- Suspicious credit inquiries

**If Identity Theft Suspected:**
- Place fraud alert on credit reports
- Request credit freeze
- Monitor reports monthly
- Dispute incorrect information

### 3. Investment Fraud Response
**For Investment Frauds:**
- Complain to SEBI: scores.gov.in
- Contact investor protection fund
- Report to Economic Offences Wing
- Consult with securities lawyer

**SEBI Complaint Process:**
- Online complaint filing
- Track complaint status
- SEBI investigation
- Possible compensation from investor protection fund

## Recovery Process

### 1. Bank Investigation Timeline
**Bank's Investigation Process:**
- **Day 1-7**: Acknowledge complaint
- **Day 8-30**: Preliminary investigation
- **Day 31-60**: Detailed investigation
- **Day 61-90**: Final decision

**Possible Outcomes:**
- Full refund (if bank liable)
- Partial refund (shared liability)
- No refund (customer liable)
- Further investigation needed

### 2. Insurance Claims
**If You Have Relevant Insurance:**
- Cyber insurance
- Credit card fraud protection
- Identity theft insurance
- Home insurance (for document theft)

**Claim Process:**
1. Notify insurer immediately
2. Submit claim form with documents
3. Cooperate with investigation
4. Provide additional information if requested

### 3. Legal Action
**When to Consider Legal Action:**
- Large amounts involved (>₹1 lakh)
- Bank refuses liability unfairly
- Clear evidence of negligence
- Criminal charges needed

**Legal Options:**
- Consumer Court (for service deficiency)
- Civil Court (for damages)
- Criminal Court (for fraud charges)
- Arbitration (if mentioned in agreement)

## Specific Fraud Type Responses

### 1. UPI Fraud Response
**Immediate Actions:**
- Block UPI PIN
- Contact payment app (PhonePe: 080-68727374, Google Pay: 1800-419-0157)
- Report to bank
- File cyber crime complaint

**UPI Fraud Liability:**
- Zero liability if reported within 3 days
- Limited liability if reported within 4-7 days
- Customer liable if reported after 7 days

### 2. Credit Card Fraud Response
**Steps to Take:**
- Call card issuer fraud helpline
- Block card immediately
- Dispute charges in writing
- Request new card
- Monitor statements closely

**Chargeback Process:**
- File dispute within 60 days
- Provide supporting documents
- Bank investigates with merchant
- Temporary credit during investigation

### 3. Investment Fraud Response
**Recovery Steps:**
- Report to SEBI and police
- Contact other investors
- Hire recovery agent/lawyer
- Check for asset attachment orders
- Monitor insolvency proceedings

### 4. Identity Theft Response
**Comprehensive Action Plan:**
- File police complaint
- Alert all banks and financial institutions
- Place fraud alerts on credit reports
- Monitor all accounts closely
- Consider credit monitoring service

## Prevention of Future Frauds

### 1. Enhanced Security Measures
**After Fraud Experience:**
- Implement stronger passwords
- Enable all available security features
- Regular monitoring of accounts
- Educate family members

### 2. Account Monitoring
**Set Up Alerts For:**
- All transactions above ₹500
- Login attempts
- Password changes
- New payee additions
- Card usage

### 3. Regular Reviews
**Monthly Tasks:**
- Review all bank statements
- Check credit card bills
- Monitor investment accounts
- Verify UPI transaction history

## Emotional and Psychological Support

### 1. Dealing with Fraud Trauma
**Common Reactions:**
- Anger and frustration
- Feeling of violation
- Loss of trust
- Financial anxiety

**Coping Strategies:**
- Talk to family and friends
- Join fraud victim support groups
- Consider professional counseling
- Focus on prevention measures

### 2. Financial Recovery Planning
**Rebuilding After Fraud:**
- Assess total financial damage
- Create recovery timeline
- Adjust financial goals if needed
- Build stronger emergency fund

## Success Stories and Recovery

### 1. Typical Recovery Rates
**By Fraud Type:**
- **Banking Frauds**: 70-80% recovery rate
- **Credit Card Frauds**: 85-90% recovery rate
- **UPI Frauds**: 60-70% recovery rate
- **Investment Frauds**: 20-30% recovery rate

### 2. Factors Affecting Recovery
**Positive Factors:**
- Quick reporting (within 24 hours)
- Good documentation
- Bank cooperation
- Clear evidence of fraud

**Negative Factors:**
- Delayed reporting
- Poor documentation
- Customer negligence
- Complex fraud schemes

## Key Contacts and Resources

### Emergency Helplines:
- **Cyber Crime Helpline**: 1930
- **Banking Fraud**: 155260
- **Consumer Helpline**: 1915
- **Women Helpline**: 1091

### Online Resources:
- **Cyber Crime Portal**: www.cybercrime.gov.in
- **Banking Ombudsman**: cms.rbi.org.in
- **SEBI Complaints**: scores.gov.in
- **Consumer Forum**: www.consumerhelpline.gov.in

### Important Documents to Keep:
- Police complaint copy
- Bank complaint acknowledgment
- Transaction screenshots
- Communication records
- Recovery correspondence

Remember: Acting quickly and systematically significantly improves your chances of recovering from fraud. Don't panic, but don't delay - every hour counts in fraud cases.`,
        category: 'fraud-awareness',
        duration: 20,
        order: 3,
        keyTakeaways: [
          'Act immediately - call bank fraud helpline and block all affected accounts within 30 minutes',
          'File police complaint and formal bank complaint within 24 hours for better recovery chances',
          'Document everything - screenshots, reference numbers, and communication records',
          'Report UPI frauds within 3 days for zero liability protection'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg'
      },
      {
        id: 'fraud-4',
        title: 'Filing Complaints & Legal Remedies',
        description: 'Complete guide to filing complaints and seeking legal remedies for financial frauds.',
        content: `# Filing Complaints & Legal Remedies

When you become a victim of financial fraud, knowing how to file effective complaints and pursue legal remedies is crucial for recovery. India has multiple channels for complaint resolution, each with specific procedures and timelines.

## Understanding Your Rights

### 1. Consumer Rights in Financial Services
**Fundamental Rights:**
- Right to fair treatment
- Right to transparency in charges
- Right to privacy and confidentiality
- Right to grievance redressal
- Right to compensation for deficiency

**Bank's Obligations:**
- Provide secure banking services
- Protect customer data
- Investigate fraud complaints promptly
- Compensate for unauthorized transactions (in many cases)
- Maintain proper grievance redressal mechanism

### 2. Legal Framework
**Key Laws Protecting You:**
- **Consumer Protection Act, 2019**
- **Banking Regulation Act, 1949**
- **Payment and Settlement Systems Act, 2007**
- **Information Technology Act, 2000**
- **Indian Penal Code** (for criminal aspects)

## Complaint Filing Hierarchy

### Level 1: Bank's Internal Grievance Mechanism

#### Step 1: Branch Level Complaint
**Process:**
1. Visit the branch where you hold account
2. Submit written complaint to Branch Manager
3. Include all relevant documents
4. Get acknowledgment with complaint number

**Timeline:** Bank should resolve within 7 working days

**Sample Complaint Letter:**
```
Date: [Date]
To: The Branch Manager
[Bank Name]
[Branch Address]

Subject: Complaint regarding unauthorized transaction

Dear Sir/Madam,

I am writing to report unauthorized transactions from my account:

Account Details:
- Account Number: [Your Account Number]
- Account Holder Name: [Your Name]
- Mobile Number: [Registered Mobile]

Fraud Details:
- Date of Transaction: [Date]
- Amount: ₹[Amount]
- Transaction Reference: [Reference Number]
- Mode: [UPI/Card/Net Banking]

I did not authorize these transactions and request immediate investigation and reversal.

Attached Documents:
1. Account statement
2. Transaction screenshots
3. Police complaint copy (if filed)

I request you to:
1. Block my account/card immediately
2. Investigate the unauthorized transactions
3. Reverse the fraudulent amount
4. Provide written confirmation of actions taken

Please acknowledge receipt of this complaint and provide a complaint reference number.

Yours faithfully,
[Your Signature]
[Your Name]
[Contact Details]
```

#### Step 2: Nodal Officer Complaint
**If Branch Doesn't Resolve:**
- Escalate to bank's Nodal Officer
- Contact details available on bank's website
- Submit complaint with previous correspondence
- **Timeline:** 15 working days for resolution

#### Step 3: Principal Nodal Officer
**Final Internal Level:**
- Highest internal grievance authority
- Submit if Nodal Officer doesn't resolve
- Include entire complaint history
- **Timeline:** 30 working days

### Level 2: Banking Ombudsman

#### When to Approach Banking Ombudsman
**Conditions:**
- Bank hasn't replied within 30 days, OR
- You're not satisfied with bank's response, OR
- Bank rejects your complaint without proper reason

**Ombudsman Jurisdiction:**
- Complaints up to ₹30 lakhs
- Must be filed within 1 year of bank's final reply
- Free service with no fees

#### Filing Process
**Online Filing:**
1. Visit: https://cms.rbi.org.in
2. Click "File a Complaint"
3. Fill online form with details
4. Upload supporting documents
5. Submit and note complaint reference number

**Required Information:**
- Your personal details
- Bank and branch details
- Nature of complaint
- Amount involved
- Steps taken with bank
- Relief sought

**Documents to Attach:**
- Bank complaint copies
- Account statements
- Transaction proofs
- Bank's replies (if any)
- Any other relevant documents

#### Ombudsman Process
**Timeline:**
- **Acknowledgment**: Within 7 days
- **Bank's Reply**: Within 15 days
- **Investigation**: 30-60 days
- **Award**: Within 90 days

**Possible Outcomes:**
- Direction to bank to take specific action
- Compensation award up to ₹10 lakhs
- Rejection of complaint
- Settlement between parties

### Level 3: Appellate Authority
**If Unsatisfied with Ombudsman:**
- Appeal to Deputy Governor, RBI
- File within 30 days of Ombudsman award
- Final authority for banking complaints

## Specialized Complaint Channels

### 1. Cyber Crime Complaints

#### National Cyber Crime Reporting Portal
**Website:** www.cybercrime.gov.in
**For:** Online frauds, UPI frauds, phishing, identity theft

**Filing Process:**
1. Visit the portal
2. Click "Report Cybercrime"
3. Choose complaint type
4. Fill detailed form
5. Upload evidence
6. Submit and get acknowledgment

**Required Details:**
- Personal information
- Incident details with timeline
- Financial loss amount
- Suspect information (if known)
- Evidence files

#### Local Cyber Crime Police Station
**When to Visit:**
- High-value frauds (>₹50,000)
- Need immediate police action
- Have suspect information
- Bank is not cooperating

**Documents to Carry:**
- Identity proof
- Address proof
- Bank statements
- Transaction screenshots
- Any communication with fraudsters

### 2. SEBI Complaints (Investment Frauds)

#### SCORES Portal
**Website:** scores.gov.in
**For:** Mutual fund frauds, stock market frauds, investment advisor frauds

**Complaint Process:**
1. Register on SCORES portal
2. File complaint with details
3. Upload supporting documents
4. Track complaint status online

**SEBI Investigation:**
- Preliminary inquiry
- Detailed investigation if needed
- Enforcement action against violators
- Possible compensation from Investor Protection Fund

### 3. Insurance Complaints

#### IRDAI Integrated Grievance Management System (IGMS)
**Website:** igms.irda.gov.in
**For:** Insurance fraud, claim disputes, mis-selling

**Process:**
1. First complain to insurance company
2. If not resolved in 15 days, escalate to IGMS
3. File online complaint with documents
4. Track resolution status

### 4. Consumer Court Complaints

#### When to Approach Consumer Court
**Conditions:**
- Service deficiency by bank/financial institution
- Unfair trade practices
- Seeking compensation for harassment
- Other remedies exhausted

#### Jurisdiction by Amount
- **District Forum**: Up to ₹20 lakhs
- **State Commission**: ₹20 lakhs to ₹1 crore
- **National Commission**: Above ₹1 crore

#### Filing Process
**Documents Required:**
- Complaint form
- Evidence of service deficiency
- Proof of financial loss
- Previous complaint correspondence
- Court fee (varies by amount)

**Relief Available:**
- Refund of amount paid
- Compensation for loss and harassment
- Punitive damages
- Corrective action by service provider

## Criminal Complaints

### 1. FIR Filing
**When to File FIR:**
- Fraud amount is substantial (>₹20,000)
- Clear criminal intent
- Want criminal prosecution
- Need police investigation

**Sections of IPC Applicable:**
- **Section 420**: Cheating and dishonestly inducing delivery of property
- **Section 468**: Forgery for purpose of cheating
- **Section 471**: Using forged documents as genuine
- **IT Act Section 66C**: Identity theft
- **IT Act Section 66D**: Cheating by personation using computer

### 2. Private Criminal Complaint
**Alternative to FIR:**
- File directly in Magistrate Court
- When police refuse to register FIR
- For white-collar crimes
- Faster than police investigation route

## Documentation and Evidence

### 1. Essential Documents
**Always Maintain:**
- Original bank statements
- Transaction screenshots with timestamps
- SMS/email communications
- Audio recordings (if legal)
- Witness statements
- Expert opinions (if needed)

### 2. Digital Evidence Preservation
**Best Practices:**
- Take screenshots immediately
- Save original files without editing
- Maintain chain of custody
- Get digital evidence certified if needed
- Keep multiple backup copies

## Legal Representation

### 1. When to Hire a Lawyer
**Consider Legal Help For:**
- High-value frauds (>₹1 lakh)
- Complex cases involving multiple parties
- Bank refusing reasonable liability
- Criminal prosecution needed
- Consumer court proceedings

### 2. Types of Lawyers
**Specializations:**
- **Banking Law**: For bank-related disputes
- **Cyber Law**: For online frauds
- **Consumer Law**: For service deficiency cases
- **Criminal Law**: For prosecution cases

### 3. Legal Costs
**Typical Fees:**
- **Consultation**: ₹2,000-5,000
- **Consumer Court**: ₹10,000-50,000
- **Criminal Cases**: ₹25,000-1,00,000
- **High Court**: ₹50,000-2,00,000

## Timeline and Expectations

### 1. Complaint Resolution Timelines
**Banking Ombudsman**: 90 days
**Consumer Court**: 6 months to 2 years
**Criminal Cases**: 2-5 years
**Civil Cases**: 3-10 years

### 2. Success Rates
**Banking Complaints**: 70-80% success rate
**Consumer Court**: 60-70% success rate
**Criminal Prosecution**: 30-40% conviction rate
**Civil Recovery**: 40-50% success rate

## Alternative Dispute Resolution

### 1. Mediation
**Benefits:**
- Faster resolution
- Lower costs
- Confidential process
- Preserves relationships

**When Suitable:**
- Both parties willing to negotiate
- Clear liability issues
- Moderate amounts involved

### 2. Arbitration
**When Applicable:**
- Arbitration clause in agreement
- Commercial disputes
- Technical issues involved
- Need expert determination

## Recovery and Enforcement

### 1. Award Enforcement
**If You Win:**
- Banking Ombudsman awards are binding on banks
- Consumer Court orders can be enforced through execution
- Criminal courts can order compensation
- Civil court decrees need execution proceedings

### 2. Asset Recovery
**Methods:**
- Bank account attachment
- Property attachment
- Salary garnishment
- Asset seizure orders

## Tips for Effective Complaint Filing

### 1. Preparation
- Organize all documents chronologically
- Prepare a clear timeline of events
- Calculate exact financial loss
- Identify specific relief sought

### 2. Writing Effective Complaints
- Be factual and specific
- Avoid emotional language
- Include all relevant details
- Clearly state what you want

### 3. Follow-up
- Track complaint status regularly
- Respond promptly to queries
- Maintain communication records
- Be persistent but professional

## Recent Legal Developments

### 1. New Consumer Protection Act, 2019
- E-commerce transactions covered
- Product liability provisions
- Class action suits allowed
- Stricter penalties for violations

### 2. Digital Personal Data Protection Act, 2023
- Stronger data protection rights
- Penalties for data breaches
- Right to grievance redressal
- Compensation for data breaches

Remember: The legal system can be slow, but persistence and proper documentation significantly improve your chances of success. Consider the cost-benefit analysis before pursuing expensive legal remedies for smaller amounts.`,
        category: 'fraud-awareness',
        duration: 25,
        order: 4,
        keyTakeaways: [
          'Follow the complaint hierarchy: Bank → Nodal Officer → Banking Ombudsman → Appellate Authority',
          'File complaints within specified timelines - Banking Ombudsman within 1 year, Consumer Court within 2 years',
          'Use specialized portals: cybercrime.gov.in for cyber frauds, scores.gov.in for investment frauds',
          'Maintain proper documentation and evidence - screenshots, statements, and communication records are crucial'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386454/pexels-photo-4386454.jpeg'
      }
    ]
  }
];