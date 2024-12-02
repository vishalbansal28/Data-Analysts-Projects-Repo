@echo off
REM Remove redundant files after they've been copied to project folders
del "Excel - LOOKUP, INDEX, MATCH, SUMIFS.xlsx"
del "Excel - Pivot Tables, Pivot Chart, Slicers.xlsx"
del "Excel - Sales Performance Dashboard.xlsx"
del "Excel - Scenario Manager, Solver (Data Modeling).xlsx"
del "Hadoop(Hive) - NYC Yellow Taxi Case Study.txt"
del "Instagram Clone SQL - Database & Inserting Data.sql"
del "Instagram Clone SQL - Exploratory Data Analysis.sql"
del "Python - Movie Industry EDA Project.ipynb"
del "SQL - Data Cleaning.sql"
del "SQL - Data Exploration.sql"

REM Remove empty directories
rmdir "project_images" 2>nul
rmdir "visuals" 2>nul
rmdir "docs" 2>nul

REM Remove the organize_projects.bat script
del "organize_projects.bat"

echo Cleanup complete!
