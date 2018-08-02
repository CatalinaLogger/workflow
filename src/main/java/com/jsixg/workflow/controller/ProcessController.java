package com.jsixg.workflow.controller;

import com.jsixg.workflow.utils.Parametermap;
import org.flowable.engine.RepositoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.ZipInputStream;

@Controller
@RequestMapping("/process")
public class ProcessController extends BaseController{

    @Autowired
    private RepositoryService repositoryService;

    @RequestMapping("/uploadToView")
    public String uploadToView() {
        return "page/process/editcontentpage";
    }

    @RequestMapping("/upload")
    public ModelAndView upload(HttpServletRequest request, @RequestParam("file") MultipartFile file) throws IOException {
        Parametermap map = getParametermap();
        upload(request, file, map);
        return new ModelAndView("redirect:listView");
    }

    private void upload(HttpServletRequest request, MultipartFile file, Parametermap map) throws IOException {
        request.setCharacterEncoding("UTF-8");
        if (!file.isEmpty()) {
            String filename = file.getOriginalFilename();
            String type = filename.indexOf(".") != -1 ? filename.substring(filename.lastIndexOf(".") + 1, filename.length()) : null;
            if (type != null) {
                if (type.endsWith("zip")) {
                    ZipInputStream zs=new ZipInputStream(file.getInputStream());
                    repositoryService
                            .createDeployment()
                            .name(map.get("name").toString())
                            .category(map.get("category").toString())
                            .addZipInputStream(zs)
                            .deploy();
                } else if(type.endsWith("bpmn")|| type.endsWith("xml")) {
                    InputStream inputStream=file.getInputStream();
                    repositoryService.createDeployment()
                            .name(map.get("name").toString())
                            .category(map.get("category").toString())
                            .addInputStream(filename, inputStream)
                            .deploy();
                }
            }
        }
    }
}
