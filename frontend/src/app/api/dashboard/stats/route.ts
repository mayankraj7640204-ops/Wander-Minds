import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    metrics: {
      total_paid_users: "12,450",
      monthly_revenue: "$186,750",
      match_satisfaction: "94%"
    },
    line_chart: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [4200, 5800, 7100, 8900, 10500, 12450]
    },
    doughnut_chart: {
      labels: ['5 Stars (Excellent)', '4 Stars (Good)', '3 Stars (Average)', 'Below 3 Stars'],
      data: [65, 25, 7, 3]
    }
  });
}
