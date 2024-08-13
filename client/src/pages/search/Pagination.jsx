import usePagination from "@mui/material/usePagination";

// mui
import { Container, Grid, Icon } from "@mui/material";

// components
import MKPagination from "components/MKPagination";

function Pagination({ count, page, handleChange }) {
  const { items } = usePagination({
    count: count,
    page: page,
    onChange: handleChange,
  });

  return (
    <Container sx={{ height: "100%", mt: 2 }}>
      <Grid
        container
        item
        justifyContent="center"
        xs={12}
        lg={6}
        mx="auto"
        height="100%"
      >
        <MKPagination>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <MKPagination
                  key={index}
                  type="button"
                  item
                  active={selected}
                  {...item}
                >
                  {page}
                </MKPagination>
              );
            } else {
              children = (
                <MKPagination key={index} item type="button" {...item}>
                  {type === "next" ? (
                    <Icon>keyboard_arrow_right</Icon>
                  ) : (
                    <Icon>keyboard_arrow_left</Icon>
                  )}
                </MKPagination>
              );
            }

            return children;
          })}
        </MKPagination>
      </Grid>
    </Container>
  );
}

export default Pagination;
