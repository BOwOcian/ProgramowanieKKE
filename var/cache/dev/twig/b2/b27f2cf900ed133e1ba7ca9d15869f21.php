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

/* dashboard/_update_profile_information_form.html.twig */
class __TwigTemplate_906da204e0ba20047f4d374ff67cdba7 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/_update_profile_information_form.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/_update_profile_information_form.html.twig"));

        // line 1
        echo "<section>
  <header>
    <h2 class=\"text-lg font-medium text-gray-900\">Informacje o profilu</h2>

    <p class=\"mt-1 text-sm text-gray-600\">Tutaj możesz zmienić informacje na temat swojego nicku oraz maila.</p>
  </header>

  ";
        // line 8
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 8, $this->source); })()), 'form_start', ["attr" => ["class" => "mt-6 space-y-6"]]);
        // line 9
        echo "
    ";
        // line 10
        twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 10, $this->source); })()), "password", [], "any", false, false, false, 10), "setRendered", [], "any", false, false, false, 10);
        // line 11
        echo "    ";
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 11, $this->source); })()), "name", [], "any", false, false, false, 11), 'label', ["label_attr" => ["class" => "block font-medium text-sm text-gray-700"], "label" => "Nazwa użytkownika"]);
        // line 12
        echo "
    ";
        // line 13
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 13, $this->source); })()), "name", [], "any", false, false, false, 13), 'widget', ["attr" => ["class" => "mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"]]);
        // line 14
        echo "
    ";
        // line 15
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 15, $this->source); })()), "name", [], "any", false, false, false, 15), "vars", [], "any", false, false, false, 15), "errors", [], "array", false, false, false, 15)) > 0)) {
            // line 16
            echo "\t\t<ul class=\"mt-2 text-sm text-red-600 space-y-1\">
\t\t\t";
            // line 17
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 17, $this->source); })()), "name", [], "any", false, false, false, 17), "vars", [], "any", false, false, false, 17), "errors", [], "array", false, false, false, 17));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 18
                echo "\t\t\t\t<li>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["error"], "message", [], "any", false, false, false, 18), "html", null, true);
                echo "</li>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['error'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 20
            echo "\t\t</ul>
\t";
        }
        // line 22
        echo "    ";
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 22, $this->source); })()), "email", [], "any", false, false, false, 22), 'label', ["label_attr" => ["class" => "block font-medium text-sm text-gray-700"], "label" => "Adres e-mail"]);
        // line 23
        echo "
    ";
        // line 24
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 24, $this->source); })()), "email", [], "any", false, false, false, 24), 'widget', ["attr" => ["class" => "mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"]]);
        // line 25
        echo "
    ";
        // line 26
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 26, $this->source); })()), "email", [], "any", false, false, false, 26), "vars", [], "any", false, false, false, 26), "errors", [], "array", false, false, false, 26)) > 0)) {
            // line 27
            echo "\t\t<ul class=\"mt-2 text-sm text-red-600 space-y-1\">
\t\t\t";
            // line 28
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 28, $this->source); })()), "email", [], "any", false, false, false, 28), "vars", [], "any", false, false, false, 28), "errors", [], "array", false, false, false, 28));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 29
                echo "\t\t\t\t<li>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["error"], "message", [], "any", false, false, false, 29), "html", null, true);
                echo "</li>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['error'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 31
            echo "\t\t</ul>
\t";
        }
        // line 33
        echo "    <div class=\"flex items-center gap-4\">
      <button type=\"submit\" class=\"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150\">Zapisz</button>
    ";
        // line 35
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 35, $this->source); })()), "flashes", [0 => "status-profile-information"], "method", false, false, false, 35));
        foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
            // line 36
            echo "    ";
            if (($context["message"] == "user-updated")) {
                // line 37
                echo "      <p x-data=\"{ show: true }\" x-show=\"show\" x-transition x-init=\"setTimeout(() => show = false, 2000)\" class=\"text-sm text-gray-600\">Saved</p>
    ";
            }
            // line 39
            echo "    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 40
        echo "    </div>
  ";
        // line 41
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["userForm"]) || array_key_exists("userForm", $context) ? $context["userForm"] : (function () { throw new RuntimeError('Variable "userForm" does not exist.', 41, $this->source); })()), 'form_end');
        echo "
</section>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "dashboard/_update_profile_information_form.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  149 => 41,  146 => 40,  140 => 39,  136 => 37,  133 => 36,  129 => 35,  125 => 33,  121 => 31,  112 => 29,  108 => 28,  105 => 27,  103 => 26,  100 => 25,  98 => 24,  95 => 23,  92 => 22,  88 => 20,  79 => 18,  75 => 17,  72 => 16,  70 => 15,  67 => 14,  65 => 13,  62 => 12,  59 => 11,  57 => 10,  54 => 9,  52 => 8,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section>
  <header>
    <h2 class=\"text-lg font-medium text-gray-900\">Informacje o profilu</h2>

    <p class=\"mt-1 text-sm text-gray-600\">Tutaj możesz zmienić informacje na temat swojego nicku oraz maila.</p>
  </header>

  {{ form_start(userForm, {'attr': {'class': 'mt-6 space-y-6' }}
\t) }}
    {% do userForm.password.setRendered %}
    {{ form_label(userForm.name, 'Nazwa użytkownika', {'label_attr': {'class': 'block font-medium text-sm text-gray-700' }}
\t) }}
    {{ form_widget(userForm.name, {'attr': {'class': 'mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' }}
\t) }}
    {% if userForm.name.vars['errors']|length > 0 %}
\t\t<ul class=\"mt-2 text-sm text-red-600 space-y-1\">
\t\t\t{% for error in userForm.name.vars['errors'] %}
\t\t\t\t<li>{{ error.message }}</li>
\t\t\t{% endfor %}
\t\t</ul>
\t{% endif %}
    {{ form_label(userForm.email, 'Adres e-mail', {'label_attr': {'class': 'block font-medium text-sm text-gray-700' }}
\t) }}
    {{ form_widget(userForm.email, {'attr': {'class': 'mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' }}
\t) }}
    {% if userForm.email.vars['errors']|length > 0 %}
\t\t<ul class=\"mt-2 text-sm text-red-600 space-y-1\">
\t\t\t{% for error in userForm.email.vars['errors'] %}
\t\t\t\t<li>{{ error.message }}</li>
\t\t\t{% endfor %}
\t\t</ul>
\t{% endif %}
    <div class=\"flex items-center gap-4\">
      <button type=\"submit\" class=\"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150\">Zapisz</button>
    {% for message in app.flashes('status-profile-information') %}
    {% if message == 'user-updated' %}
      <p x-data=\"{ show: true }\" x-show=\"show\" x-transition x-init=\"setTimeout(() => show = false, 2000)\" class=\"text-sm text-gray-600\">Saved</p>
    {% endif %}
    {% endfor %}
    </div>
  {{ form_end(userForm) }}
</section>", "dashboard/_update_profile_information_form.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\dashboard\\_update_profile_information_form.html.twig");
    }
}
