import React, { useEffect, useState } from 'react';
import { Select, Button, DatePicker, ConfigProvider, TreeSelect } from 'antd';
import styles from './SearchForm.module.scss';
import searchArrow from "../../assets/searchArrow.png";
import planeUp from '../../assets/planeUp.png'
import planeDown from '../../assets/planeDown.png'
import calendar from '../../assets/calendar.png'
import user from '../../assets/user.png'
import treePlaneUp from '../../assets/treePlaneUp.png'

import locale from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');
const { Option } = Select;
const { RangePicker } = DatePicker;

const treeData = [
  {
    label: <div className={styles.parentLabelContainer}>
          <span className={styles.parentLabel}>Лондон, <span>Великобритания</span></span>
          <span className={styles.parentCountry}>LON</span>
        </div>,
    value: 'Лондон, Великобритания',
    key: 'LON',
    children: [
      {
        label: <div className={styles.labelContainer}>
        <span className={styles.treeLabel}><img src={treePlaneUp} alt='plane up'/>Лондон-Сити</span>
        <span className={styles.treeKey}>LCY</span>
      </div>,
        
        value: 'Лондон-Сити',
        key: 'Лондон-Сити',
      },
      {
        label: <div className={styles.labelContainer}>
        <span className={styles.treeLabel}><img src={treePlaneUp} alt='plane up'/>Гатвик</span>
        <span className={styles.treeKey}>LCW</span>
      </div>,
        value: 'Гатвик',
        key: 'LCW',
      },
      {
        label: <div className={styles.labelContainer}>
        <span className={styles.treeLabel}><img src={treePlaneUp} alt='plane up'/>Хитроу</span>
        <span className={styles.treeKey}>LHR</span>
      </div>,
        value: 'Хитроу',
        key: 'LHR',
      },
      {
        label: <div className={styles.labelContainer}>
        <span className={styles.treeLabel}><img src={treePlaneUp} alt='plane up'/>Лутон</span>
        <span className={styles.treeKey}>LTN</span>
      </div>,
        value: 'Лутон',
        key: 'LTN',
      },
      {
        label: <div className={styles.labelContainer}>
        <span className={styles.treeLabel}><img src={treePlaneUp} alt='plane up'/>Саутенд</span>
        <span className={styles.treeKey}>SEN</span>
      </div>,
        value: 'Саутенд',
        key: 'SEN',
      },
    ],
  },
  {
    label: <div className={styles.parentLabelContainer}>
          <span className={styles.parentLabel}>Лондон, <span>Канада</span></span>
          <span className={styles.parentCountry}>YXU</span>
        </div>,
    value: 'Лондон, Канада',
    key: 'YXU',
  },
];

const getDayWord = (num) => {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return 'дней';
  if (lastDigit === 1) return 'день';
  if (lastDigit >= 2 && lastDigit <= 4) return 'дня';
  return 'дней';
};

const SearchForm = () => {
  const [open, setOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState(null); 
  const [days, setDays] = useState('');
  const [from, setFrom] = useState(null); 
  const [to, setTo] = useState(null); 

  useEffect(() => {
    const treeSelects = document.querySelectorAll(".ant-select-selection-item") 
    if(from) {
       treeSelects[0].innerHTML = `<span>${from}</span>`
    }
  }, [from])

  useEffect(() => {
    const treeSelects = document.querySelectorAll(".ant-select-selection-item") 
    if(to) {
       treeSelects[treeSelects.length - 1].innerHTML = `<span>${to}</span>`
    }
  }, [to])

  useEffect(() => {
    if(open) {
      const monthButtons = document.querySelectorAll(".ant-picker-month-btn")
      const yearButtons = document.querySelectorAll(".ant-picker-year-btn")
      monthButtons.forEach(btn => {
        btn.disabled = true
      })
      yearButtons.forEach(btn => {
        btn.disabled = true
      })
    }
  }, [open])

  const handleChange = (dates) => {
    setSelectedDates(dates);
    if (dates && dates[0] && dates[1]) {
      const diff = dates[1].diff(dates[0], 'day');
      setDays(`${diff} ${getDayWord(diff)}`);
    } else {
      setDays('');
    }
  };

  const handleConfirm = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setSelectedDates(null);
    setDays('');
    setOpen(false);
  };

  const displayRender = (labels, selectedOptions) => {
    if (selectedOptions && selectedOptions.length > 0) {
      console.log(selectedOptions[0].value)
      return selectedOptions[0].value;
    }
    return null;
  };

  return (
    <div className={styles.flightSearchContainer}>
      <div className={styles.inputGroup}>
        <div className={styles.inputContainer}>
        <img src={planeUp} alt='plane up'/>
        <TreeSelect
      treeDefaultExpandAll
      placeholder="Откуда?"
      className={styles.customSelect}
      variant="borderless"
      treeData={treeData}
      onChange={(value) => setFrom(value)}
      displayRender={displayRender}
    />
        </div>

        <div className={styles.divider} />

        <div className={styles.inputContainer}>
        <img src={planeDown} alt='plane down'/>
        <TreeSelect
      treeDefaultExpandAll
      placeholder="Куда?"
      className={styles.customSelect}
      variant="borderless"
      treeData={treeData}
      onChange={(value) => setTo(value)}
      displayRender={displayRender}
    />
        </div>

        <div className={styles.divider} />

        <div className={styles.inputContainer}>
        <img src={calendar} alt='calendar'/>
        <ConfigProvider locale={locale}>
          <RangePicker
            suffixIcon={false}
            open={open}
            onCalendarChange={handleChange}
            value={selectedDates}
            format="DD.MM.YYYY"
            className={styles.customCalendarPopup}
            separator="—"
            dropdownClassName={styles.customCalendarPopup}
            allowClear={false}
            variant="borderless"
            onClick={() => setOpen(true)}
            renderExtraFooter={() => (
              <div className={styles.rangePickerExtraFooter}>
                <div className={styles.rangePickerDaysCounter}>
                  <span>{days}</span>
                </div>
                <div>
                  <Button className={styles.cancel} onClick={handleCancel}>
                    <span>Отмена</span>
                  </Button>
                  <Button className={styles.choose} onClick={handleConfirm}>
                    <span>Выбрать</span>
                  </Button>
                </div>
              </div>
            )}
          />
        </ConfigProvider>
      </div>

        <div className={styles.divider} />

        <div className={styles.inputContainer}>
        <img src={user} alt='user'/>
        <Select className={styles.customSelect}
          defaultValue="1">
          <Option value="1">Туристы</Option>
          <Option value="2">По работе</Option>
          <Option value="3">К родственникам</Option>
        </Select>
        </div>

        <Button type="primary" className={styles.customButton}>
          <span>Найти</span>
          <img src={searchArrow} alt="arrow"/>
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;