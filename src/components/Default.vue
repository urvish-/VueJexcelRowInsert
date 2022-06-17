<template lang="html">
  <div class="wrapper-jexcel">
    <div class="introduction"><span>This is a list of my cars</span></div>
    <input
      type="button"
      value="Add new row"
      @click="jExcelObj.insertRow()"
    /><br />
    <div id="spreadsheet" ref="spreadsheet"></div>
  </div>
</template>

<script>
import jexcelStyle from "jexcel/dist/jexcel.css"; // eslint-disable-line no-unused-vars
import jexcel from "jexcel"; // eslint-disable-line no-unused-vars

export default {
  name: "jexcel",
  data() {
    return {
      myCars: [
        [
          "Jazz",
          "Honda",
          "2019-02-12",
          imageExample,
          true,
          "$ 2.000,00",
          "#777700"
        ],
        ["Civic", "Honda", "2018-07-11", "", true, "$ 4.000,01", "#007777"],
        ["Z4", "BMW", "2017-11-24", "", false, "$ 324.072,58", "#700d0d"],
        [
          "Boxter S",
          "Porshe",
          "2019-08-24",
          "",
          true,
          "$ 307.839,45",
          "#0e0438"
        ]
      ]
    };
  },
  computed: {
    jExcelOptions() {
      return {
        data: this.myCars,
        columns: [
          { type: "text", title: "Car", width: "120px" },
          {
            type: "dropdown",
            title: "Make",
            width: "250px",
            source: ["Alfa Romeo", "Audi", "BMW", "Honda", "Porshe"]
          },
          { type: "calendar", title: "Available", width: "250px" },
          { type: "image", title: "Photo", width: "120px" },
          { type: "checkbox", title: "Stock", width: "80px" },
          {
            type: "numeric",
            title: "Price",
            width: "120px",
            mask: "$ #.##,00",
            decimal: ","
          },
          { type: "color", width: "100px", render: "square" }
        ]
      };
    }
  },
  methods: {
    insertRowc() {
      console.log(this);
      // this.spreadsheet.insertRow();
    }
  },
  mounted: function() {
    //console.log(this.jExcelOptions);
    //console.log(this.$refs["spreadsheet"]);
    const jExcelObj = jexcel(this.$refs["spreadsheet"], this.jExcelOptions);
    // Object.assign(this, jExcelObj); // pollutes component instance
    Object.assign(this, { jExcelObj }); // tucks all methods under jExcelObj object in component instance
    // console.log(this.jExcelObj);
  }
};

const imageExample =
  "data:image/jpeg;base64,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";
</script>

<style lang="css" scoped>
.introduction {
  font-size: 14px;
  padding: 0.5em;
  margin-bottom: 0.3em;
  color: gold;
  background: #111;
}
</style>
