import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slide from '../../components/Slide/Slide';
import { logo } from '../../constant/images';
import { fetchByCategoryMovie, fetchByCategorySeries, searchByTitle } from '../../redux/movies/movies.actions';


const mapState = (state) => ({
  series: state.movies.categories.series.data,
  errorSeries: state.movies.categories.series.error,
  movie: state.movies.categories.movie.data,
  errorMovie: state.movies.categories.movie.error,
  search: state.movies.search.data,
  errorSearch: state.movies.search.error
});
function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const {series,errorSeries,movie,errorMovie,search,errorSearch} = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchByCategorySeries('series'));
    dispatch(fetchByCategoryMovie('movie'));
    
  },[]);
  const handleSearch = (e) => {

    setSearchQuery(e.target.value);
    if(searchQuery.length > 2) {
      dispatch(searchByTitle(searchQuery));
      console.log(search);
    }
  }

  

  return (
    <div>
      <div className='flex justify-center  items-center lg:justify-start w-full h-[67px] sm:h-[140px] bg-[#292929] text-white'>
        <div className='sm:ml-[77px]'>
         <img className='w-[108px] sm:w-[193px]' src={logo} alt="logo " />
        </div>
      </div>
      <div className="flex sm:justify-center lg:justify-start bg-no-repeat bg-cover bg-[url('./assets/images/cinema.svg')] text-white pl-6 lg:pl-[77px] w-full h-[257px] sm:h-[550px]">
        <div className='flex w-[278px] mx-auto sm:mx-0 sm:max-w-[490px] text-center font-bold lg:text-left text-[28px]  sm:text-kbodymain pt-[100px]'>Watch something incredible.</div>
      </div>
      <div className='w-full pl-[28px] pr-[27px] sm:pl-[77px] sm:pr-[57px] mt-14 sm:mt-[63px] mb-[33px] sm:mb-12'>
        <div>Search</div>
        <input className='w-full h-[34px] sm:h-[54px] border border-[#000]' type='text' value={searchQuery} onChange={(e) => handleSearch(e)} />
      </div>
      <div className='ml-[28px] sm:ml-[67px] mb-[29px] sm:mb-[19px]'>
        {
        search.length > 0 ?
          <div>
            <div>
              <div>Series</div>
              {
                search.length > 0 ?
                <div>
                  <Slide data={search} />
                  
                </div>
                : null
              }  
            </div>
          </div>
        : 
          <div>
            <div>
              <div className='text-kbody4 sm:text-[18px]'>Series</div>
              {
                series ?
                <div >
                  <Slide data={series} />
                </div>
                :null
              }
              
            </div>
            <div>
              <div className='text-kbody4 sm:text-[18px]'>movies</div>
              {
                movie ?
                <div >
                  <Slide data={movie} />
                </div>
                :null
              }
              
            </div>
            
          </div>
        }
      </div>
    </div>
  )
}

export default Home;