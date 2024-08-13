import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerShopButton,
    BannerTitle,
} from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <BannerContainer >
          {/*  <BannerImage src="/images/banner/banner.png" />*/}
            <BannerContent>
                <Typography variant="h5">MedExplain is Coming Soon!</Typography>
                 {/*<Typography variant="h5">Search</Typography>  Susan*/}
                {/*<BannerTitle variant="h2">*/}
                {/*    Search Bar Here*/}
                {/*</BannerTitle>*/}

                {/*<BannerDescription variant="subtitle">*/}
                {/*    Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo*/}
                {/*    tempor incididunt ut labore et dolore magna*/}
                {/*</BannerDescription>*/}

               {/* <BannerShopButton color="primary">Search</BannerShopButton>  Susan*/}
            </BannerContent>
             </BannerContainer>
          );
}