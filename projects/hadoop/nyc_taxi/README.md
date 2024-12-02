# NYC Yellow Taxi Analysis

A large-scale analysis of New York City's Yellow Taxi data using Hadoop and Hive, uncovering patterns in urban transportation.

## 📊 Project Overview
This project analyzes millions of NYC Yellow Taxi trips to understand patterns in urban mobility, pricing, and service demand. The analysis leverages big data technologies to process and analyze large-scale transportation data.

## 🛠️ Tools & Technologies
- Hadoop for distributed data storage
- Hive for data querying
- Python for data preprocessing
- Tableau for visualization

## 📈 Key Analyses
1. Trip Patterns
   - Peak hours analysis
   - Popular routes identification
   - Trip duration patterns

2. Pricing Analysis
   - Fare distribution
   - Surge pricing patterns
   - Payment method trends

3. Geographical Analysis
   - Pickup/dropoff hotspots
   - Borough-wise demand
   - Airport route analysis

## 📁 Project Structure
- `analysis.txt`: HiveQL queries and analysis scripts
- `data/`: Raw and processed taxi data
- `visualizations/`: Generated maps and charts

## 🔍 Key Findings
1. Manhattan accounts for 75% of all pickups
2. Peak demand occurs between 5-7 PM weekdays
3. Average trip duration is 15 minutes
4. Credit card payments dominate (65%)

## 📊 Visualizations
The analysis includes:
- Heat maps of pickup/dropoff locations
- Hourly demand patterns
- Fare distribution charts
- Route popularity visualizations

## 🎯 Business Applications
- Optimal taxi fleet distribution
- Dynamic pricing strategy
- Driver allocation optimization
- Service improvement recommendations

## 🔄 Data Processing
1. Data Ingestion
   - Raw data loaded into HDFS
   - Partitioned by date for efficiency

2. Data Cleaning
   - Remove invalid coordinates
   - Handle missing values
   - Standardize timestamps

3. Analysis Pipeline
   - Daily aggregations
   - Hourly patterns
   - Geographic clustering

## 📚 Data Sources
- NYC Taxi & Limousine Commission
- NYC Open Data
- Weather data for correlation analysis
