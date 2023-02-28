import React, { useState } from 'react'
import styles from './style.module.scss'
import { Svg, Sort, Item, Filter } from '../../Components';
import variables from '../../main.scss'
import { Slider } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          color: '#508F00',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            // boxShadow: '0 0 0 8px rgba(80, 143, 0, 0.16)'
            boxShadow: 'inherit',
          },
          '&:hover': {
            color: '#488100'
          }
        },
        track: {
          color: '#508F00'
        },
        rail: {
          color: '#508F00'
        }
      }
    }
  }
})

function Catalog(events) {

  // const [isActive, setFilter] = useState(false)

  // const range = [20, 80]

  const [range, setRange] = useState([20, 60])

  const handleRange = (event, newValue) => {
    setRange(newValue)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.wrapper}>
        <div className={styles.filtersContainer}>
          <div className={styles.top}>
            <div className={styles.title}>Фильтр</div>
            <div className={styles.titleArrow}>
              <Svg icon="arrow" height='10' stroke={variables.graphite} strokeWidth='2'/>
            </div>
          </div>
          <div className={styles.filters}>
            <Filter title='Цена'>
              <div className={styles.slider}>
                <Slider 
                  getAriaLabel={() => 'Price'}
                  value={range}
                  onChange={handleRange}
                  // color="#508F00"
                  // valueLabelDisplay="auto"
                />
              </div>
              <div>Привет</div>
            </Filter>
            <Filter title='Класс растения'>
              <div>Привет</div>
            </Filter>
            <Filter title='Сорт растения'>
              <div>Эм...</div>
            </Filter>
          </div>
        </div>
        <div className={styles.itemsContainer}>
          <div className={styles.criteria}>
            <div className={styles.search}>
              <input type="text" placeholder='Искать в каталоге' className={styles.input}/>
            </div>
            <div className={styles.sort}>
              <div className={styles.sortTitle}>Сортировать по:</div>
              <Sort title='Цене'/>
              <Sort title='Наличию'/>
              <Sort title='Популярности'/>
            </div>
          </div>
          <div className={styles.list}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
    
export default Catalog;
