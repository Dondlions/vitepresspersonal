# Spring 概述

![spring](../public/spring.png)

Spring 是一款主流的 JAVA EE 轻量级开源框架，目的是用于简化 Java 企业级引用的开发难度和开发周期。从简单性，可测试性和
松耦合度的角度而言，任何 Java 应用都可以从 Spring 中受益。Spring 框架提供自己提供的功能外，还提供整合其他技术和框架的能力。

## Spring 核心

Spring 指的是 Spring Framework，通常我们称之为 Spring 框架。Spring 框架是一个分层的面向切面的 Java 应用程序的一站式解决框架
，它是 Spring 技术栈的核心和基础，是为了解决企业级引用开发的复杂性而创建的。

Spring 有两个核心模块：**_IoC_** 和 **_AOP_**。

**Ioc**：Inverse of Control 的简写，为 控制反转，指把创建对象交给 Spring 进行管理。

**AOP**：Aspect Oriented Programming 的简写，为 面向切面编程。AOP 用来封装多个类的公共行为，将那些与业务无关，却为业务模块共同调用的逻辑封装起来，减少系统的重复代码，降低模块间的耦合度。另外，AOP 还解决一些系统层面上的问题，比如日志、事务、权限等。

## Spring Framework 的特点

- `控制反转`：IoC，反转资源获取方向；把自己创建的资源、向环境索取资源变为环境将资源准备好，我们享受资源注入。

- `面向切面编程`：AOP，在不修改源代码的基础上增强代码功能。

- `容器`：Spring IoC 是一个容器，因为它包含并管理组件对象的生命周期；组件享受到了容器化的管理，替程序员屏蔽了组件创建过程中的大量细节，极大降低了使用门槛，大幅度提高了开发效率。

- `一站式`：在 IOC 和 AOP 的基础上可以整合各种企业应用的开源框架和优秀的第三方库，而且在 Spring 旗下的项目已经覆盖了广泛领域，很多方面的功能性需求可以在 Spring Framework 的基础上全部使用 Spring 来实现。

### IoC 的实现方式

IoC 是一种控制反转的思想，而 IoC 的实现方式是：DI（Dependency Injection）依赖注入

### IoC、Bean、DI 的关系

Bean 是士兵，DI 是补给系统，IoC 容器是军队后勤部

1. 后勤部(IoC)招募士兵(创建 Bean)

2. 建立花名册(Bean 定义注册表)

3. 打仗时(业务运行)：

   - 前线部队(Controller)发出需求

   - 补给系统(DI)自动调配弹药(Service)和粮草(Repository)

   - 所有资源无需前线自己筹备
