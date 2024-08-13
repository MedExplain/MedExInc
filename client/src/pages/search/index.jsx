import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './search.css';
// comonents
import SearchBox from "components/search-articles";
import Pagination from "./Pagination";

// mui
import {
    FeedOutlined,
    MenuBook,
    Search as SearchIcon,
    SmartDisplayOutlined,
} from "@mui/icons-material";
import {
    Box,
    CircularProgress,
    Tab,
    Tabs,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// network
import { fetchAlgoliaSearch } from "./network";

// utils
import { formatSearchData, getLink } from "./data/utils";

const RootStyle = styled(Box)(({ theme }) => ({
    paddingInline: theme.spacing(4),
    paddingBottom: "70px",
    maxWidth: "88%",
     marginInline: "auto",
    '@media (max-width: 768px)': {
        paddingInline: theme.spacing(2), // Adjust padding for mobile
        paddingBottom: theme.spacing(10), // Adjust bottom padding for mobile
        maxWidth: "98%",
    }
}));

const BackgroundStyle = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100%",
    backgroundColor: "#F7F8F7",
}));

const TabContent = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(1),
}));

const TotalLabel = styled("p")(({ theme }) => ({
    marginBlock: theme.spacing(2),
    fontSize: "1.2rem",
    fontStyle: "italic",
    lineHeight: "1.2",
    color: theme.palette.grey[500],
    textAlign: "left",
    fontColor: "#868786",
    paddingLeft:"8px",
}));

const ItemSpace = styled("hr")(({ theme }) => ({
    lineHeight: "1px",
    width: "95%",
    backgroundColor: "#E2E2E2",
    marginTop: "20px",
    marginBottom: "10px",
    border: "none",
    borderTop: "1px solid #E2E2E2",
   }));

const List = styled("ul")(({ theme }) => ({
    listStyle: "none",
    margin: "0",
    padding: "0",

    "& > a": {
        display: "block",
    },

    "& > *:not(:last-child)": {
        marginBlock: theme.spacing(2),
    },
}));

const ListItem = styled("li")(({ theme }) => ({}));

const ItemTitle = styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    fontSize: "1.5rem",
    lineHeight: 1.2,
    fontWeight: 500,
    color: "#000000",
    paddingBottom: "8px",
    '@media (max-width: 768px)': {
        fontSize: "1.1rem",
    }
}));

const ItemContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap', // This prevents the flex items from wrapping
});

const ItemDescription = styled(Typography)(({ theme }) => ({
    /*marginLeft: theme.spacing(1),*/
    marginLeft: "4px",
    fontSize: "1rem",
    lineHeight: 1.2,
    fontWeight: 400,
    color: theme.palette.grey[800],
    display: 'inline',
    whiteSpace: 'nowrap',
    wordBreak: "break-word",
    overflow: "hidden",
    textOverflow: "ellipsis",
    /*display: "-webkit-box",*/
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
}));

const ItemDate = styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    marginRight: "4px",
    fontSize: "1rem",
    lineHeight: 1.2,
    fontWeight: 400,
    color: "#9D9D9D",
    display: "inline",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    whiteSpace: "nowrap",
}));

const ItemSearchTerm = styled(Typography)(({ theme }) => ({
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontSize: ".75rem",
    lineHeight: 1.2,
    fontWeight: 500,
    color: theme.palette.grey[600],
}));

const BackButtonStyled = styled(Button)(({ theme }) => ({   
    paddingTop:'25px',
    color: '#656565',    
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    //position: absolute;
    //width: 62px;
    //height: 20px;
    //left: 104px;
    //top: 101px;

}));

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <BackButtonStyled
            startIcon={<span>&lt;</span>}
           onClick={() => navigate('/')}
        >
           Back to Home
        </BackButtonStyled>
    );
}


const tabOptions = [
    {
        title: "All search Results",
        icon: <SearchIcon />,
        value: "all",
    },
    //  {
    //    title: "Articles",
    //    icon: <FeedOutlined />,
    //    value: "Article",
    //  },
    //  {
    //    title: "Videos",
    //   icon: <SmartDisplayOutlined />,
    //    value: "Video",
    //  },
    //  {
    //    title: "Medical Literature",
    //    icon: <MenuBook />,
    //    value: "MedLit",
    //  },
];

export default function Search() {
    const { searchTerm } = useParams();

    const isLg = useMediaQuery((theme) => theme.breakpoints.up("md"));

    const [activeTab, setActiveTab] = useState("all");
    const [page, setPage] = useState(1);
    const limit = 6;

    const { data, isLoading } = useQuery({
        queryKey: ["search", activeTab, searchTerm, page, limit],
        queryFn: () => fetchAlgoliaSearch(activeTab, searchTerm, page, limit),
        enabled: !!searchTerm,
    });

    useEffect(() => {
        if (searchTerm && page > 1) {
            setPage(1);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    const totalPages = Math.ceil(data?.totalCount / limit) ?? 0;
    const searchDataList = formatSearchData(data?.searchData ?? []);
    const totalItems = data?.totalCount ?? 0;
    
    const handleTabType = (event, newValue) => {
        setActiveTab(newValue);
        setPage(1)
    }

    const filterList =
        activeTab === "all"
            ? searchDataList
            : searchDataList.filter((item) => item.categories.includes(activeTab));

    return (
        <BackgroundStyle>
        <RootStyle>
            <BackButton/>
            <SearchBox sxInput={{ width: "100%", paddingTop: "10px", textAlign: "center", }} />
                <TotalLabel>
                    Showing {totalItems} results for "{searchTerm}"
                </TotalLabel>
            <List>
                {filterList.map((item, i) => (
                    <Link key={i} to={getLink(item?.permalink || "")}>
                        <ListItem>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <ItemTitle variant="h4">{item.title}</ItemTitle>
                            </Box>
                            <ItemContainer>
                                <ItemDate variant="body">{item.publication_date}</ItemDate>|<ItemDescription variant="body">{item.content}</ItemDescription>
                            </ItemContainer>
                            <ItemSearchTerm>{searchTerm}</ItemSearchTerm>
                            <ItemSpace />
                        </ListItem>
                    </Link>
                ))}
            </List>

            {/*<TabContent>*/}
            {/*  <Tabs*/}
            {/*    value={activeTab}*/}
            {/*    onChange={handleTabType}*/}
            {/*    orientation={!isLg ? "vertical" : "horizontal"}*/}
            {/*  >*/}
            {/*    {tabOptions.map((item, i) => (*/}
            {/*      <Tab*/}
            {/*        key={i}*/}
            {/*        value={item.value}*/}
            {/*        icon={item.icon}*/}
            {/*        label={item.title}*/}
            {/*        iconPosition="start"*/}
            {/*      />*/}
            {/*    ))}*/}
            {/*  </Tabs>*/}
            {/*</TabContent>*/}

            {isLoading && searchTerm && (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 2,
                    }}
                >
                    <CircularProgress />
                </Box>
            )}

            {filterList && totalPages > 1 && (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 2,
                    }}
                >
                    <Pagination
                        count={totalPages}
                        page={page}
                        handleChange={(e, p) => setPage(p)}
                    />
                </Box>
            )}
            </RootStyle>
        </BackgroundStyle>
    );
}
