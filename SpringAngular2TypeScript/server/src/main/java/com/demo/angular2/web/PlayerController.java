package com.demo.angular2.web;

import org.springframework.web.bind.annotation.*;

import com.demo.angular2.model.Player;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin()
public class PlayerController {

    private List<Player> resultList = new ArrayList<>();


    public PlayerController() {
        resultList.add(new Player(2015, "Great Britain", "Belgium", "3-1"));
        resultList.add(new Player(2014, "Switzerland", "France", "3-1"));
        resultList.add(new Player(2013, "Czech Republic", "Serbia", "3-2"));


    }

    @RequestMapping(value = "/result_list", method = RequestMethod.GET)
    public @ResponseBody List<Player> resultList(){
        return resultList;
    }

    @RequestMapping("/result_year")
    public @ResponseBody Player result(@RequestParam(required = true, defaultValue = "2015") String year){
        for (Player current : resultList){
            if (current.getYear().toString().equals(year)){
                return current;
            }

        }
        return null;
    }


}
