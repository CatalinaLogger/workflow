package com.jsixg.workflow.config;

import com.jsixg.workflow.filter.WorkflowInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class AdapterConfig extends WebMvcConfigurerAdapter {
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new WorkflowInterceptor())
		.addPathPatterns("/**");
		super.addInterceptors(registry);
	}
}
