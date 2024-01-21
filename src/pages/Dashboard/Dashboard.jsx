import { Box, Container, Grid } from "@mui/material";
import OverviewBudget from "../../componenets/Dashboard/OverviewBudget";
import OverviewTotalCustomers from "../../componenets/Dashboard/OverviewTotalCustomers";
import OverviewTasksProgress from "../../componenets/Dashboard/OverviewTasksProgress";
import OverviewTotalProfit from "../../componenets/Dashboard/OverviewTotalProfit";
import OverviewSales from "../../componenets/Dashboard/OverviewSales";
// import OverviewTraffic from "../../componenets/Dashboard/OverviewTraffic";
import DashboardLayout from "../../layouts/Dashboard/Layout";
import OverviewLatestProducts from "../../componenets/Dashboard/OverviewLatestProducts";
import { useAdminStore } from "../../context/adminStore";
import { useEffect } from "react";

const Dashboard = () => {
  const dashboardOverView = useAdminStore((store) => store.dasboardOverView);
  const getDashboardOverView = useAdminStore(
    (store) => store.getDashboardOverView
  );

  useEffect(() => {
    getDashboardOverView();
  }, []);

  return (
    <>
      <DashboardLayout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 1,
          }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={1} gap={5}>
              <Grid xs={11} sm={6} lg={2.7}>
                <OverviewBudget
                  difference={10}
                  positive
                  sx={{ height: "100%" }}
                  value={dashboardOverView?.youthCount}
                />
              </Grid>
              <Grid xs={12} sm={6} lg={2.5}>
                <OverviewTotalCustomers
                  difference={16}
                  positive={false}
                  sx={{ height: "100%" }}
                  value={dashboardOverView?.organizationCount}
                />
              </Grid>
              <Grid xs={12} sm={6} lg={2.5}>
                <OverviewTasksProgress sx={{ height: "100%" }} value={7000} />
              </Grid>
              <Grid xs={12} sm={6} lg={2.5}>
                <OverviewTotalProfit sx={{ height: "100%" }} value="$15k" />
              </Grid>
              <Grid xs={12} lg={7}>
                <OverviewSales
                  chartSeries={[
                    {
                      name: "This year",
                      data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                    },
                    {
                      name: "Last year",
                      data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                    },
                  ]}
                  sx={{ height: "100%" }}
                />
              </Grid>
              {/* <Grid xs={12} md={6} lg={4}>
              <OverviewTraffic
                chartSeries={[63, 15, 22]}
                labels={["Desktop", "Tablet", "Phone"]}
                sx={{ height: "100%" }}
              />
            </Grid> */}
              <Grid xs={12} md={6} lg={4}>
                <OverviewLatestProducts
                  products={[
                    {
                      id: "5ece2c077e39da27658aa8a9",
                      image: "/src/assets/products/product-1.png",
                      name: "Healthcare Erbology",
                      updatedAt: new Date().getTime(),
                    },
                    {
                      id: "5ece2c0d16f70bff2cf86cd8",
                      image: "/src/assets/products/product-2.png",
                      name: "Makeup Lancome Rouge",
                      updatedAt: new Date().getTime(),
                    },
                    {
                      id: "b393ce1b09c1254c3a92c827",
                      image: "/src/assets/products/product-5.png",
                      name: "Skincare Soja CO",
                      updatedAt: new Date().getTime(),
                    },
                    {
                      id: "a6ede15670da63f49f752c89",
                      image: "/src/assets/products/product-6.png",
                      name: "Makeup Lipstick",
                      updatedAt: new Date().getTime(),
                    },
                    {
                      id: "bcad5524fe3a2f8f8620ceda",
                      image: "/src/assets/products/product-7.png",
                      name: "Healthcare Ritual",
                      updatedAt: new Date().getTime(),
                    },
                  ]}
                  sx={{ height: "100%" }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
