import React, {useState, useEffect} from 'react';
import moment from 'moment';

import FormCalendar from '../FormCalendar';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './style.css';



function Calendar(){

    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    const[dateObject, setDateObject] = useState(moment());
    const[allMonths, setAllMonths] = useState(moment.months());
    const[ptbrMonth, setPtbrMonths] = useState();
    const[showMonthTable ,setShowMonthTable] = useState(false);
    const[showCalendarTable ,setShowCalendarTable] = useState(true);
    const[selectedDay, setSelectedDay] = useState();
    //const[bookedDate, setBookedDate] = useState();


    const firstDayOfMonth = () => {
        let objectDate = dateObject;
        let firstDay = moment(objectDate).startOf("month").format("d");
        return firstDay;
    };

    const daysInMonth = () =>{
        return dateObject.daysInMonth();
    }

    const currentDay = () => {
        return dateObject.format("D");
    }

    const currentMonth = () => {
        var monthNum = dateObject.format("M");
        var i = monthNum - 1;
        return meses[i]
    }

    const currentYear = () =>{
        return dateObject.format("Y")
    }

    const setMonth = month => {
        let monthNo = allMonths.indexOf(month);
        let datObject = Object.assign({}, dateObject);
        datObject = moment(datObject).set("month", monthNo);
        setDateObject(datObject)
        setShowMonthTable(!showMonthTable)
        setShowCalendarTable(!showCalendarTable)
    }

    const showMonth = (e) => {
        setShowMonthTable(!showMonthTable)
    };

  
    const MonthList = props => {

        let months = [];
        props.data.map((data, i) => {
          months.push(
            <td
              key={data}
              className="calendar-month"
              onClick={e => {
                setMonth(data);
              }}
            >
              <span>{meses[i]}</span>
            </td>
          );
        });

        let rows = [];
        let cells = [];
    
        months.forEach((row, i) => {
          if (i % 3 !== 0 || i === 0) {
            cells.push(row);
          } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
          }
        });

        rows.push(cells);
        let monthlist = rows.map((d, i) => {
          return <tr>{d}</tr>;
        });
    
        return (
          <table className="calendar-month">
            <thead>
              <tr>
                <th colSpan="4">Selecione um Mês</th>
              </tr>
            </thead>
            <tbody>{monthlist}</tbody>
          </table>
        );
    };


    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(
          <td className="">{""}</td>
        );
      }

    let diasNoMes = [];
    for (let d = 1; d <= daysInMonth(); d++) {
        let currtDay = d === currentDay() ? "today" : "";
        diasNoMes.push(
            <td key={d} className={currtDay}>
                <span onClick={ e => {onDayClick(e, d)} } >{d}</span>
            </td>
        );
    }

    var totalSlots = [...blanks, ...diasNoMes];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
          cells.push(row); // se o index não for igual a 7, isso significa para não ir para a próxima semana
        } else {
          rows.push(cells); // when reach next week we contain all td in last week to rows 
          cells = []; // empty container 
          cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
          rows.push(cells);
        }
      });
    const onPrev = () => {
        let curr = dateObject.subtract(1, "month");
        setDateObject(curr);
        let mes = meses[dateObject.format("M") - 1]
        setPtbrMonths(mes);
    };

    const onNext = () => {
        let curr = dateObject.add(1, "month");
        setDateObject(curr);
        let mes = meses[dateObject.format("M") -1]
        setPtbrMonths(mes)
    };

    const onDayClick = (e, d) => {
        setSelectedDay(d);
        setPtbrMonths(currentMonth())
    }

    const getBookDate = () =>{
        let bookDate = ""
        if(selectedDay){
            return bookDate = selectedDay + '/' + ptbrMonth + '/' + currentYear();
        }
    }

    return(
        <div className="calendar">
          <h3>Clique na data que deseja agendar</h3>
            <div className="currMonthYearBefAft">
                <span onClick={e => onPrev()} className="prevNNextbtn" >
                    <NavigateBeforeIcon/>
                </span>
                <div className="monthPicker" onClick={e => showMonth(e)} >
                    <span>{currentMonth()}</span>
                    <span>{currentYear()}</span>
                    <div className="monthNaviPicker" >
                        {
                        showMonthTable ? <MonthList data={allMonths} /> : null
                        }
                    </div>
                </div>
                <span onClick={e => onNext()} className="prevNNextbtn" >
                    <NavigateNextIcon/>
                </span>
            </div>
           { !showMonthTable && (
              <table className="calendar-day">
                  <thead>
                    <tr>{diasSemana.map(day => (
                            <th key={day} className="weekDay" >
                                {day}
                            </th>
                  ))}</tr>
                  </thead>
                  <tbody>{rows.map((d, i) =>( 
                      <tr className="days">{d}</tr>
                      ))}
                  </tbody>
              </table>
            )}
            <div className="subtitleTable">
                <div className="indisponivel"></div>
                <text className="indispTxt">Indisponível </text>
                <div className="avaliacao"></div>
                <text>Em Avaliação </text>
            </div>
            <FormCalendar bookDate={getBookDate()}/>
        </div>
    );
}

export default Calendar;