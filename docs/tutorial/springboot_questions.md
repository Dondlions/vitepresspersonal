# Q：在 springboot 的后端是项目中，注解的作用是什么？

_*A*_： 在 Spring Boot 后端项目中，注解(Annotation)是一种元数据形式，它为代码提供附加信息而不直接影响代码逻辑。Spring Boot 大量使用注解来简化配置和开发工作。以下是主要注解类型及其作用

- 配置简化：减少 XML 配置，通过注解声明组件和依赖关系

- 行为控制：定义组件如何被创建、管理和交互

- 路由映射：处理 HTTP 请求与响应

- 依赖注入：自动装配组件

- 生命周期管理：控制 bean 的创建和销毁过程

<br>
<br>
<br>
<br>
<br>

---

# Q：在 springboot 项目中常用的注解有哪些？作用是什么？

1. 启动与配置：

   - `@springBootAppLication`：标记主类，启动 Spring Boot 应用程序
   - `@Configuration`：定义配置类，替代 XML 配置文件
   - `@EnableAutoConfiguration`：启用 Spring Boot 自动配置
   - `@ComponentScan`：扫描指定包及其子包中的组件
   - `@PropertySource`：加载属性文件
   - `@Import`：导入其他配置类

2. 组件扫描

   - `@Component`：通用组件
   - `@Service`：标记服务层组件
   - `@Repository`：标记数据访问层组件
   - `@Controller`/`@RestController`：标记控制器组件

3. Web 相关

   - `@RequestMapping`：映射 Web 请求路径
   - `@GetMapping`/`@PostMapping`等：特定 HTTP 方法是我映射
   - `@PathVariable`：绑定 URL 路径参数
   - `@RequestParam`：绑定请求参数
   - `@RequestBody`：绑定请求体
   - `@ResponseBody`：将返回值序列化为 JSON 或 XML

4. 依赖注入

   - `@Autowired`：自动装配 bean
   - `@Qualifier`：指定要装配的 bean
   - `@Resource`：JDK 注解，功能类似@Autowired
   - `@Value`：注入配置属性

5. 数据访问

   - `@Entity`：标记实体类
   - `@Table`：指定数据库表名
   - `@Id`：指定主键
   - `@Column`：指定列名
   - `@Transactional`：声明事务方法

6. 安全

   - `@EnableWebSecurity`：启用 Web 安全配置
   - `@EnableGlobalMethodSecurity`：启用方法级安全配置
   - `@PreAuthorize`/`@PostAuthorize`：方法权限控制

7. 测试
   - `@SpringBootTest`：集成测试
   - `@MockBean`：模拟依赖
   - `@RunWith`：指定测试运行器

<br>
<br>
<br>
<br>
<br>

---

# Q： 什么是断言？

_*A*_：断言（Assertion）是一种用于验证程序正确性的机制，它通过检查条件是否满足来确保代码的正确性。断言通常用于开发和测试阶段，帮助开发者发现潜在的错误和问题。

一句话总结断言：**_我觉得结果就是我认为的语句，不是的话就报错_**

java 的内置断言是：assert：

```java
assert x>0 : "x 必须是正数";
```

测试框架中的断言（junit 等）：

```java
assertEquals(expected, actual);
assertTrue(condition);
assertNotNull(object);
```

Spring 中的断言工具：

Spring 框架提供了 Assert 工具类

```java
Assert.notNull(object, "对象不能为null");
Assert.isTrue(condition, "条件必须为true");
```

<br>
<br>
<br>
<br>
<br>

---

# Q： junit 的作用是什么？

_*A*_：是 java 编程语言中最流行的单元测试框架，它在软件开发中扮演着关键的角色。JUnit 的主要作用包括：

1. 单元测试自动化

   - 语序开发者编写可重复执行的测试代码
   - 自动化验证单个类或方法的正确性
   - 提供快速反馈机制，减少手动测试时间

2. 回归测试保障

   - 确保代码修改不会破坏现有功能
   - 每次构建可以自动运行全部测试套件
   - 早期发现因代码变更引入的错误

3. 测试注解系统

   - `@Test`：标记测试方法
   - `@BeforeEach`/`@AfterEach`：测试前置后置操作
   - `@BeforeAll`/`@AfterAll`：测试类级别初始化和清理
