import React from 'react'
import s from './FormTable.module.css'

function FormTable({addTask}) {
  return (
    <div>
        <form onSubmit={addTask} className={s.form}>
            <div className={s.form_top}>
            <select name='day' className={s.form_top_day}>
                <option value=''>Выберите день</option>
                <option value='0'>ПН</option>
                <option value='1'>ВТ</option>
                <option value='2'>СР</option>
                <option value='3'>ЧТ</option>
                <option value='4'>ПТ</option>
                <option value='5'>СБ</option>
                <option value='6'>ВС</option>
            </select>
            <select name='importance' className={s.form_top_day}>
                <option value=''>Выберите важность</option>
                <option value='1'>Важно</option>
                <option value='0'>Не Важно</option>
            </select>
            </div>
            <div className={s.form_bottom}>
            <input name='description' type='text' placeholder='Описание'></input>
            <button type='submit'>Добавить</button>
            </div>
        </form>
    </div>
  )
}

export default FormTable