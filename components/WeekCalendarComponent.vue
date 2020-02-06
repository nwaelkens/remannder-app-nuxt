<template>
  <div class="weekCalendar">
    <date-time-component :now="now"></date-time-component>
    <div class="columns">
      <div v-for="(position, index) in showHowManyDays" :key="index" class="column">
        <day-calendar-component
          :isToday="getDate(position).getDay() === now.getDay()"
          :date="getDate(position)"
        ></day-calendar-component>
      </div>
    </div>
  </div>
</template>

<script>
import DayCalendarComponent from "~/components/DayCalendarComponent";
import DateTimeComponent from "~/components/DateTimeComponent";
export default {
  components: {
    DateTimeComponent,
    DayCalendarComponent
  },
  data() {
    return {
      now: null,
      showHowManyDays: 3,
      firstDayOffset: -1
    };
  },
  methods: {
    getDate(position) {
      position--;
      const newDate = new Date();
      return new Date(
        newDate.setDate(newDate.getDate() + position + this.firstDayOffset)
      );
    },
    currentDateTime() {
      var self = this;
      this.now = new Date();
      setTimeout(self.currentDateTime, 1000);
    }
  },
  created() {
    this.currentDateTime();
  }
};
</script>

<style scoped>
.weekCalendar {
  margin: 0 1rem;
}
.columns {
  margin: 0;
  padding: 0;
}

.column:first-child {
  padding-left: 0;
}

.column {
  padding: 0 0 1rem 1rem;
  margin: 0;
}
</style>
