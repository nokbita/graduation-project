package pers.nokbita.gp_back;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("pers.nokbita.gp_back.mapper")
public class GpBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(GpBackApplication.class, args);
    }

}
