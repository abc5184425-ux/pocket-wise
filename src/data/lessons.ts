import { Course } from '@/types/lesson';

export const courses: Course[] = [
  {
    id: 'budgeting-basics',
    title: 'Budgeting Fundamentals',
    description: 'Master the art of budgeting with practical strategies that actually work in real life.',
    color: '#3B82F6',
    icon: 'trending-up',
    difficulty: 'Beginner',
    rating: 4.8,
    totalDuration: 45,
    lessons: [
      {
        id: 'what-is-budgeting',
        title: 'What is Budgeting?',
        description: 'Discover why budgeting is your financial superpower and how it can transform your money habits.',
        content: `# Understanding Budgeting 💰

Budgeting isn't about restricting yourself—it's about giving yourself **permission to spend** on what matters most to you.

## Why Budget?

Think of budgeting like GPS for your money. Without it, you're driving blind, hoping you'll reach your destination. With it, you have a clear path to your financial goals.

### The Real Benefits:
- **Stress reduction**: Know exactly where your money goes
- **Goal achievement**: Turn dreams into actionable plans  
- **Emergency preparedness**: Build your safety net systematically
- **Guilt-free spending**: Enjoy purchases without worry

## Common Budgeting Myths

**Myth**: "Budgeting means I can't have fun"
**Reality**: Budgeting ensures you CAN have fun—guilt-free!

**Myth**: "I don't make enough to budget"
**Reality**: The less you make, the more important budgeting becomes.

> "A budget is telling your money where to go instead of wondering where it went." - Dave Ramsey`,
        category: 'budgeting',
        duration: 8,
        order: 1,
        keyTakeaways: [
          'Budgeting is about permission, not restriction',
          'It reduces financial stress and anxiety',
          'Everyone can benefit from budgeting, regardless of income level'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'track-your-spending',
        title: 'Track Your Current Spending',
        description: 'Learn simple methods to understand where your money actually goes each month.',
        content: `# Know Where Your Money Goes 📊

Before you can control your money, you need to understand your current spending patterns. This is like taking a financial selfie—it might be uncomfortable, but it's necessary!

## The 7-Day Money Tracking Challenge

For the next week, write down **every single purchase**. Yes, even that $3 coffee!

### What to Track:
- **Amount spent**
- **What you bought**
- **How you paid** (cash, card, app)
- **How you felt** (happy, guilty, stressed)

## Simple Tracking Methods

### Method 1: The Notebook Approach
Carry a small notebook and pen. Write it down immediately.

### Method 2: Phone Notes
Use your phone's notes app or voice memos.

### Method 3: Banking Apps
Most banks categorize your spending automatically.

## What You'll Discover

Most people are shocked to learn:
- Small purchases add up to big amounts
- Emotional spending patterns
- "Money leaks" they didn't know existed

> "What gets measured gets managed." - Peter Drucker`,
        category: 'budgeting',
        duration: 10,
        order: 2,
        keyTakeaways: [
          'Track every purchase for at least 7 days',
          'Small expenses add up to significant amounts',
          'Awareness is the first step to control'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'categorize-expenses',
        title: 'Categorize Your Expenses',
        description: 'Organize your spending into clear categories to identify patterns and opportunities.',
        content: `# Organize Your Financial Life 📋

Now that you know where your money goes, let's organize it into categories. This is like sorting your closet—suddenly everything makes sense!

## The Big Three Categories

### 1. Needs (50-60% of income)
- Housing (rent/mortgage, utilities)
- Transportation (car payment, gas, insurance)
- Food (groceries, not dining out)
- Minimum debt payments
- Basic insurance

### 2. Wants (20-30% of income)
- Dining out and entertainment
- Hobbies and subscriptions
- Shopping and personal care
- Travel and vacations

### 3. Savings & Debt (20% of income)
- Emergency fund
- Retirement savings
- Extra debt payments
- Investment accounts

## Pro Tips for Categorizing

**Be honest**: That daily latte is a "want," not a "need"
**Be specific**: Break down large categories (separate groceries from dining out)
**Be consistent**: Use the same categories each month

## Red Flags to Watch For

- Needs taking up more than 70% of income
- No money going to savings
- Credit card balances growing monthly

> "You must gain control over your money or the lack of it will forever control you." - Dave Ramsey`,
        category: 'budgeting',
        duration: 12,
        order: 3,
        keyTakeaways: [
          'Organize spending into Needs, Wants, and Savings',
          'Needs should be 50-60% of your income',
          'Always allocate something to savings, even if small'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'create-your-budget',
        title: 'Create Your First Budget',
        description: 'Build a realistic budget that you can actually stick to using proven methods.',
        content: `# Build Your Money Plan 🎯

Time to create your first budget! Remember, the best budget is the one you'll actually use.

## The 50/30/20 Rule (Perfect for Beginners)

This simple framework works for most people:

### 50% - Needs
Your essential expenses that you can't avoid.

### 30% - Wants  
Fun money for the things that make life enjoyable.

### 20% - Savings & Debt
Building your future and eliminating debt.

## Step-by-Step Budget Creation

### Step 1: Calculate Your After-Tax Income
Use your actual take-home pay, not your gross salary.

### Step 2: List Your Fixed Expenses
- Rent/mortgage
- Insurance premiums
- Loan payments
- Subscriptions

### Step 3: Estimate Variable Expenses
- Groceries
- Gas
- Utilities
- Entertainment

### Step 4: Assign Every Dollar
Make sure Income - Expenses = $0

## Budget Tools That Work

- **Pen and paper**: Simple and effective
- **Spreadsheets**: Great for detail-oriented people
- **Apps**: Mint, YNAB, or your bank's app

> "A goal without a plan is just a wish." - Antoine de Saint-Exupéry`,
        category: 'budgeting',
        duration: 15,
        order: 4,
        keyTakeaways: [
          'Use the 50/30/20 rule as a starting framework',
          'Assign every dollar a purpose',
          'Choose budgeting tools that match your personality'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'advanced-budgeting',
    title: 'Advanced Budgeting Strategies',
    description: 'Take your budgeting skills to the next level with sophisticated techniques and methods.',
    color: '#059669',
    icon: 'target',
    difficulty: 'Intermediate',
    rating: 4.7,
    totalDuration: 50,
    lessons: [
      {
        id: 'zero-based-budgeting',
        title: 'Zero-Based Budgeting',
        description: 'Master the art of giving every dollar a job with this powerful budgeting method.',
        content: `# Give Every Dollar a Purpose 🎯

Zero-based budgeting means your income minus expenses equals zero. Every dollar has a job before you spend it!

## How Zero-Based Budgeting Works

### The Formula:
**Income - Expenses - Savings = $0**

This doesn't mean you spend everything—it means you've assigned every dollar to a category, including savings.

## Step-by-Step Process

### 1. Start with Your Income
Use your actual take-home pay for the month.

### 2. List All Expenses
- Fixed expenses (rent, insurance)
- Variable expenses (groceries, gas)
- Savings goals
- Fun money

### 3. Assign Every Dollar
Keep adjusting categories until you reach zero.

## Example: Sarah's Zero-Based Budget

**Monthly Income**: $4,000

**Expenses**:
- Rent: $1,200
- Groceries: $400
- Car payment: $300
- Insurance: $200
- Utilities: $150
- Emergency fund: $300
- Retirement: $400
- Entertainment: $200
- Miscellaneous: $150
- Gas: $100
- Phone: $100

**Total**: $4,000 (Zero remaining!)

## Benefits of Zero-Based Budgeting

- **Intentional spending**: Every purchase is planned
- **No money waste**: Nothing falls through the cracks
- **Goal achievement**: Savings are built into the plan
- **Flexibility**: Adjust categories as needed

> "Every dollar must have a destination before it leaves your pocket."`,
        category: 'budgeting',
        duration: 12,
        order: 1,
        keyTakeaways: [
          'Assign every dollar before spending it',
          'Income minus expenses should equal zero',
          'Include savings as a non-negotiable expense'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'envelope-method',
        title: 'The Envelope Method',
        description: 'Use cash envelopes to control spending and stick to your budget categories.',
        content: `# Cash Control System 💰

The envelope method uses physical cash to control spending. When the envelope is empty, you're done spending in that category!

## How the Envelope Method Works

### 1. Choose Your Categories
Pick 3-5 variable expense categories:
- Groceries
- Entertainment
- Dining out
- Personal care
- Gas

### 2. Calculate Monthly Amounts
Based on your budget, determine how much cash goes in each envelope.

### 3. Fill the Envelopes
At the beginning of each month, put cash in each envelope.

### 4. Spend Only What's There
When an envelope is empty, you're done spending in that category.

## Digital Envelope Method

Don't want to use cash? Try these alternatives:

### Separate Bank Accounts
Create different savings accounts for each category.

### Prepaid Cards
Load specific amounts onto different cards.

### Banking Apps
Many banks offer "envelope" features digitally.

## Pro Tips for Success

- **Start small**: Begin with 2-3 categories
- **Be realistic**: Don't set amounts too low
- **Plan for leftovers**: Roll unused money to next month or savings
- **Emergency clause**: Have a plan for true emergencies

## Real Example: Mike's Envelopes

**Monthly Envelope Amounts**:
- Groceries: $400
- Entertainment: $150
- Dining out: $200
- Personal care: $75
- Gas: $120

**Result**: Mike reduced overspending by 60% in the first month!

> "Cash makes spending real and immediate."`,
        category: 'budgeting',
        duration: 10,
        order: 2,
        keyTakeaways: [
          'Use cash to make spending more tangible',
          'When the envelope is empty, stop spending',
          'Start with 3-5 variable expense categories'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386398/pexels-photo-4386398.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'percentage-based-budgeting',
        title: 'Percentage-Based Budgeting',
        description: 'Learn flexible budgeting systems that adapt to your changing income.',
        content: `# Flexible Budget Framework 📊

Percentage-based budgeting adapts to income changes, making it perfect for irregular earners or those wanting flexibility.

## Popular Percentage Systems

### The 50/30/20 Rule
- **50%** Needs (housing, food, utilities)
- **30%** Wants (entertainment, hobbies)
- **20%** Savings & debt payment

### The 60/20/20 Rule (Conservative)
- **60%** Needs
- **20%** Wants
- **20%** Savings & debt payment

### The 80/20 Rule (Simple)
- **80%** All expenses
- **20%** Savings

## Customizing Your Percentages

### High Earners Might Use:
- **40%** Needs
- **30%** Wants
- **30%** Savings & investments

### Debt Payoff Focus:
- **50%** Needs
- **20%** Wants
- **30%** Debt & savings

### Young Professionals:
- **60%** Needs
- **25%** Wants
- **15%** Savings (building up)

## How to Calculate

### Example with $5,000 monthly income:

**50/30/20 Breakdown**:
- Needs: $2,500
- Wants: $1,500
- Savings: $1,000

## Adjusting for Life Changes

### Income Increase:
Maintain percentages but increase dollar amounts.

### Income Decrease:
Keep percentages but reduce spending in each category.

### Life Events:
Temporarily adjust percentages (new baby, job loss, etc.).

## Tracking Your Percentages

- Review monthly to ensure you're on track
- Adjust categories if consistently over/under
- Use apps that calculate percentages automatically

> "Percentages provide structure while maintaining flexibility."`,
        category: 'budgeting',
        duration: 11,
        order: 3,
        keyTakeaways: [
          'Percentages adapt to income changes automatically',
          'Choose ratios that match your financial goals',
          'Adjust percentages for major life changes'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386454/pexels-photo-4386454.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'irregular-income-budgeting',
        title: 'Budgeting with Irregular Income',
        description: 'Special strategies for freelancers, commission workers, and seasonal employees.',
        content: `# Master Variable Income 📈

Irregular income doesn't mean irregular budgeting! Learn strategies to manage money when paychecks vary.

## The Challenge of Irregular Income

### Common Sources:
- Freelancing and consulting
- Commission-based sales
- Seasonal work
- Small business ownership
- Gig economy jobs

### The Problems:
- Hard to predict monthly income
- Feast or famine cycles
- Difficulty planning expenses
- Stress during low-income periods

## Strategy 1: The Baseline Budget

### Step 1: Calculate Your Minimum
Look at your lowest-earning months over the past year.

### Step 2: Create a Survival Budget
Build a budget based on this minimum amount.

### Step 3: Cover Essentials First
- Housing
- Food
- Transportation
- Insurance
- Minimum debt payments

### Example: Lisa's Baseline
**Lowest month**: $2,800
**Baseline budget**: $2,500 (safety margin)

## Strategy 2: The Percentage Method

### Allocate Every Dollar Immediately:
- **50%** Current month expenses
- **25%** Next month's expenses
- **15%** Emergency fund
- **10%** Goals/investments

## Strategy 3: The Peak and Valley System

### During High-Income Months:
- Pay all bills for next 2-3 months
- Build emergency fund aggressively
- Save for taxes (if self-employed)
- Invest surplus

### During Low-Income Months:
- Use pre-paid bills
- Rely on emergency fund if needed
- Focus on essential expenses only

## Essential Tools for Irregular Income

### 1. Larger Emergency Fund
Aim for 6-12 months of expenses instead of 3-6.

### 2. Separate Tax Account
Set aside 25-30% of income for taxes.

### 3. Income Smoothing Account
Save high-income months to supplement low ones.

> "Irregular income requires regular discipline."`,
        category: 'budgeting',
        duration: 13,
        order: 4,
        keyTakeaways: [
          'Create a baseline budget using your lowest income month',
          'Build a larger emergency fund (6-12 months)',
          'Use high-income months to prepare for low ones'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'emergency-fund',
    title: 'Emergency Fund Essentials',
    description: 'Build your financial safety net with a step-by-step emergency fund strategy.',
    color: '#10B981',
    icon: 'star',
    difficulty: 'Beginner',
    rating: 4.9,
    totalDuration: 35,
    lessons: [
      {
        id: 'why-emergency-fund',
        title: 'Why You Need an Emergency Fund',
        description: 'Understand the critical importance of having money set aside for unexpected expenses.',
        content: `# Your Financial Safety Net 🛡️

An emergency fund isn't just nice to have—it's your financial lifeline when life throws you curveballs.

## What Counts as an Emergency?

### True Emergencies:
- **Medical bills** not covered by insurance
- **Job loss** or reduced income
- **Major car repairs** needed for work
- **Home repairs** (roof leak, broken furnace)
- **Family emergencies** requiring travel

### NOT Emergencies:
- Vacations (even "once in a lifetime" ones)
- Holiday gifts
- Sale items you "can't miss"
- Routine car maintenance

## The Real Cost of No Emergency Fund

Without an emergency fund, you're forced to:
- Use high-interest credit cards
- Borrow from retirement accounts (with penalties)
- Ask family for money
- Take predatory loans

### The Stress Factor
Studies show that people without emergency funds experience:
- Higher stress levels
- More relationship conflicts
- Poorer decision-making under pressure

## Peace of Mind is Priceless

Having an emergency fund means:
- Sleeping better at night
- Making decisions from strength, not desperation
- Protecting your long-term financial goals

> "It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for." - Robert Kiyosaki`,
        category: 'emergency-fund',
        duration: 8,
        order: 1,
        keyTakeaways: [
          'Emergency funds prevent debt when unexpected expenses arise',
          'True emergencies are unplanned and necessary expenses',
          'Financial security reduces stress and improves decision-making'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'how-much-to-save',
        title: 'How Much Should You Save?',
        description: 'Determine the right emergency fund size for your unique situation and lifestyle.',
        content: `# Finding Your Magic Number 🎯

The "right" amount for your emergency fund depends on your unique situation. Let's find your perfect target!

## The Standard Guidelines

### Starter Emergency Fund: $1,000
Perfect if you're paying off debt. This covers most small emergencies without derailing your debt payoff.

### Full Emergency Fund: 3-6 Months of Expenses
This is your ultimate goal. Notice it's **expenses**, not income!

## Factors That Increase Your Target

You might need **6+ months** if you have:
- **Irregular income** (freelancer, commission-based)
- **Specialized job** that's hard to replace
- **Health issues** requiring ongoing care
- **Single income household** with dependents
- **Older home or car** prone to repairs

## Factors That Decrease Your Target

You might be fine with **3 months** if you have:
- **Stable job** in a growing industry
- **Dual income household**
- **Strong family support** system
- **Excellent health insurance**
- **Reliable transportation**

## Calculate Your Number

### Step 1: Add up monthly expenses
- Housing, food, transportation
- Insurance, utilities, minimum debt payments
- Basic personal care and necessities

### Step 2: Multiply by your target months
- Conservative: 6 months
- Moderate: 4-5 months  
- Aggressive: 3 months

### Example:
Monthly expenses: $3,000
Target: 4 months
Emergency fund goal: $12,000

> "The real measure of your wealth is how much you'd be worth if you lost all your money." - Anonymous`,
        category: 'emergency-fund',
        duration: 10,
        order: 2,
        keyTakeaways: [
          'Start with $1,000, then build to 3-6 months of expenses',
          'Base the amount on expenses, not income',
          'Adjust target based on job stability and personal factors'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'where-to-keep-emergency-fund',
        title: 'Where to Keep Your Emergency Fund',
        description: 'Learn the best places to store your emergency money for quick access and safety.',
        content: `# The Perfect Emergency Fund Home 🏠

Your emergency fund needs to be safe, accessible, and earning some interest. Here's where to park it!

## The Golden Rules

### 1. Liquid and Accessible
You should be able to access your money within 24-48 hours, no penalties.

### 2. Safe and Insured
FDIC-insured accounts protect up to $250,000 per depositor, per bank.

### 3. Separate from Daily Banking
Keep it away from your checking account to avoid temptation.

## Best Options for Emergency Funds

### High-Yield Savings Accounts ⭐⭐⭐⭐⭐
- **Pros**: FDIC insured, higher interest than traditional savings
- **Cons**: May have minimum balance requirements
- **Best for**: Most people

### Money Market Accounts ⭐⭐⭐⭐
- **Pros**: Higher interest, may include check-writing
- **Cons**: Higher minimum balances, limited transactions
- **Best for**: Larger emergency funds ($10,000+)

### Certificates of Deposit (CDs) ⭐⭐⭐
- **Pros**: Higher interest rates, FDIC insured
- **Cons**: Money locked up for set period, early withdrawal penalties
- **Best for**: Part of a larger emergency fund strategy

## Where NOT to Keep Emergency Funds

### ❌ Checking Account
Too easy to spend, very low interest

### ❌ Investment Accounts
Market volatility could reduce value when you need it most

### ❌ Under Your Mattress
No interest, not insured, security risk

## Pro Tips

- **Shop around**: Online banks often offer better rates
- **Automate**: Set up automatic transfers to build your fund
- **Review annually**: Interest rates change, so should your account

> "An investment in knowledge pays the best interest." - Benjamin Franklin`,
        category: 'emergency-fund',
        duration: 9,
        order: 3,
        keyTakeaways: [
          'High-yield savings accounts are ideal for most people',
          'Keep emergency funds separate from daily banking',
          'Prioritize accessibility and safety over high returns'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'build-emergency-fund-fast',
        title: 'How to Build Your Fund Fast',
        description: 'Practical strategies to accelerate your emergency fund savings without sacrificing your lifestyle.',
        content: `# Turbocharge Your Emergency Fund 🚀

Building an emergency fund doesn't have to take forever. Here are proven strategies to reach your goal faster!

## The Quick Start Strategy

### Week 1: Find Your "Found Money"
- Check old bank accounts
- Look for unclaimed property online
- Cash in loose change
- Return unused items
- **Goal**: $100-500 to jumpstart your fund

## Accelerated Saving Techniques

### The 52-Week Challenge
- Week 1: Save $1
- Week 2: Save $2
- Week 52: Save $52
- **Total**: $1,378 in one year!

### The Percentage Method
Start small and increase gradually:
- Month 1-2: Save 1% of income
- Month 3-4: Save 2% of income
- Month 5-6: Save 3% of income
- Continue until you reach 10-15%

## Creative Ways to Boost Savings

### Sell Stuff You Don't Need
- Old electronics and gadgets
- Clothes you never wear
- Books, DVDs, games
- Exercise equipment gathering dust

### Side Hustle Ideas (2-5 hours/week)
- Food delivery driving
- Pet sitting or dog walking
- Freelance skills (writing, design, tutoring)
- Sell handmade items online

### Expense Cutting Champions
- Cancel unused subscriptions
- Cook at home more often
- Use the library instead of buying books
- Find free entertainment options

## The Windfall Strategy

Put 100% of unexpected money toward your emergency fund:
- Tax refunds
- Work bonuses
- Cash gifts
- Insurance refunds

## Automation is Your Friend

Set up automatic transfers:
- **Weekly**: $25 = $1,300/year
- **Bi-weekly**: $50 = $1,300/year
- **Monthly**: $100 = $1,200/year

> "Do not save what is left after spending, but spend what is left after saving." - Warren Buffett`,
        category: 'emergency-fund',
        duration: 8,
        order: 4,
        keyTakeaways: [
          'Start with found money and small amounts',
          'Use windfalls to accelerate your progress',
          'Automate transfers to build the habit'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'debt-elimination',
    title: 'Debt Elimination Strategies',
    description: 'Proven methods to pay off debt faster and regain control of your financial future.',
    color: '#8B5CF6',
    icon: 'trending-up',
    difficulty: 'Intermediate',
    rating: 4.7,
    totalDuration: 40,
    lessons: [
      {
        id: 'debt-reality-check',
        title: 'Your Debt Reality Check',
        description: 'Face your debt head-on and create a complete picture of what you owe.',
        content: `# Face Your Debt Reality 📊

The first step to conquering debt is knowing exactly what you're dealing with. It's time for some financial honesty!

## The Complete Debt Inventory

Gather all your statements and list every debt:

### For Each Debt, Record:
- **Creditor name**
- **Total balance owed**
- **Minimum monthly payment**
- **Interest rate (APR)**
- **Due date**

### Types of Debt to Include:
- Credit cards
- Student loans
- Car loans
- Personal loans
- Medical debt
- Money owed to family/friends

## Calculate Your Debt-to-Income Ratio

**Formula**: Total monthly debt payments ÷ Monthly gross income × 100

### What Your Ratio Means:
- **Under 20%**: Excellent financial health
- **20-36%**: Manageable but watch carefully
- **Over 36%**: Time for aggressive debt reduction

## The Emotional Side of Debt

It's normal to feel:
- Overwhelmed by the total amount
- Ashamed about past decisions
- Anxious about the future

**Remember**: You're not alone, and you're taking the right steps by facing this now.

## Debt Reality Examples

### Sarah's Situation:
- Credit Card 1: $3,200 at 18.9%
- Credit Card 2: $1,800 at 22.4%
- Car loan: $12,000 at 4.2%
- **Total debt**: $17,000
- **Monthly payments**: $580
- **Income**: $4,000/month
- **Debt-to-income**: 14.5% ✅

> "The first step toward getting somewhere is to decide you're not going to stay where you are." - J.P. Morgan`,
        category: 'debt',
        duration: 10,
        order: 1,
        keyTakeaways: [
          'List every debt with balance, payment, and interest rate',
          'Calculate your debt-to-income ratio',
          'Acknowledge emotions but focus on action'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386398/pexels-photo-4386398.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'debt-avalanche-method',
        title: 'The Debt Avalanche Method',
        description: 'Learn the mathematically optimal way to pay off debt and save the most money on interest.',
        content: `# The Math-Smart Debt Strategy 🧮

The debt avalanche method saves you the most money by targeting high-interest debt first. Let's break it down!

## How the Debt Avalanche Works

### Step 1: List debts by interest rate (highest to lowest)
### Step 2: Pay minimums on all debts
### Step 3: Put extra money toward the highest-rate debt
### Step 4: When that's paid off, move to the next highest rate

## Real Example: Sarah's Avalanche

**Sarah's debts ranked by interest rate:**
1. Credit Card 2: $1,800 at 22.4% (target first)
2. Credit Card 1: $3,200 at 18.9% (target second)
3. Car loan: $12,000 at 4.2% (target last)

**Sarah's strategy:**
- Pay minimums: CC1 ($80), Car ($280) = $360
- Extra $200/month goes to CC2
- CC2 payment: $100 minimum + $200 extra = $300

## Why This Method Works

### The Math:
- Eliminates highest interest charges first
- Saves the most money over time
- Creates momentum as debts disappear

### Sarah's Savings:
Using avalanche vs. minimum payments only:
- **Time saved**: 3 years
- **Interest saved**: $4,200

## Pros and Cons

### ✅ Pros:
- Mathematically optimal
- Saves the most money
- Logical and systematic

### ❌ Cons:
- May take longer to see first debt eliminated
- Requires discipline and patience
- Less emotional satisfaction initially

## When to Choose Avalanche

Perfect if you:
- Are motivated by saving money
- Can stick to a plan long-term
- Have significant high-interest debt
- Are comfortable with delayed gratification

> "In investing, what is comfortable is rarely profitable." - Robert Arnott`,
        category: 'debt',
        duration: 10,
        order: 2,
        keyTakeaways: [
          'Target highest interest rate debt first',
          'Saves the most money mathematically',
          'Requires patience but maximizes savings'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386454/pexels-photo-4386454.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'debt-snowball-method',
        title: 'The Debt Snowball Method',
        description: 'Discover the psychologically powerful approach that builds momentum through quick wins.',
        content: `# The Motivation-Powered Strategy ⛄

The debt snowball method prioritizes psychological wins over mathematical optimization. Sometimes motivation matters more than math!

## How the Debt Snowball Works

### Step 1: List debts by balance (smallest to largest)
### Step 2: Pay minimums on all debts
### Step 3: Put extra money toward the smallest balance
### Step 4: When paid off, add that payment to the next smallest debt

## Real Example: Mike's Snowball

**Mike's debts ranked by balance:**
1. Medical bill: $500 at 0% (target first)
2. Credit Card 1: $1,200 at 19.9% (target second)
3. Credit Card 2: $3,500 at 16.9% (target third)
4. Car loan: $8,000 at 5.2% (target last)

**Mike's strategy:**
- Pay minimums on all except smallest
- Extra $300/month goes to medical bill
- Medical bill gone in 2 months!

## The Psychology Behind Snowball

### Why It Works:
- **Quick wins** build confidence
- **Visible progress** maintains motivation
- **Simplified focus** reduces overwhelm
- **Momentum builds** as debts disappear

### The Snowball Effect:
Month 1-2: Pay off $500 medical bill
Month 3-6: $300 + $50 (old medical payment) = $350 toward CC1
Month 7-12: $350 + $120 (old CC1 payment) = $470 toward CC2

## Pros and Cons

### ✅ Pros:
- Quick psychological wins
- Builds momentum and motivation
- Simplifies your debt list faster
- Great for people who need encouragement

### ❌ Cons:
- May cost more in interest over time
- Not mathematically optimal
- Ignores interest rates

## When to Choose Snowball

Perfect if you:
- Need motivation to stick with debt payoff
- Have struggled with debt elimination before
- Have several small debts
- Value psychological wins over mathematical optimization

## Hybrid Approach

Can't decide? Try this:
- Use snowball for debts under $1,000
- Use avalanche for larger debts
- Get quick wins AND save on interest

> "Success is the sum of small efforts repeated day in and day out." - Robert Collier`,
        category: 'debt',
        duration: 10,
        order: 3,
        keyTakeaways: [
          'Target smallest balance first for quick wins',
          'Builds momentum through psychological victories',
          'Great for people who need motivation to stick with the plan'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'find-extra-money-for-debt',
        title: 'Find Extra Money for Debt Payments',
        description: 'Discover hidden money in your budget and creative ways to accelerate debt payoff.',
        content: `# Uncover Hidden Money 💰

The key to faster debt payoff is finding extra money in your existing budget. Let's go treasure hunting!

## Budget Archaeology: Dig for Money

### The Monthly Subscription Audit
Review your bank statements for recurring charges:
- Streaming services you forgot about
- Gym memberships you don't use
- Apps with monthly fees
- Magazine subscriptions
- **Potential savings**: $50-200/month

### The "Latte Factor" Analysis
Small daily expenses that add up:
- Daily coffee: $5 × 30 days = $150/month
- Lunch out: $12 × 20 workdays = $240/month
- Convenience store snacks: $3 × 30 days = $90/month
- **Potential savings**: $100-500/month

## The 30-Day Spending Challenge

For one month, before any non-essential purchase ask:
- Do I really need this?
- Can I wait 24 hours?
- Is there a cheaper alternative?
- How many debt payments is this worth?

## Creative Income Boosters

### Sell Your Stuff
- Electronics and gadgets
- Designer clothes and accessories
- Collectibles and antiques
- Furniture you don't need
- **Potential income**: $500-2,000

### Gig Economy Opportunities
- Food delivery (Uber Eats, DoorDash)
- Rideshare driving (Uber, Lyft)
- Task services (TaskRabbit, Handy)
- Pet services (Rover, Wag)
- **Potential income**: $200-1,000/month

### Skill Monetization
- Freelance writing or design
- Tutoring or teaching
- Photography services
- Handmade crafts
- **Potential income**: $300-1,500/month

## The Windfall Strategy

Direct 100% of unexpected money to debt:
- Tax refunds
- Work bonuses
- Cash gifts
- Insurance refunds
- Garage sale proceeds

## Real Example: Lisa's Extra Money Hunt

**Lisa found an extra $380/month:**
- Cancelled unused gym: $40
- Reduced dining out: $200
- Sold old electronics: $500 (one-time)
- Weekend dog walking: $140
- **Result**: Paid off $8,000 in credit cards 18 months faster!

## The Envelope Method for Debt

Put cash in envelopes for:
- Groceries
- Entertainment
- Personal care
- Gas

When the envelope is empty, you're done spending in that category. Leftover cash goes to debt!

> "A penny saved is a penny earned." - Benjamin Franklin`,
        category: 'debt',
        duration: 10,
        order: 4,
        keyTakeaways: [
          'Audit subscriptions and small daily expenses',
          'Use windfalls and side income for debt payments',
          'Every extra dollar accelerates your debt freedom'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'investing-basics',
    title: 'Investing Fundamentals',
    description: 'Start your investment journey with confidence. Learn the basics of building wealth through investing.',
    color: '#F59E0B',
    icon: 'trending-up',
    difficulty: 'Beginner',
    rating: 4.8,
    totalDuration: 55,
    lessons: [
      {
        id: 'why-invest',
        title: 'Why You Need to Invest',
        description: 'Understand why investing is essential for building wealth and beating inflation.',
        content: `# The Power of Investing 📈

Saving money is important, but investing is what builds real wealth. Let's explore why investing is crucial for your financial future.

## The Inflation Problem

### What is Inflation?
Inflation is the gradual increase in prices over time. What costs $1 today might cost $1.03 next year.

### The Silent Wealth Killer
If you keep money in a savings account earning 1% while inflation is 3%, you're actually losing 2% of purchasing power each year.

### Historical Example:
- 1990: Average car price $16,000
- 2023: Average car price $48,000
- **That's 200% inflation over 33 years!**

## The Magic of Compound Growth

### Einstein's "8th Wonder"
"Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it."

### How Compounding Works:
- Year 1: $1,000 grows to $1,070 (7% return)
- Year 2: $1,070 grows to $1,145 (earning on the original $1,000 PLUS the $70 gain)
- Year 10: $1,967
- Year 30: $7,612

## Real Wealth Building Examples

### The Coffee Shop Investment:
Instead of buying a $5 coffee daily, invest that $150/month:
- **10 years**: $25,000
- **20 years**: $73,000  
- **30 years**: $181,000

### The Early Start Advantage:
**Sarah starts at 25**: Invests $200/month until 35 (10 years), then stops
**Mike starts at 35**: Invests $200/month until 65 (30 years)

**At age 65**:
- Sarah: $602,000 (invested $24,000)
- Mike: $566,000 (invested $72,000)

## Investment vs. Savings

### Savings Account (1% return):
$100/month for 30 years = $36,000 + $6,000 interest = $42,000

### Investment Account (7% return):
$100/month for 30 years = $36,000 + $85,000 growth = $121,000

**Difference**: $79,000 more by investing!

> "The best time to plant a tree was 20 years ago. The second best time is now." - Chinese Proverb`,
        category: 'investing',
        duration: 12,
        order: 1,
        keyTakeaways: [
          'Inflation erodes the purchasing power of cash over time',
          'Compound growth is the key to building long-term wealth',
          'Starting early gives you a massive advantage'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'investment-basics',
        title: 'Investment Basics: Stocks, Bonds & More',
        description: 'Learn about different types of investments and how they work to grow your money.',
        content: `# Understanding Investment Types 🏗️

Before you invest, you need to understand what you're buying. Let's explore the main investment types and how they work.

## Stocks (Equities)

### What Are Stocks?
When you buy stock, you own a tiny piece of a company. If the company does well, your stock value goes up.

### How Stocks Make Money:
1. **Capital Appreciation**: Stock price increases
2. **Dividends**: Company shares profits with shareholders

### Example:
You buy 10 shares of Apple at $150 each ($1,500 total)
- Stock rises to $180: Your shares are worth $1,800 (20% gain)
- Apple pays $0.25/share dividend: You receive $2.50

### Risk Level: High
Stocks can be volatile but historically provide the best long-term returns.

## Bonds (Fixed Income)

### What Are Bonds?
Bonds are loans you give to companies or governments. They pay you interest and return your money at maturity.

### How Bonds Work:
- You lend $1,000 to a company for 10 years at 5% interest
- You receive $50 per year in interest
- After 10 years, you get your $1,000 back

### Types of Bonds:
- **Government bonds**: Very safe, lower returns
- **Corporate bonds**: Higher risk, higher returns
- **Municipal bonds**: Often tax-free

### Risk Level: Low to Medium
Bonds are generally safer than stocks but offer lower returns.

## Mutual Funds

### What Are Mutual Funds?
A mutual fund pools money from many investors to buy a diversified portfolio of stocks, bonds, or both.

### Benefits:
- **Instant diversification**: Own hundreds of stocks with one purchase
- **Professional management**: Experts pick the investments
- **Low minimum investment**: Start with as little as $100

### Example:
The Vanguard S&P 500 fund owns all 500 companies in the S&P 500 index.

## Exchange-Traded Funds (ETFs)

### What Are ETFs?
Similar to mutual funds but trade like stocks on the exchange.

### Advantages:
- Lower fees than mutual funds
- More flexible trading
- Tax efficient
- Broad diversification

### Popular ETFs:
- **VTI**: Total US stock market
- **VXUS**: International stocks
- **BND**: US bond market

## Real Estate Investment Trusts (REITs)

### What Are REITs?
Companies that own and operate income-producing real estate.

### Benefits:
- Invest in real estate without buying property
- High dividend yields
- Diversification beyond stocks and bonds

> "Diversification is protection against ignorance. It makes little sense if you know what you are doing." - Warren Buffett`,
        category: 'investing',
        duration: 15,
        order: 2,
        keyTakeaways: [
          'Stocks offer high growth potential but with higher risk',
          'Bonds provide steady income with lower risk',
          'Mutual funds and ETFs offer instant diversification'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'risk-and-return',
        title: 'Understanding Risk and Return',
        description: 'Learn how risk and return are related and how to balance them in your portfolio.',
        content: `# The Risk-Return Relationship ⚖️

In investing, risk and return go hand in hand. Understanding this relationship is crucial for making smart investment decisions.

## The Fundamental Rule

### Higher Risk = Higher Potential Return
### Lower Risk = Lower Potential Return

This isn't a guarantee—it's a general principle that guides investment decisions.

## Types of Investment Risk

### Market Risk
The risk that the entire market declines, affecting all investments.
- **Example**: 2008 financial crisis, COVID-19 pandemic

### Company Risk
The risk that a specific company performs poorly.
- **Example**: A company's CEO resigns, causing stock price to drop

### Inflation Risk
The risk that your returns don't keep up with inflation.
- **Example**: Earning 2% when inflation is 4%

### Interest Rate Risk
The risk that changing interest rates affect your investments.
- **Example**: Bond prices fall when interest rates rise

## Risk Tolerance Assessment

### Conservative Investor
- **Risk tolerance**: Low
- **Time horizon**: Short (1-5 years)
- **Portfolio**: 20% stocks, 80% bonds
- **Expected return**: 4-6% annually

### Moderate Investor
- **Risk tolerance**: Medium
- **Time horizon**: Medium (5-15 years)
- **Portfolio**: 60% stocks, 40% bonds
- **Expected return**: 6-8% annually

### Aggressive Investor
- **Risk tolerance**: High
- **Time horizon**: Long (15+ years)
- **Portfolio**: 80% stocks, 20% bonds
- **Expected return**: 8-10% annually

## Historical Returns by Asset Class

### Stocks (1926-2022):
- **Average annual return**: 10.1%
- **Best year**: +54% (1935)
- **Worst year**: -43% (1931)

### Bonds (1926-2022):
- **Average annual return**: 5.5%
- **Best year**: +40% (1982)
- **Worst year**: -8% (1969)

### Cash/Savings (1926-2022):
- **Average annual return**: 3.3%
- **Most stable**: Rarely negative
- **Inflation-adjusted**: Often negative

## Managing Risk Through Diversification

### Don't Put All Eggs in One Basket
Spread investments across:
- Different asset classes (stocks, bonds, real estate)
- Different sectors (technology, healthcare, finance)
- Different geographies (US, international, emerging markets)

### Example of Diversification:
Instead of buying just Apple stock, buy:
- S&P 500 ETF (500 US companies)
- International ETF (1,000+ foreign companies)
- Bond ETF (thousands of bonds)

## Time Horizon and Risk

### Short-term (1-3 years):
Focus on capital preservation. Use savings accounts, CDs, or short-term bonds.

### Medium-term (3-10 years):
Balanced approach. Mix of stocks and bonds.

### Long-term (10+ years):
Can take more risk for higher returns. Focus on stocks.

> "Risk comes from not knowing what you're doing." - Warren Buffett`,
        category: 'investing',
        duration: 13,
        order: 3,
        keyTakeaways: [
          'Higher potential returns come with higher risk',
          'Diversification helps manage risk without sacrificing returns',
          'Your time horizon should determine your risk tolerance'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'getting-started-investing',
        title: 'Getting Started: Your First Investment',
        description: 'Step-by-step guide to making your first investment and building a simple portfolio.',
        content: `# Your First Investment Journey 🚀

Ready to start investing? Let's walk through the process step by step, from opening an account to making your first purchase.

## Step 1: Choose Your Investment Account

### Taxable Brokerage Account
- **Best for**: General investing, flexibility
- **Pros**: No contribution limits, access money anytime
- **Cons**: Pay taxes on gains and dividends

### Individual Retirement Account (IRA)
- **Best for**: Retirement savings
- **Pros**: Tax advantages, compound growth
- **Cons**: Penalties for early withdrawal

### 401(k) Through Employer
- **Best for**: Retirement with employer match
- **Pros**: Employer matching, tax benefits
- **Cons**: Limited investment options

## Step 2: Select a Brokerage

### Top Beginner-Friendly Brokers:
- **Fidelity**: $0 commissions, excellent research
- **Charles Schwab**: Great customer service, low fees
- **Vanguard**: Low-cost index funds
- **E*TRADE**: User-friendly platform

### What to Look For:
- $0 commission on stock/ETF trades
- Low account minimums
- Good mobile app
- Educational resources

## Step 3: Start Simple with Index Funds

### Why Index Funds for Beginners?
- **Instant diversification**: Own hundreds of stocks
- **Low fees**: Often under 0.1% annually
- **No stock picking**: Professional management
- **Consistent returns**: Match market performance

### Beginner-Friendly Index Funds:

#### Total Stock Market Index
- **Examples**: VTI, FZROX, SWTSX
- **What it owns**: Entire US stock market
- **Risk level**: Medium-high

#### S&P 500 Index
- **Examples**: VOO, FXAIX, SWPPX
- **What it owns**: 500 largest US companies
- **Risk level**: Medium-high

#### Target-Date Funds
- **Examples**: VTTSX (2030), FXIFX (2050)
- **What it owns**: Mix of stocks and bonds that adjusts over time
- **Risk level**: Varies by target date

## Step 4: Make Your First Purchase

### The Simple 3-Fund Portfolio:
1. **70% US Total Stock Market** (VTI)
2. **20% International Stocks** (VTIAX)
3. **10% Bonds** (BND)

### Even Simpler: Target-Date Fund
Choose a fund with a date close to when you'll retire:
- Age 25: Target-date 2065 fund
- Age 35: Target-date 2055 fund
- Age 45: Target-date 2045 fund

## Step 5: Automate Your Investments

### Set Up Automatic Investing:
- **Amount**: Start with $100-500/month
- **Frequency**: Monthly or bi-weekly
- **Investment**: Same fund(s) each time

### Dollar-Cost Averaging Benefits:
- Reduces impact of market volatility
- Builds discipline
- Takes emotion out of investing

## Your First Investment Checklist

✅ Emergency fund established (3-6 months expenses)
✅ High-interest debt paid off
✅ Brokerage account opened
✅ First investment chosen (index fund or target-date fund)
✅ Automatic investing set up
✅ Plan to increase contributions over time

## Common Beginner Mistakes to Avoid

### ❌ Trying to time the market
**Instead**: Invest regularly regardless of market conditions

### ❌ Picking individual stocks
**Instead**: Start with diversified index funds

### ❌ Checking your account daily
**Instead**: Review quarterly or annually

### ❌ Panic selling during market drops
**Instead**: Stay the course and keep investing

> "Time in the market beats timing the market." - Anonymous`,
        category: 'investing',
        duration: 15,
        order: 4,
        keyTakeaways: [
          'Start with simple, diversified index funds',
          'Automate your investments to build discipline',
          'Focus on time in market, not timing the market'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'investment-options',
    title: 'Investment Options Deep Dive',
    description: 'Explore various investment vehicles and learn how to choose the right ones for your goals.',
    color: '#DC2626',
    icon: 'star',
    difficulty: 'Intermediate',
    rating: 4.6,
    totalDuration: 60,
    lessons: [
      {
        id: 'index-funds-etfs',
        title: 'Index Funds vs ETFs',
        description: 'Compare these popular investment options and learn which might be better for you.',
        content: `# Index Funds vs ETFs: The Ultimate Comparison 🥊

Both index funds and ETFs offer diversification and low costs, but they have key differences. Let's break them down.

## What Are Index Funds?

### Definition:
Mutual funds that track a specific market index (like the S&P 500) by owning all or most of the stocks in that index.

### How They Work:
- Pool money from many investors
- Buy stocks to match an index
- Professional management
- Trade once per day after market close

### Popular Index Funds:
- **FXAIX**: Fidelity S&P 500 Index
- **VTSAX**: Vanguard Total Stock Market
- **SWTSX**: Schwab Total Stock Market

## What Are ETFs?

### Definition:
Exchange-Traded Funds that also track indexes but trade like individual stocks on the exchange.

### How They Work:
- Trade throughout the day
- Can be bought/sold anytime markets are open
- Usually lower expense ratios
- More tax efficient

### Popular ETFs:
- **VOO**: Vanguard S&P 500 ETF
- **VTI**: Vanguard Total Stock Market ETF
- **SCHB**: Schwab US Broad Market ETF

## Head-to-Head Comparison

### Trading Flexibility
**Index Funds**: Trade once daily at 4 PM ET
**ETFs**: Trade anytime during market hours
**Winner**: ETFs (but this rarely matters for long-term investors)

### Minimum Investment
**Index Funds**: Often $1,000-$3,000 minimum
**ETFs**: Price of one share (could be $50-$400)
**Winner**: ETFs

### Expense Ratios
**Index Funds**: 0.02% - 0.20%
**ETFs**: 0.03% - 0.15%
**Winner**: Tie (both very low)

### Tax Efficiency
**Index Funds**: May distribute capital gains
**ETFs**: More tax efficient structure
**Winner**: ETFs

### Automatic Investing
**Index Funds**: Easy to set up automatic investments
**ETFs**: Harder to automate (need whole shares)
**Winner**: Index Funds

### Dividend Reinvestment
**Index Funds**: Automatic, no fees
**ETFs**: May require manual reinvestment
**Winner**: Index Funds

## Real-World Examples

### Sarah's Index Fund Strategy:
- Invests $500/month automatically
- Buys VTSAX (Vanguard Total Stock Market)
- Dividends automatically reinvested
- Never thinks about trading

### Mike's ETF Strategy:
- Invests $500/month manually
- Buys VTI (same holdings as VTSAX)
- Slightly lower fees
- More control over timing

**Result**: After 20 years, the difference is minimal (less than 0.1% annually).

## Which Should You Choose?

### Choose Index Funds If:
- You want to automate everything
- You prefer simplicity
- You're investing small amounts regularly
- You don't want to think about trading

### Choose ETFs If:
- You want maximum tax efficiency
- You prefer lower fees
- You want trading flexibility
- You're investing larger lump sums

## The Hybrid Approach

Many investors use both:
- **401(k)**: Index funds (limited ETF options)
- **Taxable account**: ETFs (better tax efficiency)
- **IRA**: Either (taxes don't matter in retirement accounts)

## Common Misconceptions

### Myth: ETFs are riskier than index funds
**Reality**: If they track the same index, they have identical risk

### Myth: You need to actively trade ETFs
**Reality**: Buy and hold works just as well with ETFs

### Myth: Index funds are for beginners, ETFs for experts
**Reality**: Both are suitable for all experience levels

> "The beauty of index investing is its simplicity." - John Bogle`,
        category: 'investing',
        duration: 14,
        order: 1,
        keyTakeaways: [
          'Both index funds and ETFs offer low-cost diversification',
          'ETFs have slight advantages in fees and tax efficiency',
          'Index funds are easier to automate and manage'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386454/pexels-photo-4386454.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'individual-stocks',
        title: 'Individual Stock Investing',
        description: 'Learn the basics of picking and analyzing individual stocks for your portfolio.',
        content: `# Individual Stock Investing 📊

While index funds are great for beginners, some investors want to pick individual stocks. Here's how to do it intelligently.

## Why Pick Individual Stocks?

### Potential Benefits:
- **Higher returns**: Great companies can outperform the market
- **Control**: You choose exactly what you own
- **Learning**: Develops investment knowledge
- **Satisfaction**: Personal connection to your investments

### The Risks:
- **Concentration risk**: One bad pick can hurt badly
- **Time intensive**: Requires research and monitoring
- **Emotional decisions**: Fear and greed can lead to mistakes
- **Underperformance**: Most stock pickers underperform the market

## Fundamental Analysis Basics

### What to Look For:

#### Strong Financial Health
- **Revenue growth**: Increasing sales over time
- **Profit margins**: Company keeps more of what it earns
- **Low debt**: Not overleveraged
- **Cash flow**: Generates consistent cash

#### Competitive Advantages (Moats)
- **Brand power**: Coca-Cola, Apple
- **Network effects**: Facebook, Visa
- **Cost advantages**: Walmart
- **Switching costs**: Microsoft Office

#### Reasonable Valuation
- **P/E ratio**: Price compared to earnings
- **PEG ratio**: P/E relative to growth rate
- **Price-to-sales**: Revenue multiple

## Stock Analysis Example: Apple (AAPL)

### The Business:
- Designs and sells consumer electronics
- Strong ecosystem (iPhone, Mac, iPad, services)
- Premium pricing power

### Financial Strengths:
- **Revenue**: $394 billion (2022)
- **Profit margin**: 25%+ (excellent)
- **Cash**: $165 billion
- **Debt**: Manageable levels

### Competitive Moats:
- Brand loyalty
- Ecosystem lock-in
- Design excellence
- App Store network effects

### Valuation (as of example):
- P/E ratio: 28 (reasonable for growth)
- Growing services revenue
- Strong cash generation

## Building a Stock Portfolio

### The 5-10 Rule:
- **Minimum 5 stocks**: Reduces single-stock risk
- **Maximum 10 stocks**: Manageable for most people
- **Core holdings**: 3-5 large, stable companies
- **Growth picks**: 2-3 higher-risk, higher-reward stocks

### Sector Diversification:
Don't put all stocks in one industry:
- **Technology**: Apple, Microsoft
- **Healthcare**: Johnson & Johnson
- **Consumer goods**: Procter & Gamble
- **Finance**: JPMorgan Chase

## Stock Picking Strategies

### Value Investing
Look for undervalued companies:
- Low P/E ratios
- Strong balance sheets
- Temporary problems creating opportunity
- **Example**: Warren Buffett's approach

### Growth Investing
Focus on rapidly growing companies:
- High revenue growth
- Expanding markets
- Innovative products
- **Example**: Amazon in early 2000s

### Dividend Investing
Target companies that pay steady dividends:
- Consistent dividend payments
- Dividend growth over time
- Mature, stable businesses
- **Examples**: Coca-Cola, Johnson & Johnson

## Common Stock Picking Mistakes

### ❌ Following Hot Tips
**Instead**: Do your own research

### ❌ Buying What You Don't Understand
**Instead**: Stick to businesses you can comprehend

### ❌ Panic Selling
**Instead**: Focus on long-term business fundamentals

### ❌ Putting All Money in Stocks
**Instead**: Keep 80-90% in index funds, 10-20% in individual stocks

## The 90/10 Approach

For most investors, a balanced approach works best:
- **90%** in low-cost index funds (core holdings)
- **10%** in individual stocks (satellite holdings)

This gives you:
- Diversification and market returns from index funds
- Potential for outperformance from stock picks
- Limited downside if stock picks don't work out

> "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price." - Warren Buffett`,
        category: 'investing',
        duration: 16,
        order: 2,
        keyTakeaways: [
          'Individual stocks can outperform but require research and carry more risk',
          'Focus on companies with strong competitive advantages',
          'Consider a 90/10 approach: mostly index funds with some individual stocks'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'bonds-fixed-income',
        title: 'Bonds and Fixed Income',
        description: 'Understand how bonds work and their role in a balanced investment portfolio.',
        content: `# Bonds: The Steady Eddie of Investing 🏛️

Bonds might seem boring compared to stocks, but they play a crucial role in a balanced portfolio. Let's explore how they work.

## What Are Bonds?

### Simple Definition:
A bond is a loan you give to a company or government. They pay you interest and return your money at maturity.

### The Players:
- **Issuer**: The borrower (company, government)
- **Bondholder**: The lender (you)
- **Principal**: The amount borrowed
- **Coupon**: The interest payment
- **Maturity**: When the loan is repaid

## How Bonds Work

### Example: 10-Year Treasury Bond
- **Face value**: $1,000
- **Coupon rate**: 4% annually
- **Maturity**: 10 years

**What happens**:
- You pay $1,000 today
- Receive $40 per year for 10 years ($400 total)
- Get your $1,000 back after 10 years
- **Total return**: $1,400 over 10 years

## Types of Bonds

### Government Bonds
**US Treasury Bonds**:
- Backed by US government
- Virtually no default risk
- Lower interest rates
- **Examples**: 10-year Treasury, 30-year Treasury

**Municipal Bonds**:
- Issued by state/local governments
- Often tax-free
- Slightly higher risk than Treasuries

### Corporate Bonds
**Investment Grade**:
- Issued by stable companies
- Higher yields than government bonds
- Low default risk
- **Examples**: Apple, Microsoft bonds

**High-Yield (Junk) Bonds**:
- Issued by riskier companies
- Much higher interest rates
- Higher default risk

## Bond Risks

### Interest Rate Risk
When rates rise, bond prices fall:
- You own a 3% bond
- New bonds pay 5%
- Your bond becomes less valuable

### Credit Risk
The issuer might not pay you back:
- Company goes bankrupt
- Government defaults (rare for US)

### Inflation Risk
Fixed payments lose purchasing power:
- Bond pays 3% annually
- Inflation is 4%
- You lose 1% in real terms

## Bond Investing Strategies

### Individual Bonds
**Pros**:
- Know exactly what you own
- Predictable income stream
- Get full face value at maturity

**Cons**:
- Need large amounts for diversification
- Research required
- Reinvestment risk

### Bond Funds/ETFs
**Pros**:
- Instant diversification
- Professional management
- Low minimums
- Easy to buy/sell

**Cons**:
- No maturity date
- Interest rate risk
- Management fees

## Popular Bond Funds

### Total Bond Market
- **BND**: Vanguard Total Bond Market
- **AGG**: iShares Core US Aggregate Bond
- **FXNAX**: Fidelity US Bond Index

### Treasury Bonds
- **VGIT**: Vanguard Intermediate-Term Treasury
- **IEF**: iShares 7-10 Year Treasury

### Corporate Bonds
- **LQD**: iShares Investment Grade Corporate
- **VTC**: Vanguard Total Corporate Bond

## Bonds in Your Portfolio

### Young Investors (20s-30s):
- **10-20% bonds**: Small allocation for stability
- Focus on growth with stocks

### Middle-aged (40s-50s):
- **30-40% bonds**: Balanced approach
- Reducing risk as retirement approaches

### Near/In Retirement (60+):
- **40-60% bonds**: Capital preservation
- Steady income stream

## Bond Laddering Strategy

### How It Works:
Buy bonds with different maturity dates:
- 1-year bond: $10,000
- 2-year bond: $10,000
- 3-year bond: $10,000
- 4-year bond: $10,000
- 5-year bond: $10,000

### Benefits:
- Steady income stream
- Reinvestment opportunities
- Reduced interest rate risk

### When Each Matures:
Reinvest in a new 5-year bond, maintaining the ladder.

## I Bonds: Inflation Protection

### What Are I Bonds?
Treasury bonds that adjust for inflation:
- Current rate: 5.27% (as of example)
- Rate changes every 6 months
- $10,000 annual purchase limit
- Must hold for 1 year minimum

### Perfect For:
- Emergency fund alternative
- Inflation hedge
- Conservative investors

> "Bonds are the ballast that steadies the ship in stormy markets." - Anonymous`,
        category: 'investing',
        duration: 15,
        order: 3,
        keyTakeaways: [
          'Bonds provide steady income and portfolio stability',
          'Government bonds are safer but offer lower returns than corporate bonds',
          'Bond allocation should increase as you approach retirement'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'real-estate-investing',
        title: 'Real Estate Investment Options',
        description: 'Explore different ways to invest in real estate, from REITs to rental properties.',
        content: `# Real Estate: Building Wealth Through Property 🏠

Real estate has created more millionaires than any other investment. Let's explore your options for real estate investing.

## Why Invest in Real Estate?

### Benefits:
- **Tangible asset**: You can see and touch it
- **Income generation**: Rental income
- **Appreciation potential**: Property values increase over time
- **Inflation hedge**: Rents and values typically rise with inflation
- **Tax advantages**: Depreciation, deductions

### Challenges:
- **High capital requirements**: Need significant money to start
- **Illiquid**: Can't sell quickly like stocks
- **Management intensive**: Tenants, repairs, maintenance
- **Location dependent**: Local market matters greatly

## Real Estate Investment Options

### 1. Real Estate Investment Trusts (REITs)

#### What Are REITs?
Companies that own and operate income-producing real estate. You buy shares like stocks.

#### Types of REITs:
**Equity REITs**: Own physical properties
- Shopping malls, apartments, offices
- **Examples**: Realty Income (O), American Tower (AMT)

**Mortgage REITs**: Invest in real estate loans
- Higher yields but more volatile
- **Examples**: Annaly Capital (NLY)

#### REIT Benefits:
- **Low minimum**: Start with $100
- **Liquidity**: Trade like stocks
- **Diversification**: Own hundreds of properties
- **Professional management**: Experts handle operations
- **High dividends**: Required to pay 90% of income

#### Popular REIT ETFs:
- **VNQ**: Vanguard Real Estate ETF
- **SCHH**: Schwab US REIT ETF
- **FREL**: Fidelity MSCI Real Estate ETF

### 2. Rental Properties

#### Single-Family Homes:
**Pros**:
- Easier to understand and manage
- Strong rental demand
- Potential for appreciation

**Cons**:
- Vacancy means 100% income loss
- Maintenance responsibility
- Tenant management

#### Multi-Family Properties:
**Pros**:
- Multiple income streams
- Economies of scale
- Professional management options

**Cons**:
- Higher capital requirements
- More complex management
- Market dependent

### 3. Real Estate Crowdfunding

#### How It Works:
Pool money with other investors to buy properties through online platforms.

#### Popular Platforms:
- **Fundrise**: $10 minimum, diversified portfolios
- **RealtyMogul**: Accredited investors, commercial properties
- **YieldStreet**: Alternative investments including real estate

#### Benefits:
- Low minimums ($500-$1,000)
- Professional management
- Access to commercial properties
- Diversification

#### Drawbacks:
- Illiquid (typically 5+ year commitments)
- Platform risk
- Limited control

## Real Estate Analysis

### Key Metrics for Rental Properties:

#### Cap Rate (Capitalization Rate)
**Formula**: Net Operating Income ÷ Property Value
**Example**: $12,000 annual income ÷ $200,000 value = 6% cap rate

#### Cash-on-Cash Return
**Formula**: Annual Cash Flow ÷ Cash Invested
**Example**: $3,000 cash flow ÷ $50,000 down payment = 6%

#### 1% Rule
Monthly rent should equal 1% of purchase price:
- $200,000 house should rent for $2,000/month
- Harder to find in expensive markets

### Location Factors:
- **Job growth**: Growing employment
- **Population trends**: Increasing population
- **School quality**: Affects property values
- **Crime rates**: Safety matters
- **Future development**: Infrastructure improvements

## Getting Started in Real Estate

### Option 1: Start with REITs
**Best for**: Beginners, small budgets
**How**: Buy REIT ETF in brokerage account
**Amount**: Start with $100-1,000

### Option 2: House Hacking
**Strategy**: Buy duplex, live in one unit, rent the other
**Benefits**: Reduce living expenses, learn landlording
**Requirements**: Owner-occupant loan (lower down payment)

### Option 3: Real Estate Crowdfunding
**Best for**: Passive investors wanting real estate exposure
**How**: Sign up with platform, choose investments
**Amount**: $500-10,000 to start

### Option 4: Rental Property
**Best for**: Hands-on investors with capital
**Requirements**: 20-25% down payment, cash reserves
**Amount**: $50,000-100,000+ to start

## Real Estate in Your Portfolio

### Recommended Allocation:
- **5-15%** of total portfolio in REITs
- **0-25%** in direct real estate (if you choose this path)
- **Don't count** your primary residence as an investment

### Sample Portfolios:

#### Conservative (Age 50+):
- 50% Stocks
- 30% Bonds
- 15% REITs
- 5% Cash

#### Aggressive (Age 30):
- 80% Stocks
- 10% REITs
- 10% Bonds

> "Buy land, they're not making it anymore." - Mark Twain`,
        category: 'investing',
        duration: 15,
        order: 4,
        keyTakeaways: [
          'REITs offer easy, liquid access to real estate investing',
          'Direct real estate requires significant capital and management',
          'Real estate provides diversification and inflation protection'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'retirement-planning',
    title: 'Retirement Planning Mastery',
    description: 'Build a comprehensive retirement strategy that ensures financial security in your golden years.',
    color: '#7C3AED',
    icon: 'target',
    difficulty: 'Intermediate',
    rating: 4.9,
    totalDuration: 65,
    lessons: [
      {
        id: 'retirement-planning-basics',
        title: 'Retirement Planning Fundamentals',
        description: 'Learn the essential concepts and calculations for planning your retirement.',
        content: `# Your Retirement Roadmap 🗺️

Retirement planning isn't just about saving money—it's about creating a comprehensive strategy for your future financial independence.

## The Retirement Reality Check

### How Much Do You Need?
The traditional rule suggests you need **25 times your annual expenses** to retire comfortably.

**Example**:
- Annual expenses: $60,000
- Retirement nest egg needed: $1,500,000

### The 4% Rule
You can safely withdraw 4% of your retirement savings annually without running out of money.

**Example**:
- $1,500,000 portfolio
- Safe annual withdrawal: $60,000
- Monthly income: $5,000

## The Three-Legged Retirement Stool

### Leg 1: Social Security
- **Average benefit**: $1,800/month (2023)
- **Maximum benefit**: $4,555/month (if you wait until 70)
- **Reality**: Covers only 30-40% of pre-retirement income

### Leg 2: Employer-Sponsored Plans
- **401(k), 403(b), 457 plans**
- **Employer matching**: Free money!
- **Contribution limits**: $22,500 (2023), $30,000 if 50+

### Leg 3: Personal Savings
- **IRAs**: Traditional and Roth
- **Taxable accounts**: Brokerage accounts
- **Other assets**: Real estate, business equity

## Retirement Timeline by Age

### Your 20s: Foundation Building
**Goals**:
- Start contributing to 401(k)
- Build emergency fund
- Learn about investing

**Target**: Save 10-15% of income

### Your 30s: Acceleration Phase
**Goals**:
- Maximize employer match
- Increase savings rate
- Consider Roth IRA

**Target**: Have 1-3x annual salary saved

### Your 40s: Peak Earning Years
**Goals**:
- Catch-up contributions if behind
- Diversify investments
- Plan for children's college

**Target**: Have 3-6x annual salary saved

### Your 50s: Final Push
**Goals**:
- Maximize catch-up contributions
- Reduce investment risk gradually
- Estimate retirement needs

**Target**: Have 6-10x annual salary saved

### Your 60s: Transition Planning
**Goals**:
- Finalize retirement date
- Plan Social Security strategy
- Consider healthcare costs

**Target**: Have 10-12x annual salary saved

## Calculating Your Retirement Number

### Step 1: Estimate Annual Expenses
**Categories to consider**:
- Housing (mortgage paid off?)
- Healthcare (increases with age)
- Food and utilities
- Transportation
- Entertainment and travel
- Insurance

### Step 2: Account for Inflation
What costs $60,000 today will cost:
- **In 20 years**: $89,000 (3% inflation)
- **In 30 years**: $121,000 (3% inflation)

### Step 3: Calculate the Gap
**Total needed**: $121,000 annually
**Social Security**: $30,000 annually
**Gap to fill**: $91,000 annually
**Savings needed**: $91,000 × 25 = $2,275,000

## The Power of Starting Early

### Sarah vs. Mike Example:

**Sarah (starts at 25)**:
- Saves $300/month for 10 years
- Total contributions: $36,000
- Stops contributing at 35
- **At 65**: $632,000

**Mike (starts at 35)**:
- Saves $300/month for 30 years
- Total contributions: $108,000
- **At 65**: $566,000

**Sarah wins** despite contributing $72,000 less!

## Common Retirement Planning Mistakes

### ❌ Starting too late
**Solution**: Start now, even with small amounts

### ❌ Underestimating healthcare costs
**Solution**: Plan for $300,000+ in healthcare expenses

### ❌ Ignoring inflation
**Solution**: Use real (inflation-adjusted) returns in calculations

### ❌ Cashing out 401(k) when changing jobs
**Solution**: Roll over to new employer or IRA

### ❌ Not maximizing employer match
**Solution**: Contribute enough to get full match (it's free money!)

## Retirement Savings Strategies

### Pay Yourself First
Treat retirement savings like a bill that must be paid.

### Automate Everything
Set up automatic contributions to remove temptation to skip.

### Increase Contributions Annually
Boost savings rate by 1% each year or with every raise.

### Take Advantage of Catch-Up Contributions
If 50+, contribute extra $7,500 to 401(k) and $1,000 to IRA.

> "Someone's sitting in the shade today because someone planted a tree a long time ago." - Warren Buffett`,
        category: 'retirement',
        duration: 16,
        order: 1,
        keyTakeaways: [
          'You need about 25 times your annual expenses to retire comfortably',
          'Starting early gives you a massive advantage due to compound growth',
          'Retirement planning requires multiple income sources, not just savings'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: '401k-employer-plans',
        title: '401(k) and Employer Plans',
        description: 'Maximize your employer-sponsored retirement benefits and avoid common mistakes.',
        content: `# Mastering Your 401(k) 💼

Your employer's 401(k) plan is likely your most powerful retirement savings tool. Let's make sure you're using it effectively.

## What is a 401(k)?

### The Basics:
- **Employer-sponsored** retirement plan
- **Tax-advantaged** savings
- **Automatic payroll deduction**
- **Potential employer matching**
- **Investment options** provided by plan

### How It Works:
1. You elect to contribute a percentage of salary
2. Money is deducted before taxes (traditional) or after taxes (Roth)
3. Funds are invested in plan options
4. Money grows tax-deferred until retirement

## 2023 Contribution Limits

### Regular Contributions:
- **Under 50**: $22,500 annually
- **50 and older**: $30,000 annually (includes $7,500 catch-up)

### Total Contributions (including employer match):
- **Under 50**: $66,000 annually
- **50 and older**: $73,500 annually

## Employer Matching: Free Money!

### Common Matching Formulas:

#### 50% Match up to 6%
- You contribute 6% of salary
- Employer adds 3% of salary
- **Total**: 9% of salary going to retirement

#### Dollar-for-Dollar up to 3%
- You contribute 3% of salary
- Employer matches 3% of salary
- **Total**: 6% of salary going to retirement

### Example: $60,000 Salary
**50% match up to 6%**:
- Your contribution: $3,600 (6%)
- Employer match: $1,800 (3%)
- **Free money**: $1,800 annually!

## Traditional vs. Roth 401(k)

### Traditional 401(k):
**Tax treatment**: Deduct now, pay taxes in retirement
**Best for**: Higher earners, expect lower tax rate in retirement
**Benefit**: Immediate tax savings

### Roth 401(k):
**Tax treatment**: Pay taxes now, withdraw tax-free in retirement
**Best for**: Younger workers, expect higher tax rate in retirement
**Benefit**: Tax-free growth and withdrawals

### Example Comparison:
**Scenario**: 25-year-old earning $50,000, 22% tax bracket

**Traditional 401(k)**:
- Contribute $5,000 (pre-tax)
- Tax savings: $1,100 now
- At retirement: Pay taxes on withdrawals

**Roth 401(k)**:
- Contribute $5,000 (after-tax)
- No immediate tax benefit
- At retirement: All withdrawals tax-free

## Choosing Your Investments

### Common 401(k) Investment Options:

#### Target-Date Funds
**What they are**: Automatically adjust allocation based on retirement date
**Example**: Target Date 2060 Fund
**Pros**: Simple, automatic rebalancing
**Cons**: May be too conservative or aggressive for your needs

#### Index Funds
**What they are**: Track market indexes like S&P 500
**Examples**: Large-cap index, international index, bond index
**Pros**: Low fees, broad diversification
**Cons**: Require more decision-making

#### Actively Managed Funds
**What they are**: Professional managers try to beat the market
**Pros**: Potential for outperformance
**Cons**: Higher fees, often underperform index funds

### Simple 401(k) Portfolio Examples:

#### Age 25-35 (Aggressive):
- 70% US Stock Index
- 20% International Stock Index
- 10% Bond Index

#### Age 35-50 (Moderate):
- 60% US Stock Index
- 20% International Stock Index
- 20% Bond Index

#### Age 50-65 (Conservative):
- 50% US Stock Index
- 15% International Stock Index
- 35% Bond Index

## 401(k) Strategies by Life Stage

### Starting Your Career:
1. **Contribute enough** to get full employer match
2. **Choose aggressive allocation** (80-90% stocks)
3. **Increase contributions** with every raise

### Mid-Career:
1. **Maximize contributions** if possible
2. **Rebalance annually**
3. **Consider Roth contributions** if income allows

### Pre-Retirement:
1. **Use catch-up contributions** if 50+
2. **Gradually reduce risk**
3. **Plan withdrawal strategy**

## Common 401(k) Mistakes

### ❌ Not Contributing Enough for Full Match
**Cost**: Leaving free money on the table
**Solution**: Contribute at least enough to get full employer match

### ❌ Cashing Out When Changing Jobs
**Cost**: Taxes, penalties, lost growth
**Solution**: Roll over to new employer's plan or IRA

### ❌ Never Reviewing Investment Options
**Cost**: High fees, poor performance
**Solution**: Review annually, choose low-cost index funds

### ❌ Borrowing from 401(k)
**Cost**: Lost growth, potential taxes/penalties
**Solution**: Use emergency fund or other options first

### ❌ Being Too Conservative
**Cost**: Inflation risk, insufficient growth
**Solution**: Age-appropriate risk level

## 401(k) Loan Considerations

### When It Might Make Sense:
- Avoid foreclosure on primary residence
- Pay for college tuition
- No other borrowing options

### The Risks:
- **Double taxation** on Roth contributions
- **Lost investment growth**
- **Immediate repayment** if you leave job
- **Penalties** if you can't repay

### Loan Terms:
- **Maximum**: 50% of vested balance or $50,000
- **Repayment**: Usually 5 years
- **Interest**: Usually prime rate + 1-2%

## Maximizing Your 401(k)

### Step 1: Get the Full Match
Always contribute enough to receive the full employer match.

### Step 2: Choose Low-Cost Investments
Look for expense ratios under 0.5%, preferably under 0.2%.

### Step 3: Automate Increases
Set up automatic contribution increases annually.

### Step 4: Rebalance Regularly
Review and rebalance your portfolio at least annually.

### Step 5: Don't Touch It
Resist the temptation to borrow or cash out early.

> "The 401(k) is the closest thing to a money tree that most people will ever see." - Anonymous`,
        category: 'retirement',
        duration: 17,
        order: 2,
        keyTakeaways: [
          'Always contribute enough to get the full employer match',
          'Choose low-cost index funds over expensive actively managed funds',
          'Never cash out your 401(k) when changing jobs—roll it over instead'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'ira-strategies',
        title: 'IRA Strategies: Traditional vs Roth',
        description: 'Master Individual Retirement Accounts and choose the right strategy for your situation.',
        content: `# IRA Mastery: Traditional vs Roth 🎯

Individual Retirement Accounts (IRAs) are powerful tools for retirement savings, offering more flexibility than employer plans.

## IRA Basics

### What is an IRA?
- **Individual** retirement account you open yourself
- **Tax-advantaged** savings for retirement
- **More investment options** than most 401(k)s
- **Annual contribution limits**
- **Available to anyone** with earned income

### 2023 Contribution Limits:
- **Under 50**: $6,500 annually
- **50 and older**: $7,500 annually (includes $1,000 catch-up)

## Traditional IRA Deep Dive

### How It Works:
1. **Contribute** pre-tax dollars (if eligible for deduction)
2. **Investments grow** tax-deferred
3. **Pay taxes** on withdrawals in retirement

### Tax Deduction Rules:
**If you have a workplace plan**:
- **Single, income under $73,000**: Full deduction
- **Single, income $73,000-$83,000**: Partial deduction
- **Single, income over $83,000**: No deduction

**If married filing jointly**:
- **Income under $116,000**: Full deduction
- **Income $116,000-$136,000**: Partial deduction
- **Income over $136,000**: No deduction

### Required Minimum Distributions (RMDs):
- **Start at age 73**
- **Must withdraw** minimum amount annually
- **Penalty**: 50% of required amount if you don't take it

### Traditional IRA Benefits:
- **Immediate tax deduction** (if eligible)
- **Tax-deferred growth**
- **Lower current tax bill**

### Traditional IRA Drawbacks:
- **Taxed in retirement**
- **Required distributions** at 73
- **Income limits** for deductions

## Roth IRA Deep Dive

### How It Works:
1. **Contribute** after-tax dollars
2. **Investments grow** tax-free
3. **Withdraw tax-free** in retirement

### Income Limits (2023):
**Single filers**:
- **Income under $138,000**: Full contribution
- **Income $138,000-$153,000**: Partial contribution
- **Income over $153,000**: No direct contribution

**Married filing jointly**:
- **Income under $218,000**: Full contribution
- **Income $218,000-$228,000**: Partial contribution
- **Income over $228,000**: No direct contribution

### Roth IRA Benefits:
- **Tax-free withdrawals** in retirement
- **No required distributions** during your lifetime
- **Contributions** can be withdrawn anytime penalty-free
- **Estate planning** advantages

### Roth IRA Drawbacks:
- **No immediate tax deduction**
- **Income limits** restrict high earners
- **Higher current tax bill**

## Traditional vs Roth: Decision Framework

### Choose Traditional IRA If:
- **High current tax bracket** (24%+)
- **Expect lower tax bracket** in retirement
- **Need immediate tax deduction**
- **Maxing out other retirement accounts**

### Choose Roth IRA If:
- **Low current tax bracket** (12% or 22%)
- **Young** with long time horizon
- **Expect higher tax bracket** in retirement
- **Want tax diversification**
- **Estate planning** is important

## Real-World Examples

### Example 1: Young Professional
**Sarah, age 25, $45,000 income, 12% tax bracket**

**Roth IRA Choice**:
- Contribute $6,500 after-tax
- Current tax cost: $780
- At 65: $1,300,000 (tax-free!)

**Why Roth**: Low current tax rate, long growth period

### Example 2: High Earner
**Mike, age 45, $120,000 income, 24% tax bracket**

**Traditional IRA Choice**:
- Contribute $7,500 (with catch-up)
- Tax savings: $1,800 now
- At 65: $300,000 (taxable)

**Why Traditional**: High current tax rate, immediate deduction

## Advanced IRA Strategies

### Backdoor Roth IRA
**For high earners** who exceed Roth income limits:

1. **Contribute** $6,500 to non-deductible Traditional IRA
2. **Convert** to Roth IRA immediately
3. **Pay taxes** on any growth (minimal if done quickly)
4. **Result**: Roth IRA contribution despite income limits

### Mega Backdoor Roth
**For high earners** with 401(k) after-tax contributions:

1. **Contribute** after-tax dollars to 401(k) (beyond $22,500 limit)
2. **Convert** to Roth 401(k) or roll to Roth IRA
3. **Potential**: Up to $66,000 total annual contributions

### Roth Conversion Ladder
**Strategy** for early retirees:

1. **Convert** Traditional IRA to Roth annually
2. **Pay taxes** on conversion amount
3. **Wait 5 years** for penalty-free access
4. **Access** converted funds before 59½

## IRA Investment Strategies

### Asset Location Strategy:
**Tax-inefficient investments** in Traditional IRA:
- REITs (high dividends)
- Bonds (interest taxed as ordinary income)
- Actively managed funds (high turnover)

**Tax-efficient investments** in Roth IRA:
- Growth stocks (capital appreciation)
- Small-cap funds (higher growth potential)
- International funds (foreign tax credits)

### Simple IRA Portfolios:

#### Age 25-35:
- **80%** Total Stock Market Index
- **20%** International Stock Index

#### Age 35-50:
- **70%** Total Stock Market Index
- **20%** International Stock Index
- **10%** Bond Index

#### Age 50-65:
- **60%** Total Stock Market Index
- **15%** International Stock Index
- **25%** Bond Index

## IRA Withdrawal Rules

### Traditional IRA:
- **Before 59½**: 10% penalty + income tax (exceptions apply)
- **After 59½**: Income tax only
- **After 73**: Required minimum distributions

### Roth IRA:
- **Contributions**: Withdraw anytime, no penalty
- **Earnings before 59½**: 10% penalty + income tax
- **Earnings after 59½**: Tax-free if account is 5+ years old

### Early Withdrawal Exceptions:
- **First-time home purchase** ($10,000 lifetime limit)
- **Higher education expenses**
- **Medical expenses** (over 7.5% of AGI)
- **Health insurance premiums** (if unemployed)

## IRA vs 401(k) Priority

### The Optimal Order:
1. **401(k) to employer match** (free money)
2. **Max out IRA** ($6,500-$7,500)
3. **Max out 401(k)** ($22,500-$30,000)
4. **Taxable accounts**

### Why This Order:
- **Get free money** first (employer match)
- **Better investment options** in IRA
- **More control** over IRA investments
- **Tax diversification** between accounts

> "The Roth IRA is the holy grail of retirement accounts." - Suze Orman`,
        category: 'retirement',
        duration: 16,
        order: 3,
        keyTakeaways: [
          'Choose Roth IRA if young or in low tax bracket, Traditional if high earner',
          'High earners can use backdoor Roth strategy to access Roth benefits',
          'IRAs offer more investment flexibility than most employer plans'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'social-security-optimization',
        title: 'Social Security Optimization',
        description: 'Maximize your Social Security benefits with smart claiming strategies.',
        content: `# Social Security Mastery 🏛️

Social Security is a crucial part of retirement income for most Americans. Understanding how to optimize your benefits can add hundreds of thousands to your lifetime income.

## Social Security Basics

### How It Works:
- **Payroll taxes** fund the system (6.2% employee + 6.2% employer)
- **Credits earned** through work (40 credits needed for benefits)
- **Benefits based** on highest 35 years of earnings
- **Inflation adjustments** protect purchasing power

### Your Social Security Statement:
- **Access online** at ssa.gov
- **Shows earnings history** and benefit estimates
- **Review annually** for accuracy
- **Correct errors** immediately

## Benefit Calculation

### Step 1: Average Indexed Monthly Earnings (AIME)
- **Take highest 35 years** of inflation-adjusted earnings
- **Divide by 420** (35 years × 12 months)

### Step 2: Primary Insurance Amount (PIA)
**2023 Formula**:
- **90%** of first $1,115 of AIME
- **32%** of AIME between $1,115 and $6,721
- **15%** of AIME over $6,721

### Example Calculation:
**AIME**: $5,000/month
- 90% × $1,115 = $1,004
- 32% × $3,885 = $1,243
- **PIA**: $2,247/month at full retirement age

## Full Retirement Age (FRA)

### By Birth Year:
- **1943-1954**: Age 66
- **1955**: Age 66 and 2 months
- **1956**: Age 66 and 4 months
- **1957**: Age 66 and 6 months
- **1958**: Age 66 and 8 months
- **1959**: Age 66 and 10 months
- **1960 and later**: Age 67

## Claiming Strategies

### Early Claiming (Age 62):
**Reduction**: Up to 30% less than full benefit
**Pros**: 
- Get money sooner
- Hedge against system changes
- Useful if in poor health

**Cons**:
- Permanently reduced benefits
- Earnings test applies
- Lower spousal benefits

### Full Retirement Age:
**Benefit**: 100% of calculated benefit
**Pros**:
- Full benefit amount
- No earnings test
- Flexibility to work

### Delayed Retirement (Age 67-70):
**Increase**: 8% per year of delay
**Maximum**: 132% of full benefit at age 70
**Pros**:
- Highest possible benefit
- Inflation-adjusted increases
- Higher survivor benefits

## Claiming Strategy Examples

### Example 1: Healthy High Earner
**John's situation**:
- FRA benefit: $3,000/month
- Good health, family longevity
- Other retirement income available

**Strategy**: Wait until age 70
- **Age 70 benefit**: $3,960/month
- **Lifetime value**: $316,800 more than claiming at 62

### Example 2: Poor Health
**Mary's situation**:
- FRA benefit: $2,000/month
- Health issues, limited life expectancy
- Needs income now

**Strategy**: Claim at age 62
- **Age 62 benefit**: $1,500/month
- **Rationale**: Get benefits while able to enjoy them

## Spousal Benefits

### How They Work:
- **Up to 50%** of spouse's full benefit
- **Must be married** at least 1 year
- **Spouse must have filed** for benefits
- **Reduced if claimed** before FRA

### Claiming Strategies for Couples:

#### File and Suspend (No Longer Available)
This strategy was eliminated in 2016.

#### Restricted Application
**For those born before 1954**:
- File for spousal benefits only at FRA
- Let own benefit grow until age 70
- Switch to own benefit at 70

#### Claim Now, Claim More Later
**Common strategy**:
- Lower earner claims early
- Higher earner delays until 70
- Maximizes household income

## Survivor Benefits

### How They Work:
- **Surviving spouse** gets higher of the two benefits
- **Can claim as early** as age 60 (50 if disabled)
- **Reduced benefits** if claimed before FRA
- **Remarriage rules** apply

### Optimization Strategy:
**Higher earner should delay** claiming to maximize survivor benefit:
- If higher earner dies first, survivor gets their benefit
- Delaying increases both current and survivor benefits

## Divorce and Social Security

### Ex-Spousal Benefits:
**Requirements**:
- **Married at least 10 years**
- **Currently unmarried**
- **Ex-spouse eligible** for benefits

**Benefits**:
- **Up to 50%** of ex-spouse's full benefit
- **Doesn't reduce** ex-spouse's benefit
- **Can claim even if** ex-spouse hasn't filed

## Working in Retirement

### Earnings Test (Before FRA):
**2023 limits**:
- **Under FRA**: Lose $1 for every $2 earned over $21,240
- **Year of FRA**: Lose $1 for every $3 earned over $56,520
- **After FRA**: No earnings limit

### Benefits of Working:
- **Higher benefits** if current earnings exceed past years
- **Delayed retirement credits** if past FRA
- **Continued employer benefits**

## Tax Implications

### How Benefits Are Taxed:
**Single filers**:
- **Income under $25,000**: No tax on benefits
- **Income $25,000-$34,000**: Up to 50% taxable
- **Income over $34,000**: Up to 85% taxable

**Married filing jointly**:
- **Income under $32,000**: No tax on benefits
- **Income $32,000-$44,000**: Up to 50% taxable
- **Income over $44,000**: Up to 85% taxable

### Tax Planning Strategies:
- **Roth conversions** in early retirement
- **Municipal bonds** for tax-free income
- **Manage withdrawal timing** from retirement accounts

## Social Security Optimization Tools

### Online Calculators:
- **SSA.gov**: Official benefit calculator
- **AARP Social Security Calculator**
- **FidSafe Social Security Optimizer**

### Professional Help:
Consider fee-only financial planner for:
- Complex family situations
- Significant assets
- Multiple claiming strategies

## Common Mistakes

### ❌ Claiming Too Early
**Cost**: Permanently reduced benefits
**Solution**: Evaluate break-even analysis

### ❌ Not Coordinating with Spouse
**Cost**: Suboptimal household benefits
**Solution**: Plan together, consider both benefits

### ❌ Ignoring Survivor Benefits
**Cost**: Lower income for surviving spouse
**Solution**: Higher earner should consider delaying

### ❌ Not Checking Earnings Record
**Cost**: Lower benefits due to errors
**Solution**: Review statement annually

## The Future of Social Security

### Current Projections:
- **Trust fund depletion**: Around 2034
- **Benefit reduction**: Approximately 20%
- **Likely solutions**: Raise cap, increase FRA, higher taxes

### Planning Considerations:
- **Don't panic**: System won't disappear
- **Plan conservatively**: Assume some benefit reduction
- **Diversify income**: Don't rely solely on Social Security

> "Social Security is a promise we make to our seniors, and it's a promise we must keep." - Barack Obama`,
        category: 'retirement',
        duration: 16,
        order: 4,
        keyTakeaways: [
          'Delaying Social Security until age 70 can increase benefits by 32%',
          'Married couples should coordinate claiming strategies for maximum household benefits',
          'Check your Social Security statement annually for errors'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning Strategies',
    description: 'Learn how to legally minimize your tax burden and keep more of your hard-earned money.',
    color: '#DC2626',
    icon: 'trending-up',
    difficulty: 'Intermediate',
    rating: 4.5,
    totalDuration: 50,
    lessons: [
      {
        id: 'tax-basics',
        title: 'Understanding the Tax System',
        description: 'Master the fundamentals of how taxes work and the different types you pay.',
        content: `# Tax System Fundamentals 📊

Understanding how taxes work is crucial for effective financial planning. Let's demystify the tax system and learn how to work within it.

## Types of Taxes

### Income Tax
**Federal**: Progressive tax rates from 10% to 37%
**State**: Varies by state (0% to 13.3%)
**Local**: Some cities and counties impose income tax

### Payroll Taxes
**Social Security**: 6.2% (employee) + 6.2% (employer) = 12.4% total
**Medicare**: 1.45% (employee) + 1.45% (employer) = 2.9% total
**Additional Medicare**: 0.9% on income over $200K (single) / $250K (married)

### Capital Gains Tax
**Short-term** (held < 1 year): Taxed as ordinary income
**Long-term** (held > 1 year): 0%, 15%, or 20% depending on income

### Other Taxes
- **Property tax**: On real estate and personal property
- **Sales tax**: On purchases (varies by state)
- **Estate tax**: On large inheritances

## Progressive Tax System

### How It Works:
You don't pay your top tax rate on all income—you pay different rates on different portions.

### 2023 Tax Brackets (Single):
- **10%**: $0 - $11,000
- **12%**: $11,001 - $44,725
- **22%**: $44,726 - $95,375
- **24%**: $95,376 - $182,050
- **32%**: $182,051 - $231,250
- **35%**: $231,251 - $578,125
- **37%**: $578,126+

### Example: $60,000 Income
- **10%** on first $11,000 = $1,100
- **12%** on next $33,725 = $4,047
- **22%** on remaining $15,275 = $3,361
- **Total tax**: $8,508
- **Effective rate**: 14.2% (not 22%!)

## Marginal vs. Effective Tax Rate

### Marginal Tax Rate:
The rate you pay on your **last dollar** of income.
- **$60,000 income**: 22% marginal rate

### Effective Tax Rate:
Your **total tax** divided by **total income**.
- **$60,000 income**: 14.2% effective rate

### Why This Matters:
- **Tax planning** decisions based on marginal rate
- **Overall burden** measured by effective rate
- **Common misconception**: "I don't want a raise because it puts me in a higher bracket"

## Standard Deduction vs. Itemizing

### Standard Deduction (2023):
- **Single**: $13,850
- **Married filing jointly**: $27,700
- **Head of household**: $20,800

### Itemized Deductions:
**Common deductions**:
- State and local taxes (SALT) - capped at $10,000
- Mortgage interest
- Charitable contributions
- Medical expenses (over 7.5% of AGI)

### Decision Rule:
**Itemize** if total deductions exceed standard deduction.
**Most people** (about 87%) take the standard deduction.

## Tax-Advantaged Accounts

### Pre-Tax Contributions:
**Examples**: Traditional 401(k), Traditional IRA, HSA
**Benefit**: Reduce current year taxes
**Trade-off**: Pay taxes on withdrawals

### After-Tax Contributions:
**Examples**: Roth 401(k), Roth IRA
**Benefit**: Tax-free withdrawals in retirement
**Trade-off**: No current year tax reduction

### Tax-Free Growth:
**Examples**: HSA, 529 plans, Roth accounts
**Benefit**: No taxes on investment gains
**Requirement**: Use for qualified purposes

## Understanding Your Tax Return

### Key Forms:
**1040**: Main tax return form
**W-2**: Wage and salary information
**1099**: Various income types (interest, dividends, freelance)
**Schedule A**: Itemized deductions
**Schedule D**: Capital gains and losses

### Important Lines on Form 1040:
- **Line 11**: Adjusted Gross Income (AGI)
- **Line 12**: Standard/itemized deduction
- **Line 15**: Taxable income
- **Line 16**: Tax owed
- **Line 25a**: Federal tax withheld

## Tax Planning vs. Tax Preparation

### Tax Preparation:
- **Backward-looking**: Reports what happened
- **Annual activity**: Done once per year
- **Compliance-focused**: Following the rules

### Tax Planning:
- **Forward-looking**: Strategies for future
- **Ongoing process**: Throughout the year
- **Optimization-focused**: Minimizing tax burden

## Common Tax Myths

### Myth: "I don't want a raise—it'll put me in a higher tax bracket"
**Reality**: Only the additional income is taxed at the higher rate.

### Myth: "Rich people don't pay taxes"
**Reality**: Top 10% of earners pay about 70% of all income taxes.

### Myth: "Getting a big refund is good"
**Reality**: It means you gave the government an interest-free loan.

### Myth: "Cash transactions aren't taxable"
**Reality**: All income is taxable regardless of payment method.

## Basic Tax Strategies

### Timing Income:
- **Defer income** to next year if expecting lower tax rate
- **Accelerate income** if expecting higher tax rate next year

### Timing Deductions:
- **Accelerate deductions** into current year if beneficial
- **Bunch deductions** in alternating years to exceed standard deduction

### Tax-Loss Harvesting:
- **Sell losing investments** to offset gains
- **Reduce taxable income** by up to $3,000 annually
- **Carry forward** excess losses to future years

### Asset Location:
- **Tax-inefficient investments** in tax-advantaged accounts
- **Tax-efficient investments** in taxable accounts

## Record Keeping

### What to Keep:
- **Tax returns**: At least 3 years (7 if significant underreporting)
- **Supporting documents**: Receipts, statements, forms
- **Investment records**: Purchase dates, costs, dividends
- **Business expenses**: If self-employed

### Organization Tips:
- **Digital copies**: Scan important documents
- **Separate folders**: By tax year and category
- **Cloud storage**: Secure backup of files
- **Expense tracking apps**: For ongoing expenses

> "The hardest thing to understand in the world is the income tax." - Albert Einstein`,
        category: 'tax-planning',
        duration: 15,
        order: 1,
        keyTakeaways: [
          'The US uses a progressive tax system—higher rates only apply to income above each bracket',
          'Your marginal tax rate determines planning decisions, effective rate shows overall burden',
          'Most people benefit from the standard deduction rather than itemizing'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386398/pexels-photo-4386398.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'tax-deductions-credits',
        title: 'Maximizing Deductions and Credits',
        description: 'Learn the difference between deductions and credits, and how to maximize both.',
        content: `# Deductions vs. Credits: Maximize Your Tax Savings 💰

Understanding the difference between tax deductions and credits is crucial for minimizing your tax bill. Let's explore both and how to maximize them.

## Deductions vs. Credits

### Tax Deductions:
**What they do**: Reduce your taxable income
**Value**: Depends on your tax bracket
**Example**: $1,000 deduction saves $220 if you're in the 22% bracket

### Tax Credits:
**What they do**: Reduce your tax owed dollar-for-dollar
**Value**: Full face value regardless of tax bracket
**Example**: $1,000 credit saves $1,000 in taxes

### Which is Better?
**Credits are always more valuable** than deductions of the same amount.

## Common Tax Deductions

### Above-the-Line Deductions (Reduce AGI):

#### Retirement Contributions:
- **Traditional IRA**: Up to $6,500 ($7,500 if 50+)
- **SEP-IRA**: Up to 25% of income or $66,000
- **Solo 401(k)**: Up to $66,000 ($73,500 if 50+)

#### Health Savings Account (HSA):
- **2023 limits**: $3,850 (individual), $7,750 (family)
- **Triple tax advantage**: Deductible, grows tax-free, tax-free withdrawals for medical

#### Student Loan Interest:
- **Up to $2,500** annually
- **Income limits**: Phases out at higher incomes
- **Applies to**: Interest only, not principal

#### Educator Expenses:
- **Up to $300** for classroom supplies
- **Available to**: K-12 teachers, counselors, principals

### Itemized Deductions:

#### State and Local Taxes (SALT):
- **Limit**: $10,000 total
- **Includes**: State income tax, property tax, sales tax
- **Strategy**: Prepay property taxes in high-income years

#### Mortgage Interest:
- **Primary residence**: Up to $750,000 in mortgage debt
- **Second home**: Combined limit with primary
- **Home equity**: Only if used to improve the home

#### Charitable Contributions:
- **Cash donations**: Up to 60% of AGI
- **Appreciated assets**: Up to 30% of AGI
- **Bunching strategy**: Combine multiple years of giving

#### Medical Expenses:
- **Threshold**: Must exceed 7.5% of AGI
- **Includes**: Insurance premiums, prescriptions, medical travel
- **Strategy**: Time elective procedures

## Major Tax Credits

### Refundable Credits (Can Create Refund):

#### Earned Income Tax Credit (EITC):
- **For**: Low to moderate-income workers
- **Maximum**: $7,430 (2023, with 3+ children)
- **Phases out**: As income increases

#### Child Tax Credit:
- **Amount**: $2,000 per qualifying child under 17
- **Refundable portion**: Up to $1,600
- **Income limits**: Phases out at higher incomes

#### American Opportunity Tax Credit:
- **Amount**: Up to $2,500 per student
- **For**: First 4 years of college
- **Refundable**: Up to $1,000

### Non-Refundable Credits (Reduce Tax to Zero):

#### Child and Dependent Care Credit:
- **Amount**: 20-35% of expenses
- **Maximum expenses**: $3,000 (1 child), $6,000 (2+ children)
- **For**: Working parents with childcare expenses

#### Lifetime Learning Credit:
- **Amount**: 20% of expenses, up to $2,000
- **For**: Any post-secondary education
- **No limit**: On number of years claimed

#### Retirement Savings Contributions Credit (Saver's Credit):
- **Amount**: 10%, 20%, or 50% of contributions
- **Maximum**: $1,000 ($2,000 if married)
- **For**: Low to moderate-income savers

## Advanced Deduction Strategies

### Bunching Deductions:
**Strategy**: Combine multiple years of deductions into one year

**Example**:
- **Year 1**: Make 2 years of charitable donations ($8,000)
- **Year 1**: Prepay property taxes ($6,000)
- **Year 1**: Total itemized deductions ($20,000) vs. standard ($13,850)
- **Year 2**: Take standard deduction ($13,850)

### Donor-Advised Funds:
**How it works**:
1. **Contribute** to donor-advised fund (immediate deduction)
2. **Invest** the money for growth
3. **Grant** to charities over time

**Benefits**:
- **Immediate deduction** for full contribution
- **Investment growth** for larger charitable impact
- **Flexibility** in timing grants

### Qualified Charitable Distribution (QCD):
**For**: Age 70½ and older with Traditional IRA
**How it works**:
1. **Direct transfer** from IRA to charity
2. **Counts toward** required minimum distribution
3. **Not included** in taxable income

**Benefits**:
- **Avoid taxes** on IRA distribution
- **Satisfy RMD** requirement
- **No itemizing** required

## Business Deductions (Self-Employed)

### Home Office Deduction:
**Requirements**:
- **Exclusive use** for business
- **Regular use** for business
- **Principal place** of business

**Methods**:
- **Simplified**: $5 per square foot (up to 300 sq ft)
- **Actual**: Percentage of home expenses

### Business Expenses:
- **Equipment**: Computers, software, furniture
- **Supplies**: Office supplies, materials
- **Travel**: Business-related travel expenses
- **Meals**: 50% deductible (100% in 2021-2022)
- **Professional development**: Courses, conferences

### Vehicle Expenses:
**Standard mileage**: $0.655 per mile (2023)
**Actual expenses**: Gas, maintenance, depreciation
**Record keeping**: Mileage log required

## Tax Credit Strategies

### Education Credits Optimization:
**American Opportunity** vs. **Lifetime Learning**:
- **Use AOTC** for first 4 years (higher credit, partially refundable)
- **Use LLC** for graduate school or continuing education

### Timing Education Expenses:
- **Pay in December** for spring semester (current year deduction)
- **Pay in January** for spring semester (next year deduction)

### Child Tax Credit Planning:
- **Income management**: Stay below phase-out thresholds
- **Timing**: Consider Roth conversions in low-income years

## Record Keeping for Deductions

### Essential Documentation:
- **Receipts**: For all deductible expenses
- **Bank statements**: Showing payments
- **Cancelled checks**: For charitable contributions
- **Mileage logs**: For vehicle deductions
- **Home office records**: Square footage, expenses

### Digital Organization:
- **Scan receipts**: Use apps like Evernote or Shoeboxed
- **Cloud storage**: Secure backup of documents
- **Expense tracking**: Apps like Mint or QuickBooks
- **Photo documentation**: Take pictures of receipts immediately

## Common Mistakes

### ❌ Missing Deadlines:
**Solution**: Mark tax deadlines on calendar, file extensions if needed

### ❌ Poor Record Keeping:
**Solution**: Organize documents throughout the year

### ❌ Overlooking Credits:
**Solution**: Review all available credits annually

### ❌ Not Planning Ahead:
**Solution**: Make tax-smart decisions throughout the year

> "The difference between tax avoidance and tax evasion is the thickness of a prison wall." - Denis Healey`,
        category: 'tax-planning',
        duration: 13,
        order: 2,
        keyTakeaways: [
          'Tax credits are more valuable than deductions—they reduce taxes dollar-for-dollar',
          'Bunching deductions can help you exceed the standard deduction threshold',
          'Keep detailed records throughout the year to maximize deductions'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386454/pexels-photo-4386454.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'tax-efficient-investing',
        title: 'Tax-Efficient Investing',
        description: 'Learn how to minimize taxes on your investments and maximize after-tax returns.',
        content: `# Tax-Efficient Investing Strategies 📈

Taxes can significantly impact your investment returns. Learning to invest tax-efficiently can add thousands to your wealth over time.

## The Tax Impact on Investments

### Example: The Tax Drag
**Scenario**: $10,000 invested for 30 years at 7% annual return

**Tax-deferred account**: $76,123
**Taxable account** (25% tax rate): $57,435
**Tax cost**: $18,688 (24% of total return!)

## Types of Investment Taxes

### Ordinary Income Tax:
**Applied to**:
- Interest from bonds, CDs, savings accounts
- Dividends from REITs
- Short-term capital gains (held < 1 year)

**Rates**: Same as your income tax bracket (up to 37%)

### Capital Gains Tax:
**Short-term** (held < 1 year):
- Taxed as ordinary income
- Rates up to 37%

**Long-term** (held > 1 year):
- **0%**: Income up to $44,625 (single) / $89,250 (married)
- **15%**: Income up to $492,300 (single) / $553,850 (married)
- **20%**: Income above those thresholds

### Qualified Dividend Tax:
**Most dividends** from US and qualified foreign companies:
- Taxed at capital gains rates (0%, 15%, or 20%)
- Much better than ordinary income rates

## Asset Location Strategy

### Tax-Inefficient Investments → Tax-Advantaged Accounts:

#### Bonds and Bond Funds:
- **Interest taxed** as ordinary income
- **Better in**: 401(k), Traditional IRA, Roth IRA

#### REITs:
- **Dividends taxed** as ordinary income
- **Better in**: Tax-advantaged accounts

#### Actively Managed Funds:
- **High turnover** creates taxable events
- **Better in**: Tax-advantaged accounts

### Tax-Efficient Investments → Taxable Accounts:

#### Index Funds:
- **Low turnover** = fewer taxable events
- **Tax-efficient** by design

#### Individual Stocks (Buy and Hold):
- **No taxes** until you sell
- **Qualified dividends** taxed at lower rates

#### Tax-Managed Funds:
- **Specifically designed** to minimize taxes
- **Use tax-loss harvesting** strategies

## Tax-Loss Harvesting

### How It Works:
1. **Sell losing investments** to realize losses
2. **Use losses** to offset gains
3. **Reduce taxable income** by up to $3,000 annually
4. **Carry forward** excess losses to future years

### Example:
**Gains**: $5,000 from selling Apple stock
**Losses**: $3,000 from selling Tesla stock
**Net gain**: $2,000 (only pay tax on $2,000)

### Wash Sale Rule:
**Cannot buy** the same or "substantially identical" security within 30 days before or after the sale.

**Workaround**: Buy similar but not identical investments:
- Sell S&P 500 fund, buy Total Stock Market fund
- Sell individual stock, buy sector ETF

### Tax-Loss Harvesting Strategies:

#### Direct Indexing:
- **Own individual stocks** instead of funds
- **More opportunities** for tax-loss harvesting
- **Minimum investment**: Usually $250,000+

#### ETF Swapping:
- **Sell losing ETF**, buy similar one
- **Example**: VTI → ITOT (both track total stock market)
- **Wait 31 days**, then swap back if desired

## Roth Conversion Strategies

### What is a Roth Conversion?
**Move money** from Traditional IRA/401(k) to Roth IRA:
- **Pay taxes now** on converted amount
- **Future growth** is tax-free
- **No required distributions**

### When to Consider Conversions:

#### Low-Income Years:
- **Between jobs**
- **Early retirement**
- **Business loss year**

#### Market Downturns:
- **Convert when values are low**
- **Recovery happens** in Roth account tax-free

#### Before RMDs Begin:
- **Convert before age 73**
- **Reduce future RMD amounts**

### Conversion Strategies:

#### Roth Conversion Ladder:
- **Convert systematically** over multiple years
- **Stay in lower tax brackets**
- **Spread tax burden** over time

#### Fill Up Tax Brackets:
- **Convert enough** to reach top of current bracket
- **Don't push** into next bracket
- **Maximize efficiency** of current rate

## Tax-Efficient Fund Selection

### What to Look For:

#### Low Turnover Ratio:
- **Under 20%** is excellent
- **Under 50%** is acceptable
- **Over 100%** creates tax drag

#### Tax-Adjusted Returns:
- **Compare after-tax returns**, not just pre-tax
- **Morningstar** provides tax-adjusted return data

#### Fund Structure:
- **ETFs** generally more tax-efficient than mutual funds
- **Index funds** more efficient than active funds

### Tax-Efficient Fund Examples:

#### Broad Market Index Funds:
- **VTI**: Vanguard Total Stock Market
- **ITOT**: iShares Core S&P Total US Stock Market
- **SWTSX**: Schwab Total Stock Market

#### Tax-Managed Funds:
- **VTCLX**: Vanguard Tax-Managed Capital Appreciation
- **VTMSX**: Vanguard Tax-Managed Small-Cap

## Municipal Bonds

### What Are Munis?
**Bonds issued** by state and local governments:
- **Interest** is federally tax-free
- **May be** state tax-free if you live in issuing state

### When They Make Sense:
**Tax-equivalent yield** calculation:
Muni yield ÷ (1 - tax rate) = Taxable equivalent yield

**Example**:
- **Muni yield**: 3%
- **Tax rate**: 24%
- **Taxable equivalent**: 3% ÷ (1 - 0.24) = 3.95%

### Types of Municipal Bonds:

#### General Obligation Bonds:
- **Backed by** taxing power of issuer
- **Lower risk**, lower yield

#### Revenue Bonds:
- **Backed by** specific revenue source
- **Higher risk**, higher yield

#### Build America Bonds:
- **Taxable munis** with federal subsidy
- **Higher yields** than traditional munis

## Tax-Efficient Withdrawal Strategies

### Asset Location for Withdrawals:

#### Tax-Advantaged Accounts First:
- **Traditional 401(k)/IRA**: Ordinary income tax
- **Use for**: Current living expenses

#### Taxable Accounts Second:
- **Long-term gains**: Lower tax rates
- **Use for**: Bridge to retirement accounts

#### Roth Accounts Last:
- **Tax-free withdrawals**
- **Use for**: Legacy planning, late in retirement

### Tax Bracket Management:
- **Stay within** current tax bracket when possible
- **Consider** Roth conversions in low-income years
- **Time** large withdrawals carefully

## Advanced Strategies

### Charitable Remainder Trusts:
- **Donate appreciated assets**
- **Receive income** for life
- **Avoid capital gains** tax
- **Get charitable deduction**

### Qualified Small Business Stock (QSBS):
- **Up to $10 million** or 10x basis gain exclusion
- **Must hold** for 5+ years
- **Specific requirements** for qualifying businesses

### Opportunity Zones:
- **Defer capital gains** by investing in Opportunity Zone funds
- **Reduce gains** by 10-15% if held long enough
- **Eliminate gains** on Opportunity Zone investment if held 10+ years

## Technology Tools

### Tax-Loss Harvesting Services:
- **Betterment**: Automated tax-loss harvesting
- **Wealthfront**: Direct indexing for larger accounts
- **Schwab Intelligent Portfolios**: Tax optimization features

### Tax Planning Software:
- **TurboTax**: Tax planning throughout the year
- **FreeTaxUSA**: Free tax planning tools
- **TaxAct**: Tax optimization suggestions

> "It's not what you make, it's what you keep after taxes." - Anonymous`,
        category: 'tax-planning',
        duration: 14,
        order: 3,
        keyTakeaways: [
          'Asset location strategy: put tax-inefficient investments in tax-advantaged accounts',
          'Tax-loss harvesting can reduce your tax bill by offsetting gains with losses',
          'Long-term capital gains rates are much lower than ordinary income tax rates'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 'year-end-tax-planning',
        title: 'Year-End Tax Planning',
        description: 'Essential strategies to implement before December 31st to minimize your tax bill.',
        content: `# Year-End Tax Planning Checklist 📅

The weeks before December 31st offer your last chance to implement tax strategies for the current year. Here's your comprehensive action plan.

## Income and Deduction Timing

### Accelerate or Defer Income:

#### Defer Income to Next Year:
**If expecting lower tax rate next year**:
- **Delay invoicing** for freelancers/consultants
- **Defer year-end bonus** to January
- **Postpone asset sales** until January
- **Exercise stock options** in January

#### Accelerate Income to Current Year:
**If expecting higher tax rate next year**:
- **Speed up invoicing** and collections
- **Take bonus** in December
- **Realize capital gains** before year-end
- **Exercise stock options** now

### Accelerate Deductions:

#### Charitable Contributions:
- **Make donations** by December 31st
- **Use credit card** (deductible when charged, not paid)
- **Donate appreciated stock** (avoid capital gains + get deduction)
- **Bunch multiple years** of giving

#### Business Expenses:
- **Purchase equipment** before year-end
- **Pay professional fees** (legal, accounting)
- **Stock up on supplies**
- **Prepay expenses** if beneficial

#### Medical Expenses:
- **Schedule elective procedures**
- **Buy prescription glasses/contacts**
- **Pay outstanding medical bills**
- **Contribute to HSA** (deadline is tax filing date)

## Retirement Account Strategies

### Maximize Contributions:

#### 401(k) Contributions:
- **2023 limit**: $22,500 ($30,000 if 50+)
- **Must contribute** by December 31st
- **Check if** you'll hit limit with remaining paychecks

#### Traditional IRA:
- **2023 limit**: $6,500 ($7,500 if 50+)
- **Deadline**: Tax filing date (April 15, 2024)
- **Can still contribute** in January-April

#### Roth IRA:
- **Same limits** as Traditional IRA
- **Same deadline**: Tax filing date
- **Consider if** expecting higher tax rate next year

### Roth Conversions:
**Convert Traditional IRA** to Roth IRA:
- **Pay taxes** on converted amount
- **Future growth** is tax-free
- **Must complete** by December 31st

**When to consider**:
- **Low-income year**
- **Market downturn** (convert at lower values)
- **Before RMDs** begin at age 73

## Investment Tax Strategies

### Tax-Loss Harvesting:
**Sell losing investments** to offset gains:

#### Step 1: Review Your Portfolio
- **Identify positions** with unrealized losses
- **Calculate potential** tax savings
- **Consider wash sale** rules

#### Step 2: Execute Sales
- **Sell losing positions** by December 31st
- **Offset gains** dollar-for-dollar
- **Deduct up to $3,000** against ordinary income
- **Carry forward** excess losses

#### Step 3: Reinvest Proceeds
- **Buy similar** (not identical) investments
- **Maintain market exposure**
- **Avoid wash sale** violations

### Rebalancing:
**In tax-advantaged accounts**:
- **No tax consequences** for trading
- **Rebalance freely** to target allocation

**In taxable accounts**:
- **Consider tax impact** of rebalancing
- **Use new contributions** to rebalance when possible
- **Harvest losses** while rebalancing

## Business Owner Strategies

### Equipment Purchases:
**Section 179 Deduction**:
- **Deduct full cost** of qualifying equipment
- **2023 limit**: $1,160,000
- **Must be placed** in service by December 31st

**Bonus Depreciation**:
- **100% first-year** depreciation on qualifying assets
- **Phases down** in future years
- **Alternative to** Section 179

### Retirement Plan Contributions:
**SEP-IRA**:
- **Up to 25%** of compensation or $66,000
- **Deadline**: Tax filing date + extensions

**Solo 401(k)**:
- **Employee contribution**: $22,500 ($30,000 if 50+)
- **Employer contribution**: Up to 25% of compensation
- **Total limit**: $66,000 ($73,500 if 50+)

### Business Expenses:
- **Office supplies** and equipment
- **Professional development** courses
- **Business meals** (50% deductible)
- **Travel expenses**

## Estate and Gift Planning

### Annual Gift Tax Exclusion:
**2023 limit**: $17,000 per recipient
- **Give to multiple** family members
- **Use it or lose it** (doesn't carry forward)
- **Married couples** can give $34,000 per recipient

### 529 Plan Contributions:
- **State tax deduction** in many states
- **Front-load 5 years** of gifts ($85,000 per beneficiary)
- **Must contribute** by December 31st for current year deduction

## Health Savings Account (HSA)

### Maximize Contributions:
**2023 limits**:
- **Individual**: $3,850
- **Family**: $7,750
- **Catch-up** (55+): Additional $1,000

### Triple Tax Advantage:
1. **Deductible** contributions
2. **Tax-free** growth
3. **Tax-free** withdrawals for medical expenses

### Year-End Strategy:
- **Contribute maximum** by December 31st
- **Pay medical expenses** out-of-pocket if possible
- **Let HSA grow** for future medical costs

## Flexible Spending Account (FSA)

### Use It or Lose It:
- **Must use** FSA funds by December 31st
- **Some plans** allow grace period or carryover
- **Check your plan** rules

### Qualifying Expenses:
- **Prescription medications**
- **Over-the-counter** items with prescription
- **Medical equipment**
- **Dental and vision** care

## Tax Document Preparation

### Organize Records:
- **Income documents**: W-2s, 1099s, K-1s
- **Deduction receipts**: Charitable, medical, business
- **Investment records**: Brokerage statements, cost basis
- **Prior year** tax return

### Estimated Tax Payments:
**Fourth quarter** payment due January 15th:
- **Calculate** if you owe estimated taxes
- **Make payment** to avoid penalties
- **Consider** increasing withholding instead

## Year-End Checklist

### ✅ Review Tax Situation:
- **Estimate** current year tax liability
- **Compare** to prior year
- **Identify** planning opportunities

### ✅ Maximize Retirement Contributions:
- **401(k)** by December 31st
- **IRA** by April 15th
- **HSA** by December 31st

### ✅ Implement Tax-Loss Harvesting:
- **Review** portfolio for losses
- **Execute** sales by December 31st
- **Reinvest** in similar assets

### ✅ Bunch Deductions:
- **Charitable** contributions
- **Medical** expenses
- **Business** expenses

### ✅ Consider Roth Conversions:
- **Evaluate** current tax situation
- **Convert** if beneficial
- **Complete** by December 31st

### ✅ Business Owner Actions:
- **Equipment** purchases
- **Retirement plan** contributions
- **Business expense** acceleration

### ✅ Estate Planning:
- **Annual gifts** by December 31st
- **529 plan** contributions
- **Charitable** giving

## Common Year-End Mistakes

### ❌ Waiting Until December 31st:
**Solution**: Start planning in November

### ❌ Making Emotional Investment Decisions:
**Solution**: Focus on tax benefits, not market timing

### ❌ Forgetting About State Taxes:
**Solution**: Consider state tax implications

### ❌ Not Coordinating with Spouse:
**Solution**: Plan together for married couples

> "The best time to plant a tree was 20 years ago. The second best time is now. The same applies to tax planning." - Anonymous`,
        category: 'tax-planning',
        duration: 8,
        order: 4,
        keyTakeaways: [
          'Most year-end tax strategies must be completed by December 31st',
          'Tax-loss harvesting can offset gains and reduce taxable income',
          'Maximize retirement account contributions for immediate tax benefits'
        ],
        imageUrl: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  }
];