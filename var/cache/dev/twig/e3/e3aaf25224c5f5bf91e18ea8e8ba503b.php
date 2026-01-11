<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* base.html.twig */
class __TwigTemplate_6a6b3b1af203bf6f2c63173e3baba1f9 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "base.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html lang=\"";
        // line 2
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 2, $this->source); })()), "request", [], "any", false, false, false, 2), "locale", [], "any", false, false, false, 2), "html", null, true);
        echo "\">
\t<head>
\t\t<meta charset=\"UTF-8\">
\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>
\t\t<title>
\t\t\t";
        // line 7
        $this->displayBlock('title', $context, $blocks);
        // line 9
        echo "\t\t</title>
\t\t";
        // line 10
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 13
        echo "
\t\t";
        // line 14
        $this->displayBlock('javascripts', $context, $blocks);
        // line 32
        echo "\t</head>
\t<body
\t\tclass=\"font-sans antialiased\">

\t\t";
        // line 37
        echo "\t\t<div x-data=\"{ show: false, message: '' }\" x-show=\"show\" @message-received.window=\"show=true; message=\$event.detail.msg; setTimeout(() => show = false, 5000);\" x-transition @close.window=\"show=false\" class=\"flex justify-between m-auto w-3/4 text-blue-200 shadow-inner p-3 bg-blue-600\">
\t\t\t<p>
\t\t\t\t<strong>Info
\t\t\t\t</strong>
\t\t\t\t<span x-html=\"message\"></span>
\t\t\t</p>
\t\t\t<strong @click=\"\$dispatch('close')\" class=\"text-xl align-center cursor-pointer\">&times;</strong>
\t\t</div>

\t\t";
        // line 47
        echo "\t\t<div
\t\t\tclass=\"container mx-auto p-10\">
\t\t\t";
        // line 50
        echo "\t\t\t<header
\t\t\t\tclass=\"flex justify-between items-center\">
\t\t\t\t";
        // line 53
        echo "\t\t\t\t<div class=\"flex items-center\">

\t\t\t\t\t";
        // line 55
        echo twig_include($this->env, $context, "svg_icons/daewoo_logo.html.twig");
        echo "

\t\t\t\t\t<div class=\"text-3xl hidden md:block tracking-tight text-gray-600 font-medium ml-2\">
\t\t\t\t\t\t<a href=\"";
        // line 58
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.index");
        echo "\">Symfony Motoblog</a>
\t\t\t\t\t</div>

\t\t\t\t\t";
        // line 61
        echo $this->extensions['Symfony\UX\TwigComponent\Twig\ComponentExtension']->render("search");
        echo "

\t\t\t\t</div>
\t\t\t\t";
        // line 65
        echo "\t\t\t\t<div class=\"space-x-6 hidden md:flex text-lg\">

                ";
        // line 67
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("IS_AUTHENTICATED_FULLY")) {
            // line 68
            echo "\t\t\t\t\t<p>Zalogowany jako:
\t\t\t\t\t\t<a class=\"hover:text-stone-500\" href=\"";
            // line 69
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_dashboard");
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 69, $this->source); })()), "user", [], "any", false, false, false, 69), "email", [], "any", false, false, false, 69), "html", null, true);
            echo "</a>
\t\t\t\t\t</p>
\t\t\t\t\t";
            // line 71
            echo twig_include($this->env, $context, "_logout_form.html.twig");
            echo "
\t\t\t\t\t<a href=\"";
            // line 72
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.new");
            echo "\" class=\"inline font-bold text-sm px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-600\">
\t\t\t\t\t\t";
            // line 73
            echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\TranslationExtension')->trans("Nowy post", [], "messages");
            echo "</a>
                ";
        } else {
            // line 75
            echo "\t\t\t\t\t<a class=\"tracking-widest hover:text-stone-500\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
            echo "\">Logowanie</a>
\t\t\t\t\t<a class=\"tracking-widest hover:text-stone-500\" href=\"";
            // line 76
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_register");
            echo "\">Rejestracja</a>
                ";
        }
        // line 78
        echo "\t\t\t\t</div>

\t\t\t\t";
        // line 81
        echo "\t\t\t\t<div id=\"hamburger-icon\" class=\"space-y-2 md:hidden cursor-pointer\">
\t\t\t\t\t<div class=\"w-8 h-0.5 bg-gray-600\"></div>
\t\t\t\t\t<div class=\"w-8 h-0.5 bg-gray-600\"></div>
\t\t\t\t\t<div class=\"w-8 h-0.5 bg-gray-600\"></div>
\t\t\t\t</div>

\t\t\t</header>

\t\t\t";
        // line 90
        echo "\t\t\t<div class=\"md:hidden\">
\t\t\t\t<div id=\"mobile-menu\" class=\"flex-col items-center hidden py-8 mt-10 space-y-6 bg-white left-6 right-6 drop-shadow-lg\">
                ";
        // line 92
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("IS_AUTHENTICATED_FULLY")) {
            // line 93
            echo "\t\t\t\t\t<p>Zalogowano jako:
\t\t\t\t\t\t<a class=\"hover:text-stone-500\" href=\"/\">";
            // line 94
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 94, $this->source); })()), "user", [], "any", false, false, false, 94), "email", [], "any", false, false, false, 94), "html", null, true);
            echo "</a>
\t\t\t\t\t</p>
\t\t\t\t\t";
            // line 96
            echo twig_include($this->env, $context, "_logout_form.html.twig");
            echo "
\t\t\t\t\t<a href=\"";
            // line 97
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.new");
            echo "\" class=\"inline font-bold text-sm px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-600\">
\t\t\t\t\t\tNowy post</a>
                ";
        } else {
            // line 100
            echo "\t\t\t\t\t<a class=\"tracking-widest hover:text-stone-500\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
            echo "\">Login</a>
\t\t\t\t\t<a class=\"tracking-widest hover:text-stone-500\" href=\"";
            // line 101
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_register");
            echo "\">Register</a>
                ";
        }
        // line 103
        echo "\t\t\t\t</div>
\t\t\t</div>

\t\t\t

\t\t\t";
        // line 108
        $this->displayBlock('body', $context, $blocks);
        // line 109
        echo "
\t\t\t";
        // line 111
        echo "\t\t\t<footer class=\"flex items-center justify-center mt-12\">
\t\t\t\t&copy; 2026 Symfony Motoblog
\t\t\t</footer>

\t\t</div>
\t</body>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 7
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Witaj na motoblogu!
\t\t\t";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 10
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 11
        echo "\t\t\t";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        echo "
\t\t";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 14
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 15
        echo "\t\t\t";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        echo "
            <script src=\"https://js.pusher.com/7.2.0/pusher.min.js\"></script>
            <script>
            var pusher = new Pusher('90f1d0b15677c50af3dc', {
                    cluster: 'eu'
                });
            var channel = pusher.subscribe('my-channel');
            channel.bind('new-post-event', function(data) {
                   var event = new CustomEvent('message-received', {
                       detail: {
                           msg: data
                       }
                   })
                   window.dispatchEvent(event)
                });
            </script>
\t\t";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 108
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  312 => 108,  284 => 15,  274 => 14,  261 => 11,  251 => 10,  231 => 7,  216 => 111,  213 => 109,  211 => 108,  204 => 103,  199 => 101,  194 => 100,  188 => 97,  184 => 96,  179 => 94,  176 => 93,  174 => 92,  170 => 90,  160 => 81,  156 => 78,  151 => 76,  146 => 75,  141 => 73,  137 => 72,  133 => 71,  126 => 69,  123 => 68,  121 => 67,  117 => 65,  111 => 61,  105 => 58,  99 => 55,  95 => 53,  91 => 50,  87 => 47,  76 => 37,  70 => 32,  68 => 14,  65 => 13,  63 => 10,  60 => 9,  58 => 7,  50 => 2,  47 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html lang=\"{{ app.request.locale }}\">
\t<head>
\t\t<meta charset=\"UTF-8\">
\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>
\t\t<title>
\t\t\t{% block title %}Witaj na motoblogu!
\t\t\t{% endblock %}
\t\t</title>
\t\t{% block stylesheets %}
\t\t\t{{ encore_entry_link_tags('app') }}
\t\t{% endblock %}

\t\t{% block javascripts %}
\t\t\t{{ encore_entry_script_tags('app') }}
            <script src=\"https://js.pusher.com/7.2.0/pusher.min.js\"></script>
            <script>
            var pusher = new Pusher('90f1d0b15677c50af3dc', {
                    cluster: 'eu'
                });
            var channel = pusher.subscribe('my-channel');
            channel.bind('new-post-event', function(data) {
                   var event = new CustomEvent('message-received', {
                       detail: {
                           msg: data
                       }
                   })
                   window.dispatchEvent(event)
                });
            </script>
\t\t{% endblock %}
\t</head>
\t<body
\t\tclass=\"font-sans antialiased\">

\t\t{# notification #}
\t\t<div x-data=\"{ show: false, message: '' }\" x-show=\"show\" @message-received.window=\"show=true; message=\$event.detail.msg; setTimeout(() => show = false, 5000);\" x-transition @close.window=\"show=false\" class=\"flex justify-between m-auto w-3/4 text-blue-200 shadow-inner p-3 bg-blue-600\">
\t\t\t<p>
\t\t\t\t<strong>Info
\t\t\t\t</strong>
\t\t\t\t<span x-html=\"message\"></span>
\t\t\t</p>
\t\t\t<strong @click=\"\$dispatch('close')\" class=\"text-xl align-center cursor-pointer\">&times;</strong>
\t\t</div>

\t\t{# container for all #}
\t\t<div
\t\t\tclass=\"container mx-auto p-10\">
\t\t\t{# header #}
\t\t\t<header
\t\t\t\tclass=\"flex justify-between items-center\">
\t\t\t\t{# logo, search #}
\t\t\t\t<div class=\"flex items-center\">

\t\t\t\t\t{{include('svg_icons/daewoo_logo.html.twig')}}

\t\t\t\t\t<div class=\"text-3xl hidden md:block tracking-tight text-gray-600 font-medium ml-2\">
\t\t\t\t\t\t<a href=\"{{path('posts.index')}}\">Symfony Motoblog</a>
\t\t\t\t\t</div>

\t\t\t\t\t{{ component('search') }}

\t\t\t\t</div>
\t\t\t\t{# links #}
\t\t\t\t<div class=\"space-x-6 hidden md:flex text-lg\">

                {% if is_granted('IS_AUTHENTICATED_FULLY') %}
\t\t\t\t\t<p>Zalogowany jako:
\t\t\t\t\t\t<a class=\"hover:text-stone-500\" href=\"{{path('app_dashboard')}}\">{{ app.user.email }}</a>
\t\t\t\t\t</p>
\t\t\t\t\t{{include('_logout_form.html.twig')}}
\t\t\t\t\t<a href=\"{{ path('posts.new') }}\" class=\"inline font-bold text-sm px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-600\">
\t\t\t\t\t\t{%trans%}Nowy post{%endtrans%}</a>
                {% else %}
\t\t\t\t\t<a class=\"tracking-widest hover:text-stone-500\" href=\"{{path('app_login')}}\">Logowanie</a>
\t\t\t\t\t<a class=\"tracking-widest hover:text-stone-500\" href=\"{{path('app_register')}}\">Rejestracja</a>
                {% endif %}
\t\t\t\t</div>

\t\t\t\t{# hamburger icon #}
\t\t\t\t<div id=\"hamburger-icon\" class=\"space-y-2 md:hidden cursor-pointer\">
\t\t\t\t\t<div class=\"w-8 h-0.5 bg-gray-600\"></div>
\t\t\t\t\t<div class=\"w-8 h-0.5 bg-gray-600\"></div>
\t\t\t\t\t<div class=\"w-8 h-0.5 bg-gray-600\"></div>
\t\t\t\t</div>

\t\t\t</header>

\t\t\t{# mobile menu #}
\t\t\t<div class=\"md:hidden\">
\t\t\t\t<div id=\"mobile-menu\" class=\"flex-col items-center hidden py-8 mt-10 space-y-6 bg-white left-6 right-6 drop-shadow-lg\">
                {% if is_granted('IS_AUTHENTICATED_FULLY') %}
\t\t\t\t\t<p>Zalogowano jako:
\t\t\t\t\t\t<a class=\"hover:text-stone-500\" href=\"/\">{{ app.user.email }}</a>
\t\t\t\t\t</p>
\t\t\t\t\t{{include('_logout_form.html.twig')}}
\t\t\t\t\t<a href=\"{{ path('posts.new') }}\" class=\"inline font-bold text-sm px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-600\">
\t\t\t\t\t\tNowy post</a>
                {% else %}
\t\t\t\t\t<a class=\"tracking-widest hover:text-stone-500\" href=\"{{path('app_login')}}\">Login</a>
\t\t\t\t\t<a class=\"tracking-widest hover:text-stone-500\" href=\"{{path('app_register')}}\">Register</a>
                {% endif %}
\t\t\t\t</div>
\t\t\t</div>

\t\t\t

\t\t\t{% block body %}{% endblock %}

\t\t\t{# footer #}
\t\t\t<footer class=\"flex items-center justify-center mt-12\">
\t\t\t\t&copy; 2026 Symfony Motoblog
\t\t\t</footer>

\t\t</div>
\t</body>", "base.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\base.html.twig");
    }
}
