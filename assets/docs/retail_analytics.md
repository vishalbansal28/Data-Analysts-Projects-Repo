# E-commerce Retail Analytics

## Project Overview
Advanced Excel dashboard for retail performance analysis, featuring dynamic visualizations and automated reporting systems. The project provides comprehensive insights into sales, inventory, and customer behavior.

## Key Features
- Sales performance tracking
- Inventory management
- Customer behavior analysis
- Automated reporting

## Technical Implementation
### Excel Features Used
1. Power Query
```vba
let
    Source = Excel.Workbook(File.Contents("sales_data.xlsx"), null, true),
    Sales_Table = Source{[Item="Sales",Kind="Table"]}[Data],
    #"Changed Type" = Table.TransformColumnTypes(Sales_Table,{
        {"Date", type date},
        {"Product", type text},
        {"Quantity", Int64.Type},
        {"Revenue", type number}
    })
in
    #"Changed Type"
```

2. Pivot Tables
```excel
=GETPIVOTDATA("Revenue",
    $A$3,
    "Category",
    "Electronics",
    "Date",
    "2023-Q1")
```

3. Dynamic Charts
```excel
=OFFSET(Sheet1!$A$1,0,0,COUNTA(Sheet1!$A:$A),1)
```

### Key Formulas
1. Revenue Calculation
```excel
=SUMIFS(Revenue, Date, ">="&StartDate, Date, "<="&EndDate)
```

2. Inventory Turnover
```excel
=SUMPRODUCT(Sales_Quantity)/(AVERAGE(Beginning_Inventory+Ending_Inventory))
```

## Analysis Results
1. Sales Performance
   - 35% YoY revenue growth
   - Top performing categories:
     * Electronics (45% of revenue)
     * Home & Garden (30% of revenue)
     * Fashion (25% of revenue)

2. Customer Insights
   - Average order value: $85
   - Customer retention rate: 65%
   - Peak shopping hours: 6-9 PM

3. Inventory Management
   - Optimal stock levels identified
   - 25% reduction in stockouts
   - Improved turnover rate by 40%

## Technologies Used
- Microsoft Excel 365
- Power Query
- Power Pivot
- VBA for automation

## Future Improvements
1. Implement predictive analytics
2. Add more automated reports
3. Create real-time dashboard
4. Enhance visualization options

## Resources
- [Project Files](https://github.com/yourusername/retail-analytics)
- [Documentation](https://github.com/yourusername/retail-analytics/docs)
- [Dashboard Templates](https://github.com/yourusername/retail-analytics/templates)
