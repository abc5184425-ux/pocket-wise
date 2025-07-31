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
  }
];