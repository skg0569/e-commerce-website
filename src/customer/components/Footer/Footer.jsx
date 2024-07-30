import { Grid } from "@mui/material";
import React from "react";
import { Typography, Button } from "@mui/material";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10 "
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Typography variant="h6" className="pb-5">
            Company
          </Typography>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Jobs
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Contact
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Typography variant="h6" className="pb-5">
            Solutions
          </Typography>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Marketing
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Analytics
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Insight
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Typography variant="h6" className="pb-5">
            Documentation
          </Typography>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Guides
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Typography variant="h6" className="pb-5">
            Legal
          </Typography>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Claim
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Privacy
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" gutterBottom>
              Terms
            </Button>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            {" "}
            &copy; 2023 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            {" "}
            Made with love by Me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons made by{" "}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>
            {" "}
            from{" "}
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              {" "}
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
