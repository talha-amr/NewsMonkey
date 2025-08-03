import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Newsitem from './Newsitem';
import { Typography, Skeleton, Card, CardContent, Pagination, CardActions } from '@mui/material';


export default function NewsContainer(props) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetchNews();
  }, []);
  
 useEffect(() => {
  fetchNews(page);

}, [page]);

      const fetchNews = async (pageNumber = 1) => {
        setLoading(true);
        props.settingProgress(25);

        let url = `/api/news?category=${props.category}&page=${pageNumber}`;

        let data = await fetch(url);
        let parsedData = await data.json();

        props.settingProgress(50);
        setLoading(false);
        props.settingProgress(100);

        setNews(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  
  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ marginBlock: 5, textAlign: 'center',fontFamily:'Poppins',fontWeight:600}}>
        News Monkey - {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Top Headlines
      </Typography>
      <Grid container spacing={3} justifyContent={'center'}>
        {loading
          ? Array.from({ length: props.pageSize }, (_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ 
                  width: 345, 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between' 
                }}>
                  <Skeleton
                    variant="rectangular"
                    height={120}
                    animation="wave"
                    sx={{ width: '100%' }}
                  />
                  <CardContent>
                    <Skeleton
                      height={32}
                      width="100%"
                      sx={{ mb: 1 }}
                      animation="wave"
                    />
                    <Skeleton
                      height={32}
                      width="60%"
                      sx={{ mb: 2 }}
                      animation="wave"
                    />
                    <Skeleton
                      height={20}
                      width="100%"
                      sx={{ mb: 1 }}
                      animation="wave"
                    />
                    <Skeleton
                      height={20}
                      width="100%"
                      sx={{ mb: 1 }}
                      animation="wave"
                    />
                    <Skeleton
                      height={20}
                      width="70%"
                      animation="wave"
                    />
                  </CardContent>
                  <CardActions sx={{ paddingBlockEnd: 2 }}>
                    <Skeleton
                      variant="rectangular"
                      height={30}
                      width={100}
                      sx={{ borderRadius: 1 }}
                      animation="wave"
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))
          : news.map((elem, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Newsitem
                  title={elem.title}
                  description={elem.description}
                  image={elem.urlToImage}
                  url={elem.url}
                  publishedAt={elem.publishedAt}
                  author={elem.author}
                />
              </Grid>
            ))}
      </Grid>
      {!loading && (
        <Grid container justifyContent="center">
        <Pagination
          count={Math.ceil(totalResults / props.pageSize)}
          page={page} // ←✅ This is the fix
          color="primary"
          onChange={(event, value) => setPage(value)}
          sx={{ marginBlock: 4 }}
        />
        </Grid>
      )}
    </Container>
  );
}