import React from "react"
import HomePageLayout from "../../src/views/home/layout"

export default function CompanyPage() {
  return <div>Company page</div>
}
CompanyPage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
