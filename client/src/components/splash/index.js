import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
    SplashContainer,
    SplashContent,
//    BannerDescription,
//    BannerImage,
//    BannerShopButton,
//    BannerTitle,
} from "../../styles/splash";

export default function Splash() {
    const theme = useTheme();
    /*const matches = useMediaQuery(theme.breakpoints.down("md"));*/

    return (
        <SplashContainer >
            {/*  <BannerImage src="/images/banner/banner.png" />*/}
            <SplashContent>
                <Typography variant="h7">Many people have questions about their health that are very different than what their doctors tend to talk about.
                    Oftentimes doctors end up talking past patients, contributing to a lack of understanding which leads to poor health outcomes. <br />&#160;<br />
                    MedExplain will be a publicly available resource designed to provide engaging, easily understood, and well-researched medical information.
                    It is designed to meet the needs to patients and their loves ones who want the plain facts about drugs, health, and disease.
                    Many studies show that people prefer to get their health-related information from their doctor. All the content that
                    you will find on MedExplain is created by medical professionals, and all content is independently reviewed for accuracy.
                </Typography>
            

                {/*<BannerDescription variant="subtitle">*/}
                {/*    Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo*/}
                {/*    tempor incididunt ut labore et dolore magna*/}
                {/*</BannerDescription>*/}

                {/* <BannerShopButton color="primary">Search</BannerShopButton>  Susan*/}
            </SplashContent>
        </SplashContainer>
    );
}
