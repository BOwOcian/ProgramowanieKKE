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

/* dashboard/_update_password_form.html.twig */
class __TwigTemplate_384da90453637e90f854e1b9ee0c1a50 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/_update_password_form.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/_update_password_form.html.twig"));

        // line 1
        echo "<section>
  <header>
    <h2 class=\"text-lg font-medium text-gray-900\">Zmień hasło</h2>

    <p class=\"mt-1 text-sm text-gray-600\">Pamiętaj aby ustawić długie, składające się z losowych znaków hasło by być bezpiecznym.</p>
  </header>

  ";
        // line 8
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 8, $this->source); })()), 'form_start', ["attr" => ["class" => "mt-6 space-y-6"]]);
        // line 9
        echo "
    ";
        // line 10
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 10, $this->source); })()), "currentPassword", [], "any", false, false, false, 10), 'label', ["label_attr" => ["class" => "block font-medium text-sm text-gray-700"], "label" => "Aktualne hasło"]);
        // line 11
        echo "
    ";
        // line 12
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 12, $this->source); })()), "currentPassword", [], "any", false, false, false, 12), 'widget', ["attr" => ["class" => "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"]]);
        // line 13
        echo "
    ";
        // line 14
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 14, $this->source); })()), "currentPassword", [], "any", false, false, false, 14), "vars", [], "any", false, false, false, 14), "errors", [], "array", false, false, false, 14)) > 0)) {
            // line 15
            echo "\t\t<ul class=\"text-sm text-red-600 space-y-1 mt-2\">
\t\t\t";
            // line 16
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 16, $this->source); })()), "currentPassword", [], "any", false, false, false, 16), "vars", [], "any", false, false, false, 16), "errors", [], "array", false, false, false, 16));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 17
                echo "\t\t\t\t<li>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["error"], "message", [], "any", false, false, false, 17), "html", null, true);
                echo "</li>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['error'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 19
            echo "\t\t</ul>
\t";
        }
        // line 21
        echo "    
";
        // line 22
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 22, $this->source); })()), "newPassword", [], "any", false, false, false, 22), "first", [], "any", false, false, false, 22), 'label', ["label_attr" => ["class" => "block font-medium text-sm text-gray-700"], "label" => "Nowe hasło"]);
        // line 23
        echo "
    ";
        // line 24
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 24, $this->source); })()), "newPassword", [], "any", false, false, false, 24), "first", [], "any", false, false, false, 24), 'widget', ["attr" => ["class" => "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"]]);
        // line 25
        echo "
     ";
        // line 26
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 26, $this->source); })()), "newPassword", [], "any", false, false, false, 26), "first", [], "any", false, false, false, 26), "vars", [], "any", false, false, false, 26), "errors", [], "array", false, false, false, 26)) > 0)) {
            // line 27
            echo "\t\t<ul class=\"text-sm text-red-600 space-y-1 mt-2\">
\t\t\t";
            // line 28
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 28, $this->source); })()), "newPassword", [], "any", false, false, false, 28), "first", [], "any", false, false, false, 28), "vars", [], "any", false, false, false, 28), "errors", [], "array", false, false, false, 28));
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
        echo "    
";
        // line 34
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 34, $this->source); })()), "newPassword", [], "any", false, false, false, 34), "second", [], "any", false, false, false, 34), 'label', ["label_attr" => ["class" => "block font-medium text-sm text-gray-700"], "label" => "Powtórz nowe hasło"]);
        // line 35
        echo "
    ";
        // line 36
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 36, $this->source); })()), "newPassword", [], "any", false, false, false, 36), "second", [], "any", false, false, false, 36), 'widget', ["attr" => ["class" => "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"]]);
        // line 37
        echo "
    ";
        // line 38
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 38, $this->source); })()), "newPassword", [], "any", false, false, false, 38), "second", [], "any", false, false, false, 38), "vars", [], "any", false, false, false, 38), "errors", [], "array", false, false, false, 38)) > 0)) {
            // line 39
            echo "\t\t<ul class=\"text-sm text-red-600 space-y-1 mt-2\">
\t\t\t";
            // line 40
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 40, $this->source); })()), "newPassword", [], "any", false, false, false, 40), "second", [], "any", false, false, false, 40), "vars", [], "any", false, false, false, 40), "errors", [], "array", false, false, false, 40));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 41
                echo "\t\t\t\t<li>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["error"], "message", [], "any", false, false, false, 41), "html", null, true);
                echo "</li>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['error'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 43
            echo "\t\t</ul>
\t";
        }
        // line 45
        echo "    

    <div class=\"flex items-center gap-4\">
      <button type=\"submit\" class=\"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150\">Zapisz</button>
    ";
        // line 49
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 49, $this->source); })()), "flashes", [0 => "status-password"], "method", false, false, false, 49));
        foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
            // line 50
            echo "    ";
            if (($context["message"] == "password-changed")) {
                // line 51
                echo "      <p x-data=\"{ show: true }\" x-show=\"show\" x-transition x-init=\"setTimeout(() => show = false, 2000)\" class=\"text-sm text-gray-600\">Saved.</p>
      ";
            }
            // line 53
            echo "    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 54
        echo "    </div>
  ";
        // line 55
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["passwordForm"]) || array_key_exists("passwordForm", $context) ? $context["passwordForm"] : (function () { throw new RuntimeError('Variable "passwordForm" does not exist.', 55, $this->source); })()), 'form_end');
        echo "
</section>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "dashboard/_update_password_form.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  185 => 55,  182 => 54,  176 => 53,  172 => 51,  169 => 50,  165 => 49,  159 => 45,  155 => 43,  146 => 41,  142 => 40,  139 => 39,  137 => 38,  134 => 37,  132 => 36,  129 => 35,  127 => 34,  124 => 33,  120 => 31,  111 => 29,  107 => 28,  104 => 27,  102 => 26,  99 => 25,  97 => 24,  94 => 23,  92 => 22,  89 => 21,  85 => 19,  76 => 17,  72 => 16,  69 => 15,  67 => 14,  64 => 13,  62 => 12,  59 => 11,  57 => 10,  54 => 9,  52 => 8,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section>
  <header>
    <h2 class=\"text-lg font-medium text-gray-900\">Zmień hasło</h2>

    <p class=\"mt-1 text-sm text-gray-600\">Pamiętaj aby ustawić długie, składające się z losowych znaków hasło by być bezpiecznym.</p>
  </header>

  {{ form_start(passwordForm, {'attr': {'class': 'mt-6 space-y-6' }}
\t) }}
    {{ form_label(passwordForm.currentPassword, 'Aktualne hasło', {'label_attr': {'class': 'block font-medium text-sm text-gray-700' }}
\t) }}
    {{ form_widget(passwordForm.currentPassword, {'attr': {'class': 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' }}
\t) }}
    {% if passwordForm.currentPassword.vars['errors']|length > 0 %}
\t\t<ul class=\"text-sm text-red-600 space-y-1 mt-2\">
\t\t\t{% for error in passwordForm.currentPassword.vars['errors'] %}
\t\t\t\t<li>{{ error.message }}</li>
\t\t\t{% endfor %}
\t\t</ul>
\t{% endif %}
    
{{ form_label(passwordForm.newPassword.first, 'Nowe hasło', {'label_attr': {'class': 'block font-medium text-sm text-gray-700' }}
\t) }}
    {{ form_widget(passwordForm.newPassword.first, {'attr': {'class': 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' }}
\t) }}
     {% if passwordForm.newPassword.first.vars['errors']|length > 0 %}
\t\t<ul class=\"text-sm text-red-600 space-y-1 mt-2\">
\t\t\t{% for error in passwordForm.newPassword.first.vars['errors'] %}
\t\t\t\t<li>{{ error.message }}</li>
\t\t\t{% endfor %}
\t\t</ul>
\t{% endif %}
    
{{ form_label(passwordForm.newPassword.second, 'Powtórz nowe hasło', {'label_attr': {'class': 'block font-medium text-sm text-gray-700' }}
\t) }}
    {{ form_widget(passwordForm.newPassword.second, {'attr': {'class': 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full' }}
\t) }}
    {% if passwordForm.newPassword.second.vars['errors']|length > 0 %}
\t\t<ul class=\"text-sm text-red-600 space-y-1 mt-2\">
\t\t\t{% for error in passwordForm.newPassword.second.vars['errors'] %}
\t\t\t\t<li>{{ error.message }}</li>
\t\t\t{% endfor %}
\t\t</ul>
\t{% endif %}
    

    <div class=\"flex items-center gap-4\">
      <button type=\"submit\" class=\"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150\">Zapisz</button>
    {% for message in app.flashes('status-password') %}
    {% if message == 'password-changed' %}
      <p x-data=\"{ show: true }\" x-show=\"show\" x-transition x-init=\"setTimeout(() => show = false, 2000)\" class=\"text-sm text-gray-600\">Saved.</p>
      {% endif %}
    {% endfor %}
    </div>
  {{ form_end(passwordForm) }}
</section>", "dashboard/_update_password_form.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\dashboard\\_update_password_form.html.twig");
    }
}
